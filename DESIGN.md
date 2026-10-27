# DESIGN.md

Fill this in when the design system and templates arrive. Record every design decision here so the site stays consistent. The SEO and accessibility rules in CLAUDE.md always apply on top of the design.

## Tokens

Set in `app/globals.css` (`:root` CSS variables, space-separated RGB) and mapped in `tailwind.config.js`.

| Token | Value | Used for | Contrast (must be ≥ 4.5:1 for text) |
|---|---|---|---|
| `brand` | `#1d4ed8` (placeholder) | Buttons, links, active states | White on brand: 6.7:1 |
| `ink` | `#111827` | Headings | |
| `body` | `#374151` | Body text | 10.3:1 on white |
| `muted` | `#4b5563` | Secondary text | 7.6:1 on white |
| `surface` | `#f8fafc` | Page background | |

Add the design system's colours here with their contrast ratios (text on background and white on each fill).

## Typography

Add fonts with `next/font` in `app/layout.js` (self-hosted, no layout shift). Record: heading font + weights, body font + weights, sizes per level (h1, h2, h3, body, small).

## Layout

Containers, grid, breakpoints (Tailwind defaults: sm 640, md 768, lg 1024, xl 1280), spacing scale, header/footer behaviour.

## Components

| Component | Source | Notes |
|---|---|---|
| Header + mobile menu | `components/Header.js` | `<details>` menu, works without JavaScript; 44 px targets |
| Footer | `components/Footer.js` | h2 headings; social links only from `site.sameAs` |
| Mobile action bar | `components/MobileActionBar.js` | Call / WhatsApp / Contact on phones |
| Breadcrumb | `components/Breadcrumb.js` | With structured data |
| FAQ | `components/FAQ.js` | `<details>`; with structured data |
| Contact form | `components/ContactForm.js` | Success only on delivery; honest error |
| Buttons and fields | `.btn-primary`, `.field` in `app/globals.css` | |

## Images

≤ 1,600 px wide, WebP/AVIF, ≤ 200 KB each (never over 500 KB), `next/image` with dimensions and `sizes`, `priority` on the one main image per page, descriptive alt text. Only images the business owns or has licensed; in regulated industries, no patient/client photos without consent.

## Checklist before shipping any UI change

- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for large text and borders)
- [ ] Works at 375 px, 768 px and ≥ 1280 px; no horizontal scroll
- [ ] Tap targets ≥ 44×44 px; focus visible; keyboard operable
- [ ] Every image has dimensions and alt text; ≤ 200 KB
- [ ] One h1 per page, no skipped heading levels
- [ ] No superlatives, invented facts, or unapproved offers/testimonials
- [ ] `npm run build` and `npm run check:seo` pass; Lighthouse Accessibility ≥ 95
