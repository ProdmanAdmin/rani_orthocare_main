# Project Instructions (Next.js SEO Starter)

> **Fill in this box first** (then delete this line):
> Business: **REPLACE** · Official domain: **https://REPLACE** · Hosting: Netlify · Owner of the hosting account: **REPLACE** · Git account linked in Netlify: **REPLACE** · Industry advertising rules: **REPLACE** (e.g. none / medical / legal / financial)

This website was started from the **Next.js SEO Starter**: the complete SEO and AEO (AI answer-engine) structure from a finished client project, with the design left open. The design system and page templates come from the design team; the SEO structure below must stay intact while they are applied.

Stack: Next.js 15 (App Router, JavaScript), React 19, Tailwind CSS 3. No database. Netlify (Next.js runtime).

## Read first

| Document | Use it for |
|---|---|
| `SEO-PLAYBOOK.md` | **The complete SEO/AEO process**: audit method and scoring, keyword library, growth plan, the 10 implementation tasks, testing, go-live, monthly routine, lessons learned. Do not re-plan SEO from scratch: follow the playbook. |
| `README.md` | Setup, where every setting lives, first-day checklist, deploy steps |
| `DESIGN.md` | Design tokens, components, accessibility rules (fill it in when the design system arrives) |
| `HANDOFF.md` | Where the last session stopped. **Read at session start, update at session end.** |
| `docs/templates/` | Audit report, testing guide, progress report, keyword CSV templates for client documents |

## Where everything lives (single sources of truth)

| What | File | Rule |
|---|---|---|
| Business facts: name, phone, address, hours, geo, map, social links, schema type, theme colour | `lib/site.js` | The only place facts are written. Never hard-code them in components. Never invent facts: if not confirmed, leave empty. |
| Site address | `SITE_URL` in `lib/site.js` (env `NEXT_PUBLIC_SITE_URL`) | Never hard-code a domain anywhere else. |
| Fixed pages: h1, path, title, description, sitemap priority | `lib/pages.js` | Pages import their entry; the sitemap reads the same registry. |
| Services (one page each at `/services/<slug>/`) | `data/services.js` | Add or edit services in data, never by copying pages. Never change a live slug. |
| FAQs for Home, Contact, Team | `data/faqs.js` | Answer-first. |
| Team (Person structured data) | `data/team.js` | Credentials exactly as confirmed. |
| Metadata helper (title, description, canonical, Open Graph, Twitter) | `lib/seo.js` → `pageMetadata()` | Every page uses it. |
| Structured data | `lib/schema.js` + `components/JsonLd.js` | Business, WebSite, Person, Service/MedicalProcedure, FAQPage, BreadcrumbList. |
| Sitemap, robots, manifest, AI summary | `app/sitemap.js`, `app/robots.js`, `app/manifest.js`, `app/llms.txt/route.js` | All generated from the data above. |
| Icons | `app/icon.png` (512), `app/apple-icon.png` (180), `app/favicon.ico` (32+48) | Replace the placeholders with the real logo, padded square. |
| Default sharing image | `public/og-default.png` (1200×630) | Replace with a branded image. |
| Security headers | `next.config.js` **and** `netlify.toml` | Keep the two lists identical (see SEO rule 9). |
| Contact form | `components/ContactForm.js` + `public/__forms.html` | Field names must match in both files. |
| SEO check | `scripts/check-seo.mjs` (`npm run check:seo`) | Run before every push and after every deploy. |

## SEO rules (from the audit's T-series; never break these)

1. **One site URL.** Everything uses `SITE_URL` / `absoluteUrl()`. `metadataBase` is set in `app/layout.js`. If the business had an old domain, it must 301-redirect to the new one and never appear in the code (`OLD_DOMAINS=old.com npm run check:seo` must pass).
2. **Every page:** absolute self-referencing canonical; unique title ≤ 60 characters; unique description ≤ 155; Open Graph (title, description, url, image, site name, type, locale) and Twitter card. Always through `pageMetadata()`: a page-level `openGraph` **replaces** the layout's, so never write a partial one by hand.
3. **One `<h1>` per page, no skipped levels** (h1 → h2 → h3). Stat counters, card titles, testimonial names and footer titles are not headings (style them like headings if the design needs it). Footer headings are h2.
4. **Every image has meaningful `alt`**; decorative images use `alt=""`. Use `next/image`, never raw `<img>` for content.
5. **Trailing slash form** (`/about/`) everywhere: `trailingSlash: true`, internal links with the slash, sitemap and canonicals with the slash. Decide before launch and never flip it.
6. **Sitemap** lists every indexable page with its real last-changed date (`CONTENT_UPDATED`, `updatedAt`), never the build time.
7. **robots** allows every crawler including AI bots (Googlebot, Bingbot, OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot). Never add `noindex` or `Disallow` by accident.
8. **Structured data** only states facts visible on the site or confirmed by the business. No fake ratings or reviews. Add `sameAs` and person `image` only when real links/photos exist. Validate with Google's Rich Results Test.
9. **Security headers in two places.** Netlify applies `netlify.toml` `[[headers]]` only to static files; pages from the Next.js runtime need `next.config.js` `headers()`. Both lists must match. No CSP until it is tested on a preview deploy.
10. **Keywords:** each page gets one main keyword and a few supporting ones from the keyword map. Main keyword in the title, description, h1, first lines and one photo description. **Natural wording, no stuffing.** Name the business's location **at most once per visible page** in body copy (titles and descriptions may carry it).
11. **Page names in Google** come from the growth plan's metadata table. Use that exact text unless the owner changes it.

