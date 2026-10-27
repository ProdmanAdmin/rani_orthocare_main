# Next.js SEO Starter

A ready-to-deploy Next.js 15 website with the complete SEO and AEO structure built in: one site address, page metadata, structured data, sitemap, robots, AI summary (`llms.txt`), icons, security headers, an accessible layout, a working Netlify contact form, and an automatic SEO check. The design is intentionally plain: apply your design system on top.

- **Rules for working on the site:** `CLAUDE.md`
- **The full SEO/AEO process (audit, keywords, growth plan, tasks, testing, reporting):** `SEO-PLAYBOOK.md`
- **Document templates:** `docs/templates/`

## 1. Start a new repo from this folder

```bash
cd nextjs-seo-starter
git init
git config user.name "YOUR-GITHUB-USERNAME"
git config user.email "YOUR-ID+YOUR-GITHUB-USERNAME@users.noreply.github.com"
git add .
git commit -m "chore: start from Next.js SEO Starter"
git branch -M main
git remote add origin https://github.com/OWNER/NEW-REPO.git
git push -u origin main
```

Use the GitHub account that will be linked in Netlify for every commit (see CLAUDE.md, "Git, Netlify and deploys").

## 2. Run it

Needs Node 18.18 or newer (22 recommended, see `.nvmrc`).

```bash
npm install
cp .env.example .env.local      # then set NEXT_PUBLIC_SITE_URL to the new domain
npm run dev                     # http://localhost:3000
```

Production build and the SEO check:

```bash
npm run build
npm run start                   # terminal 1: production server
npm run check:seo               # terminal 2: checks every page in the sitemap
```

## 3. First-day checklist (replace the placeholders)

Every placeholder starts with `REPLACE:`. `npm run check:seo -- <url> --strict` fails until all are gone.

| # | File | What to fill in |
|---|---|---|
| 1 | `.env.local` and the Netlify environment variables | `NEXT_PUBLIC_SITE_URL` |
| 2 | `lib/site.js` | Name, short name, tagline, description, schema type, phone, WhatsApp, email, address, geo, map link, hours, areas served, social links, theme colour, nav |
| 3 | `lib/pages.js` | h1, title and description for each fixed page (from the growth plan's metadata table) |
| 4 | `data/services.js` | One entry per service (replace the two examples) |
| 5 | `data/faqs.js`, `data/team.js` | FAQs and team members |
| 6 | `app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`, `public/og-default.png` | Real logo icons (square, padded) and a 1200×630 sharing image |
| 7 | `app/about/page.js`, `app/privacy-policy/page.js`, `app/terms/page.js` | Approved text |
| 8 | `app/globals.css`, `tailwind.config.js`, `DESIGN.md` | Design tokens and fonts from the design system |
| 9 | `CLAUDE.md` (box at the top) | Business, domain, hosting owner, linked Git account, industry rules |
| 10 | Not a local business? | Delete `app/areas-we-serve/`, its entry in `lib/pages.js` and its footer link |

## 4. Deploy on Netlify

1. Netlify → Add new site → Import from Git → choose the repo. Build command `npm run build` (from `netlify.toml`); Netlify detects Next.js automatically.
2. Site configuration → Environment variables → `NEXT_PUBLIC_SITE_URL = https://your-domain`.
3. Domain management → add the domain; choose the primary form (www or apex) and let the other redirect to it.
4. Forms → enable form detection; set the notification email. Deploy, then send one real test enquiry.
5. Team → Members → Git contributors: make sure the GitHub account you commit with is linked (free plan: one contributor on a private repo).
6. After every deploy: `npm run check:seo -- https://your-domain`.

## 5. What is where

```
app/                  pages (App Router), sitemap.js, robots.js, manifest.js, llms.txt/route.js, icons
  services/[slug]/    one page per entry in data/services.js
components/           Header, Footer, MobileActionBar, Breadcrumb, FAQ, JsonLd, ContactForm
lib/site.js           business facts + SITE_URL (single source)
lib/pages.js          h1, title, description, sitemap settings per fixed page
lib/seo.js            pageMetadata(): title, description, canonical, Open Graph, Twitter
lib/schema.js         structured data builders
data/                 services, FAQs, team
public/__forms.html   Netlify Forms registration (must match ContactForm fields)
scripts/check-seo.mjs automatic SEO check
docs/templates/       audit, testing guide, progress report, keyword CSV templates
tools/md2pdf.py       builds branded PDFs from the Markdown documents
```

## 6. Client documents as PDF

```bash
pip3 install --target /tmp/md2pdf-lib markdown        # once
PYTHONPATH=/tmp/md2pdf-lib python3 tools/md2pdf.py report.md report.pdf "Header title"
```
Needs Google Chrome. Set your company name and an optional logo at the top of `tools/md2pdf.py` (or with the environment variables shown there).

## Versions

Next.js 15.5.28, React 19.3.1, Tailwind CSS 3.4.19 (as built and tested). Run `npm audit` monthly and keep Next.js on a patched release.
