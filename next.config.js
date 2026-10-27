/** @type {import('next').NextConfig} */

// Security headers for every page and file. netlify.toml sets the same list, because Netlify applies its
// [[headers]] only to static files: pages served by the Next.js runtime get them from here.
// Keep both lists identical. Content-Security-Policy is not set yet: add it only after testing every
// embed (maps, analytics, chat widgets) on a preview deploy.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig = {
  // One URL form for every page: /about/ (with slash). /about redirects to it. Canonicals, sitemap and
  // internal links all use the slash form (see absoluteUrl in lib/site.js). Decide this before launch and never flip it.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