## AEO rules (A-series)

- FAQs: the first sentence answers the question; 40–60 words; plain words; FAQPage structured data comes with the `FAQ` component automatically. Questions come from the keyword library's AEO list.
- One exact business name everywhere (site, Google Business Profile, directories, social). Same name, address, phone and hours everywhere (NAP consistency).
- `llms.txt` is generated from the data: keep `lib/site.js` and `data/` accurate and it stays accurate.
- Service pages show "Reviewed by" (when `site.reviewer` is set) and "Last updated".
- Monthly: ask the AI test prompts (keyword library) in ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews; record the results in HANDOFF.md.

## Content and compliance

- **Never invent facts** (prices, insurance, years of experience, awards, parking, registration numbers). Ask, or leave it out.
- Experience and credentials exactly as the person states them. Never add two numbers into one.
- **No superlatives or promises**: no "best", "top", "No. 1", "leading", "guaranteed", "100%". Use calm, specific words. (Regulated industries such as healthcare, legal and finance have extra advertising rules: record them at the top of this file before writing copy.)
- **No long dashes (—) in new website copy.** Use commas, colons or full stops.
- No testimonials, before/after photos or offers unless the owner has confirmed they are allowed in their industry.
- Placeholders start with `REPLACE:`. `npm run check:seo -- <url> --strict` fails while any are visible. Never launch with placeholders.

## Images and performance (P-series)

- `next/image` with `width`/`height` (or `fill` + `sizes`); `priority` only on the single main (LCP) image of the page.
- Source photos ≤ 1,600 px wide, WebP/AVIF, ≤ 200 KB each, never over 500 KB. Never upload camera originals.
- Prefer Server Components; Client Components only for interaction (form, menu, slider). The starter ships one client component (the form).
- Animations: few on first load, respect `prefers-reduced-motion`.
- Targets: Lighthouse Performance ≥ 90, Accessibility ≥ 95, Best Practices 100, SEO 100 on Home, Services, one service page and Contact, phone and desktop.

## Accessibility and UI (U-series)

- Text contrast ≥ 4.5:1 (large text and borders ≥ 3:1). Check every token pair in `app/globals.css`.
- Tap targets ≥ 44×44 px. Visible focus ring (`:focus-visible` is set). Keyboard access everywhere. Skip link kept.
- Name every icon-only button and link; give every iframe a `title`. No dead icons: social links render only from real URLs in `site.sameAs`.
- Phones: Call / WhatsApp / Contact always one tap away (`MobileActionBar`).
- Privacy Policy and Terms pages exist: fill them with approved text before launch.

## Contact form (S1)

- Netlify Forms on the Next.js runtime: the form is declared in `public/__forms.html`; the component POSTs to `/__forms.html`. Netlify only detects forms in static HTML.
- Success only when `response.ok`. Failure is shown honestly with the phone number. Honeypot `bot-field` stays.
- Locally the POST returns 405 (expected). **Test on a deploy: send one real test enquiry and confirm it arrives** before launch. Set the notification email in Netlify → Forms.

## Security and dependencies (S-series)

- Keep Next.js and React on a patched release; run `npm audit` monthly; after any dependency change, rebuild and run `npm run check:seo`.
- Never commit secrets; `.env*` is git-ignored (`.env.example` is the template).
- Switch on two-step login (2FA) for the hosting, domain and Git accounts.

## Git, Netlify and deploys

- **Commit identity:** commit with the Git account linked in Netlify (set `git config user.name` / `user.email` in this repo to that account, e.g. its GitHub no-reply address). On Netlify's free plan, a private repo accepts builds from **one linked Git contributor**: commits by anyone else fail with "unrecognized Git contributor".
- **No `Co-Authored-By` lines** in commit messages (Netlify may count co-authors as contributors).
- If a build is blocked: Netlify → Team → Members → **Git contributors** → link the contributor to the owner's account, or connect the right GitHub account under User settings, then **Retry deploy → Clear cache and retry**.
- Set `NEXT_PUBLIC_SITE_URL` in Netlify environment variables. Node 22 is set in `netlify.toml`.
- Work on a branch per task; commit and push only when the owner asks; reference audit IDs in messages (e.g. `fix(seo): canonicals (T3)`).

## How to work (agent behaviour)

0. Client documents are in plain language: index first, then what we fix, the outcome and how they can check; technical detail in appendices. **No branch names, code details or repository links in client documents.**
1. Read HANDOFF.md, then the playbook section for the task.
2. Inspect before changing; reuse the components and helpers; no new library unless unavoidable.
3. **Before each task:** present the plan (exact visible wording, behind-the-scenes changes, what will not change, decisions needed) and wait for OK.
4. **After each task:** show before/after (screenshots or PDF), the task list with status, then ask before commit/push.
5. Report faithfully: say what was verified and what was not; mark anything unchecked "Not verified".
6. At session end: update HANDOFF.md and show the updated documents.

## Verification (minimum, every change)

```bash
npm run build                 # must pass
npm run start                 # production server (use it for screenshots, not the dev server)
npm run check:seo             # in a second terminal: every sitemap page, 0 problems
```
Also check changed pages at 375 px and desktop width. After a deploy: `npm run check:seo -- https://<live-domain>` and the testing guide (docs/templates/testing-guide-template.md). Re-run Lighthouse when images or layout change.
