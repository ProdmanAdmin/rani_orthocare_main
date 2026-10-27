#!/usr/bin/env node
// SEO check for every page in the sitemap: the same checks the audit uses (T1–T6, T9, A1, S3).
//
//   npm run build && npm run start            # in one terminal
//   npm run check:seo                          # checks http://localhost:3000
//   npm run check:seo -- https://www.example.com          # checks the live site
//   npm run check:seo -- https://www.example.com --strict # also fails on "REPLACE:" placeholders
//   OLD_DOMAINS=old-site.in npm run check:seo -- <url>    # fail if an old domain appears anywhere
//
// Exit code 1 when any check fails, so it can run before every release.

const args = process.argv.slice(2);
const base = (args.find((a) => !a.startsWith("--")) || "http://localhost:3000").replace(/\/+$/, "");
const strict = args.includes("--strict");
const oldDomains = (process.env.OLD_DOMAINS || "").split(",").map((d) => d.trim()).filter(Boolean);

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const unescape = (s) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (m, e) =>
    e[0] === "#" ? String.fromCodePoint(e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : ENTITIES[e] ?? m
  );
const meta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`, "i"));
  return m ? unescape(m[1]) : "";
};

async function get(url, opts = {}) {
  const res = await fetch(url, { redirect: "manual", headers: { "User-Agent": "seo-check" }, ...opts });
  return { res, text: res.status === 200 ? await res.text() : "" };
}

const errors = [];
const warnings = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

// 1. robots.txt → sitemap → official origin (SITE_URL as built)
const robots = await get(`${base}/robots.txt`);
if (robots.res.status !== 200) {
  console.error(`robots.txt returned ${robots.res.status} at ${base}. Is the site running?`);
  process.exit(1);
}
const sitemapLine = robots.text.match(/^Sitemap:\s*(\S+)/im);
if (!sitemapLine) fail("robots.txt", "no Sitemap line");
if (/Disallow:\s*\/\s*$/im.test(robots.text)) fail("robots.txt", "blocks the whole site (Disallow: /)");
const origin = sitemapLine ? new URL(sitemapLine[1]).origin : base;
if (origin.includes("example.com")) warn("site", "NEXT_PUBLIC_SITE_URL is still the example domain");

const sitemap = await get(`${base}/sitemap.xml`);
const locs = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!locs.length) fail("sitemap.xml", "no URLs");
for (const loc of locs) if (!loc.startsWith(origin + "/")) fail("sitemap.xml", `URL on another domain: ${loc}`);
const lastmods = new Set([...sitemap.text.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1].slice(0, 10)));
if (lastmods.has(new Date().toISOString().slice(0, 10)) && lastmods.size === 1)
  warn("sitemap.xml", "every lastmod is today: use real content dates, not the build time");

// 2. Every page
const seenTitles = new Map();
const seenDescriptions = new Map();
const rows = [];
for (const loc of locs) {
  const path = new URL(loc).pathname;
  const { res, text: html } = await get(base + path);
  const problems = [];
  if (res.status !== 200) {
    fail(path, `status ${res.status}`);
    rows.push([path, "FAIL", "", ""]);
    continue;
  }
  const title = unescape((html.match(/<title>([^<]*)<\/title>/i) || [])[1] || "");
  const description = meta(html, "name", "description");
  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i) || [])[1] || "";
  const body = (html.split(/<body[^>]*>/i)[1] || "").replace(/<script[\s\S]*?<\/script>/gi, "");
  const levels = [...body.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  const h1Count = levels.filter((l) => l === 1).length;

  if (!title) problems.push("no title");
  else if (title.length > 60) problems.push(`title ${title.length} chars (max 60)`);
  if (!description) problems.push("no description");
  else if (description.length > 155) problems.push(`description ${description.length} chars (max 155)`);
  if (title) seenTitles.set(title, [...(seenTitles.get(title) || []), path]);
  if (description) seenDescriptions.set(description, [...(seenDescriptions.get(description) || []), path]);
  if (canonical !== origin + path) problems.push(`canonical "${canonical}" should be "${origin + path}"`);
  if (meta(html, "property", "og:url") !== origin + path) problems.push("og:url missing or wrong");
  if (!meta(html, "property", "og:title") || !meta(html, "property", "og:description")) problems.push("og:title/og:description missing");
  if (!meta(html, "property", "og:image")) problems.push("og:image missing");
  if (!meta(html, "name", "twitter:card")) problems.push("twitter:card missing");
  if (h1Count !== 1) problems.push(`${h1Count} h1 headings (need exactly 1)`);
  for (let i = 1; i < levels.length; i++)
    if (levels[i] > levels[i - 1] + 1) {
      problems.push(`heading skips h${levels[i - 1]} → h${levels[i]}`);
      break;
    }
  const noAlt = [...body.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)].length;
  if (noAlt) problems.push(`${noAlt} image(s) without alt`);
  if (/noindex/i.test(meta(html, "name", "robots"))) problems.push("page is noindex but listed in the sitemap");
  const types = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]);
      types.push(...[].concat(data).map((d) => d["@type"]));
    } catch {
      problems.push("structured data is not valid JSON");
    }
  }
  for (const d of oldDomains) if (html.includes(d)) problems.push(`old domain "${d}" found`);
  if (/REPLACE:/.test(body + title + description)) {
    if (strict) problems.push("REPLACE: placeholder text");
    else warn(path, "REPLACE: placeholder text");
  }

  problems.forEach((p) => fail(path, p));
  rows.push([path, problems.length ? "FAIL" : "OK", `h1:${h1Count}`, types.join(",")]);
}
for (const [t, paths] of seenTitles) if (paths.length > 1) fail("titles", `"${t}" used on ${paths.join(", ")}`);
for (const [d, paths] of seenDescriptions) if (paths.length > 1) fail("descriptions", `same description on ${paths.join(", ")}`);

// 3. Site files, redirects, 404 and security headers
for (const file of ["/llms.txt", "/manifest.webmanifest", "/icon.png", "/apple-icon.png", "/favicon.ico"]) {
  const { res } = await get(base + file);
  if (res.status !== 200) fail(file, `status ${res.status}`);
}
const missing = await get(`${base}/this-page-should-not-exist-${Date.now()}/`);
if (missing.res.status !== 404) fail("404", `unknown page returned ${missing.res.status}, expected 404`);
const firstInner = locs.map((l) => new URL(l).pathname).find((p) => p !== "/");
if (firstInner) {
  const noSlash = await get(base + firstInner.replace(/\/$/, ""));
  if (![301, 308].includes(noSlash.res.status)) fail("redirects", `${firstInner.replace(/\/$/, "")} returned ${noSlash.res.status}, expected 301/308 to ${firstInner}`);
}
const home = await get(`${base}/`);
const required = ["x-content-type-options", "x-frame-options", "referrer-policy", "permissions-policy", "strict-transport-security"];
for (const h of required) if (!home.res.headers.get(h)) fail("security headers", `${h} missing on /`);

// Report
console.log(`\nSEO check: ${base}  (official origin from sitemap: ${origin})\n`);
for (const [path, status, h1, types] of rows) console.log(`${status.padEnd(4)} ${path.padEnd(42)} ${h1.padEnd(6)} ${types}`);
console.log(`\n${rows.length} pages · ${errors.length} problem(s) · ${warnings.length} warning(s)`);
if (warnings.length) console.log("\nWarnings:\n" + [...new Set(warnings)].map((w) => "  - " + w).join("\n"));
if (errors.length) {
  console.log("\nProblems:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log("\nAll checks passed.");
