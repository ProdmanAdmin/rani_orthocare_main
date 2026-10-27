# SEO & AEO Playbook

The complete process used on a finished client website (local healthcare business, October 2026: health score 54 → 78 / 100 in one month, search score 100 on every page). The code side is already built into this starter; this playbook covers the rest: what to research, what to write, the order of work, how to test, how to report, and the mistakes not to repeat.

## Index

| # | Section |
|---|---|
| 1 | [The process at a glance](#process) |
| 2 | [Phase 1: Website audit (method and scoring)](#audit) |
| 3 | [The audit checklist (45 checks)](#checklist) |
| 4 | [Phase 2: Keyword library](#keywords) |
| 5 | [Phase 3: SEO & AEO growth plan](#plan) |
| 6 | [Phase 4: The 10 implementation tasks](#tasks) |
| 7 | [Writing rules: titles, descriptions, headings, FAQs, photos](#writing) |
| 8 | [Structured data map](#schema) |
| 9 | [Local SEO and listings](#local) |
| 10 | [Go-live checklist](#golive) |
| 11 | [Testing after every deploy](#testing) |
| 12 | [Monthly routine and reporting](#monthly) |
| 13 | [Who does what](#roles) |
| 14 | [Lessons learned (do not repeat)](#lessons) |
| 15 | [Client document rules](#docs) |

---

## 1. The process at a glance {#process}

| Phase | Output (client document) | Typical time |
|---|---|---|
| 1. Audit the current site (or the design build before launch) | **Website Health Audit** with a score out of 100, issues by section with IDs, action plan by owner (template: `docs/templates/audit-report-template.md`) | 1–2 days |
| 2. Keyword research | **Keyword Library** (Markdown/PDF) + keyword CSV (template: `docs/templates/keywords-template.csv`) | 1–2 days |
| 3. Growth plan | **SEO & AEO Growth Plan**, client edition: what we fix, gains next month, keyword use, self-check searches, AEO, listings, social, rules, needs from the client, monthly report; appendices with the metadata table | 1 day |
| 4. Implementation | 10 tasks (section 6), each planned, approved, built, shown before/after | 1–2 weeks |
| 5. Go-live and live check | Live verification (`npm run check:seo -- <live>` + testing guide) | ½ day |
| 6. Report | **Progress report** with the new score (template: `docs/templates/progress-report-template.md`), **testing guide** for the owner, **brief for the designer** | 1 day |
| 7. Monthly | Re-audit, compare scores, AI prompt results, listings, content | ½ day / month |

Build PDFs from Markdown with `tools/md2pdf.py` (see README).

---

## 2. Phase 1: Website audit (method and scoring) {#audit}

**Rule: only report what you verified. Anything you could not check is written "Not verified", with the reason.**

### Sections, weights and scoring

| Section | ID prefix | Weight |
|---|---|---|
| Technical SEO | T | 30% |
| Performance | P | 25% |
| UI / UX | U | 20% |
| AEO (AI answer readiness) | A | 15% |
| Security & Health | S | 10% |

- Each section starts at **100**. Every open issue subtracts: **Critical −15, High −7, Medium −3, Low −1** (floor 0).
- Overall score = Σ (section score × weight), rounded.
- **Partly fixed** issues are re-rated to the size of what is left (say so in the report).
- Status: **Good** ≥ 80 · **Needs attention** 50–79 · **Critical** < 50 **or any open Critical issue** in that section.
- Use the **same method every month** so scores compare. Keep issue IDs stable across reports (T1 stays T1).

### Evidence to collect

| Check | How |
|---|---|
| Every page's title, description, canonical, OG, h1, headings, alt, JSON-LD | `npm run check:seo -- <url>` (or view-source) |
| Lighthouse (Performance, Accessibility, Best Practices, SEO, LCP, CLS, TBT, page weight) on Home, Services, one service page, Contact, phone + desktop | `npx lighthouse <url> --preset=desktop` and without preset for mobile (install outside the repo). Single runs vary: say so. |
| Redirects: http→https, www→apex (or reverse), no-slash→slash, old domain → new | `curl -sIL <url>` |
| robots.txt, sitemap.xml, llms.txt, icons, manifest, 404 | `curl -sI` each |
| Security headers | `curl -sI <url>`; count the 5 |
| SSL expiry, domain expiry | `openssl s_client`, `whois` |
| Dependency vulnerabilities | `npm audit --omit=dev` |
| Contact form delivery | Code review + an agreed real test enquiry (never send fake enquiries to the business unannounced) |
| Google Business Profile, Search Console, Analytics | Needs owner access; otherwise "Not verified" |
| AI assistants | Ask the AI test prompts; record named/not named, correct/incorrect |

### Report structure (client edition)

1. Health summary: overall score, section table, Lighthouse table, "at a glance" (how the site is doing · compared with last month · what is working well).
2. Issues by section: ID, issue, what it means (simple), technical detail, pages, priority, effort, status.
3. Page titles & descriptions review.
4. Action plan in one phase, split by owner: SEO owner / designer / business owner (what we do, why, outcome).
5. Needed from the owner.
6. Monthly care routine.
Appendix: issues at a glance, items not checked.

---

## 3. The audit checklist (45 checks) {#checklist}

The starter already handles the ones marked ✅ by default. Re-check all of them on the real build.

### Technical SEO

| ID | Check | Default priority if failing | Starter |
|---|---|---|---|
| T1 | Canonical, sitemap, robots, OG and structured data all use the official domain; no old domain anywhere | Critical | ✅ `SITE_URL` |
| T2 | Sitemap: right domain, slash form matches the site, real lastmod per page | High | ✅ |
| T3 | Absolute self-referencing canonical on every page | High | ✅ |
| T4 | Full Open Graph + Twitter with an image on every page | Medium | ✅ `pageMetadata()` |
| T5 | One h1 per page, no skipped heading levels | High | ✅ (keep it during design) |
| T6 | Every image has meaningful alt | High | ✅ (keep it during design) |
| T7 | Google Analytics 4 and Search Console verified | High | Owner access needed |
| T8 | Business structured data complete: logo, image, PostalAddress, geo, hasMap, hours, sameAs | Medium | ✅ fields; fill data |
| T9 | favicon.ico, icon, apple-touch-icon, manifest, theme-color | Low | ✅ (replace placeholders) |
| T10 | One redirect hop to the final URL; one URL form | Medium | ✅ slash form; check www/http in hosting |
| T11 | Live site matches the repo (know which branch the host deploys) | Medium | Confirm in hosting |
| T12 | Titles ≤ 60, descriptions ≤ 155, unique, local keyword | Medium | ✅ registry; write them |
| T13 | No thin pages (every indexable page has real content) | Medium | Content |
| T14 | Descriptive link text; named icon links | Low | ✅ |
| T15 | Local-language version (hreflang) if the audience needs it | Low | Owner decision |

### AEO

| ID | Check | Priority | Starter |
|---|---|---|---|
| A1 | `/llms.txt` with business summary, contact, team, services, key pages | Medium | ✅ generated |
| A2 | One exact business name everywhere (site, WhatsApp text, GBP, directories) | High | ✅ `site.name` |
| A3 | Answer-first FAQs on Home, Contact, Team and service pages | High | ✅ component; write them |
| A4 | `sameAs` to real profiles; no dead social icons | Medium | ✅ renders only real links |
| A5 | Reviews/testimonials real, consented, allowed in the industry | Medium | Owner decision |
| A6 | Opening hours identical in text, structured data and GBP | Medium | ✅ one source |
| A7 | No important text only inside images | Low | Design |

### Performance (designer)

| ID | Check | Priority |
|---|---|---|
| P1 | Photos ≤ 1,600 px, WebP/AVIF, ≤ 200 KB; page weight < 2 MB | Critical if pages > 5 MB |
| P2 | `next/image` everywhere; `priority` only on the LCP image; no preloading of many images | High |
| P3 | Total Blocking Time < 200 ms on phone (few animations on load) | High |
| P4 | Long-term caching for static files and images | Medium |
| P5 | Inner pages light (same rules as Home) | High |
| P6 | Nothing large downloaded on phones when hidden there | Low |
| P7 | No legacy JavaScript for very old browsers | Low |

### UI / UX (designer)

| ID | Check | Priority |
|---|---|---|
| U1 | Text contrast ≥ 4.5:1 (brand colours on white and white on brand colours) | High |
| U2 | Call / WhatsApp visible without scrolling on phones | High |
| U3 | No blank hero while the main image loads | Medium |
| U4 | Counters and numbers present in the HTML (not "0" until scrolled) | Medium |
| U5 | No dead icons; Privacy Policy and Terms pages exist | Medium |
| U6 | Tap targets ≥ 44×44 px | Medium |
| U7 | Accessibility: named buttons, iframe titles, pause on autoplay sliders, focus ring, keyboard | Medium |
| U8 | No typos; offers and prices current | Medium |
| U9 | No host badges ("Powered by ...") on the page | Low |
| U10 | Galleries hidden when empty; before/after only where allowed | Low |
| U11 | Map usable (or a clear "open in Maps" link) | Low |

### Security & health

| ID | Check | Priority |
|---|---|---|
| S1 | Contact form really delivers; success only on `response.ok`; honest failure; spam protection | Critical |
| S2 | Framework and dependencies on patched versions (`npm audit`) | High |
| S3 | Security headers (5) on pages and files | Medium |
| S4 | Old domains redirect (301) to the official domain | High |
| S5 | Code tidy: React keys, README current, no warnings | Low |

---

## 4. Phase 2: Keyword library {#keywords}

### What goes in it

| Section | Contents |
|---|---|
| Brand & people | Business name variants, owner/lead names with credentials |
| Trust searches | "best/top/trusted <service> in <area>" (target them with helpful content, never with self-claims) |
| Service-wise | For every service: main term, synonyms, "<service> in <area>", "<service> cost", "<service> near me" |
| Location-wise | Main locality + every nearby area, landmarks, pin code, "near <landmark>" |
| Search behaviour | near me, open now, open on Sunday, timings, cost, appointment, WhatsApp |
| Problems and symptoms | What people type before they know the service name |
| Local language | Local-language and mixed-script (e.g. Tanglish/Hinglish) queries |
| Credentials | Qualifications, specialties, roles (exact, confirmed wording) |
| Procedures/benefits | The words used on service pages |
| **Keyword-to-page map** | One main keyword + supporting keywords per page (this drives titles, h1s and copy) |
| Adjacent searches | Related services the business does not offer yet: confirm before targeting |
| **AEO questions** | Questions already answered on the site + new questions to add (FAQ source) |
| **AI test prompts** | 12–15 prompts to ask AI assistants every month |

### CSV columns

`keyword, category, intent (informational / commercial / transactional / navigational / local), target_page, priority (P1/P2/P3), notes` (template in `docs/templates/keywords-template.csv`).

### How to research (free)

Google autocomplete and "People also ask" (incognito, with location), Google Maps competitors' categories and services, competitor sites' titles, the business's own words (front desk FAQs), Search Console queries once connected. **Search volumes are estimates unless taken from a tool: label them "not verified".**

---

## 5. Phase 3: SEO & AEO growth plan {#plan}

**Client sections:** 1 At a glance · 2 What we will fix (high level) · 3 What you will gain next month and over 2–3 months (with an honest note on timing: changes show in 1–4 weeks, positions in 2–3 months, AI assistants longer; nobody can promise positions) · 4 How the keywords will be used, the **12 keywords we track** and **check-it-yourself searches** · 5 AI assistants (AEO) · 6 Listings · 7 Social media in brief · 8 What we will never publish · 9 What we need from you · 10 What you will receive every month.

**Appendices:** A **Meta titles & descriptions table** (page, title with character count, description with character count, main keyword: this is the source for `lib/pages.js` and `data/services.js`) · B Full listings list · C Social kit (voice, words, bios, hashtags, weekly rhythm, captions) · D Research and rules · E AEO checklist · F Open items and not verified · G 90-day timeline.

---

## 6. Phase 4: The 10 implementation tasks {#tasks}

Run them in this order. **Before each task: a plan with the exact visible wording, behind-the-scenes changes, what will not change and the decisions needed; wait for approval. After each task: before/after document, task list with status, then commit and push when asked.**

| # | Task | Audit IDs | In this starter | Still to do per project |
|---|---|---|---|---|
| 1 | Official web address everywhere: `SITE_URL`, canonicals, sitemap, robots, redirects | T1 T2 T3 T10 | ✅ built | Set the env var; old-domain 301s in the old host/DNS |
| 2 | Titles, descriptions, social previews for every page | T12 T4 | ✅ helper + registry | Write the text from Appendix A; branded OG image |
| 3 | Headings, photo descriptions, keyword placement | T5 T6 | ✅ outline | Keep it while applying the design; write h1s and alts |
| 4 | Business + people structured data; one business name | T8 A2 | ✅ built | Fill `lib/site.js`, `data/team.js`; validate |
| 5 | Answer-first FAQs (Home, Contact, Team, services) | A3 | ✅ component | Write the FAQs from the AEO list |
| 6 | Expand thin pages | T13 | — | Content per page |
| 7 | Google Analytics 4 + Search Console (+ Bing) | T7 | — | Owner access; add GA4 via `@next/third-parties` or a script; verify via DNS TXT |
| 8 | Dependencies + security headers | S2 S3 | ✅ built | `npm audit` monthly |
| 9 | Local pages (Areas We Serve) and a helpful guide page | local | ✅ Areas page | Areas list; one "how to choose a ..." guide page (helpful, no self-claims) |
| 10 | Icons, manifest, llms.txt, link names, tidy-ups | T9 A1 T14 S5 | ✅ built | Replace placeholder icons |

---

## 7. Writing rules {#writing}

| Element | Rule | Pattern |
|---|---|---|
| Title | ≤ 60 characters, unique, main keyword first, brand last | `<Service> in <Area>, <City> \| <Brand>` · Home: `<Business type> in <Area>, <City> \| <Brand>` · Team: `<Name>, <Credentials> \| <Role>, <Area>` · Contact: `Book a <Business type> Appointment in <Area> \| <Brand>` |
| Description | 120–155 characters, unique, what + for whom + where + next step; real facts only | "<Service> in <Area>, <City> for <who>. <One specific detail>. Book a visit." |
| h1 | One per page, contains the main keyword naturally | Home h1 can be a short line ("Dental Clinic in Area, City") with the tagline as a paragraph |
| First paragraph | Answers "what is this and who is it for" in the first sentence | |
| Location in body copy | **At most once per visible page** | Titles/descriptions may carry it |
| FAQ answer | First sentence = the answer; 40–60 words; no promises | |
| Photo alt | Describe the picture, add the topic naturally; decorative → `alt=""` | "Dentist explaining a treatment plan to a patient" |
| Link text | Says where it goes | "View all services", "Read about root canal treatment" |
| Never | "best", "top", "No. 1", "leading", "guaranteed", "100% painless", long dashes (—), invented facts, keyword lists | |

---

## 8. Structured data map {#schema}

| Page | Types | Source |
|---|---|---|
| Home | Business (`site.schemaType`), WebSite, FAQPage | `businessSchema()`, `websiteSchema()`, `FAQ` |
| Contact | Business, BreadcrumbList, FAQPage | |
| Team | Person per member, BreadcrumbList, FAQPage (if any) | `personSchema()` |
| Services list, About, Areas, legal pages | BreadcrumbList | `Breadcrumb` |
| Each service | Service or MedicalProcedure (provider = business ref), BreadcrumbList, FAQPage | `serviceSchema()` |

Notes: Google shows FAQ rich results mainly for large health/government sites; the markup still helps AI assistants. Leave out what you cannot back up (no `aggregateRating` without real, displayed reviews; no `priceRange` without real prices). Days "by appointment" are left out of `openingHoursSpecification` and stated in text (`site.hoursNote`).

---

## 9. Local SEO and listings {#local}

1. **Google Business Profile** (most important): exact name, primary + secondary categories, address pin, hours incl. holidays, phone, website, services, photos, weekly posts, reply to every review. Get **Manager access** for the SEO owner.
2. **Bing Places** (import from GBP) and **Apple Business Connect**.
3. Directories relevant to the industry and country (e.g. Justdial, Sulekha; healthcare: Practo, Lybrate; legal/finance: their professional directories).
4. **NAP consistency:** the same name, address, phone and hours on every listing, character for character.
5. Social profiles with the same name and a link to the site; add their URLs to `site.sameAs`.

---

## 10. Go-live checklist {#golive}

| # | Check |
|---|---|
| 1 | `NEXT_PUBLIC_SITE_URL` set in hosting; `npm run check:seo -- <live> --strict` → 0 problems, 0 placeholders |
| 2 | Real icons, OG image, logo; Privacy and Terms with approved text |
| 3 | Contact form: one real test enquiry received; notification email set in Netlify Forms |
| 4 | Redirects: http→https, www↔apex to the chosen form, old domain → new (301) |
| 5 | 5 security headers on pages (`curl -sI`) |
| 6 | Lighthouse targets met on the 4 key pages |
| 7 | Search Console: verify (DNS TXT), submit sitemap; Bing Webmaster Tools (import) |
| 8 | GA4 receiving visits |
| 9 | Google Business Profile website link points to the new domain |
| 10 | Domain auto-renew on; 2FA on hosting, domain and Git accounts |

---

## 11. Testing after every deploy {#testing}

- Automatic: `npm run check:seo -- https://<live-domain>` (add `OLD_DOMAINS=old.com` if there was one).
- Manual, owner-friendly: `docs/templates/testing-guide-template.md` (quick check after each update, Google searches for the tracked keywords, Rich Results Test, Schema Markup Validator, PageSpeed Insights, security header checker, Search Console, AI prompts, Google Business Profile).

---

## 12. Monthly routine and reporting {#monthly}

| Every month | Who |
|---|---|
| Re-run the audit on the live site; save `audits/audit-YYYY-MM-DD.md` + PDF; compare score, fixed / still open / new | SEO owner |
| Search Console: indexing, Core Web Vitals, queries, clicks, positions for the 12 tracked keywords | SEO owner (with access) |
| AI test prompts in ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews; record in HANDOFF.md | SEO owner |
| `npm audit`; SSL and domain expiry | SEO owner |
| 2–4 new FAQs or articles from real customer questions; refresh hours, offers, photos | Owner + SEO owner |
| GBP: 4 posts, reply to reviews, check details | Owner |

Progress report structure: at a glance → score before/now by section → what we did and what it means → what is working well → Lighthouse before/now → still open by owner → needs from the owner → next month → appendix with every issue then/now (template in `docs/templates/`).

---

## 13. Who does what {#roles}

| Owner | Scope |
|---|---|
| SEO owner (developer) | SEO, AEO, structured data, metadata, sitemap/robots, Search Console, analytics, dependencies, security headers, domain renewal, monthly audit |
| Designer / UI team | Design system, contact form styling and connection test, images and speed (P-series), all UI/UX items (U-series) |
| Business owner | Account access (Search Console, GBP, Analytics, hosting), facts, photos, approvals, compliance decisions |

Write a separate brief for the designer with: ground rules (what not to break), tasks in priority order with "done when", Lighthouse targets, colour values, what the owner must supply, hand-over checklist.

---

## 14. Lessons learned (do not repeat) {#lessons}

| What happened | Rule now |
|---|---|
| The site told Google its home was an old, broken domain (hard-coded in 12 files) | One `SITE_URL`; `OLD_DOMAINS` check |
| `/about` and `/about/` both worked; repo and live differed in slash form | Decide the slash form before launch; `trailingSlash: true` |
| Pages set their own `openGraph` and silently lost the layout's image and site name | Always `pageMetadata()` |
| Stat counters were `<h1>` and showed "0" before scrolling | Counters are `<p>` with the real number in the HTML |
| The location keyword was added 77 times in one pass; the owner called it a mess | Location at most once per visible page; show wording for approval first |
| Long dashes in new copy read as machine-written | No long dashes in website copy |
| Netlify `[[headers]]` did not reach pages served by the Next.js runtime | Headers in `next.config.js` and `netlify.toml` |
| The contact form showed "Message Received!" while nothing was delivered | Netlify Forms via `public/__forms.html`, success only on `response.ok`, real test before launch |
| Netlify blocked builds: "unrecognized Git contributor" (free plan, private repo) | Commit as the linked Git account; no co-author lines; link the account under Git contributors |
| Camera photos of 4–12 MB made the home page 12 MB | Photo rules (≤ 200 KB, WebP/AVIF, `next/image`) |
| Dev server screenshots showed wrong fonts and animation states | Screenshots and reviews from the production server |
| A regulator advisory on healthcare advertising arrived mid-project | Check the industry's advertising rules before writing copy; record them in CLAUDE.md |
| Experience was given as two numbers (clinic years, teaching years) | Never add numbers together; state facts exactly as given |

---

## 15. Client document rules {#docs}

- Plain language. **Index first**, then what we fix, the outcome for the client and how they can check it. Technical detail goes in appendices.
- **No branch names, code details, file paths or repository links** in client documents.
- Every claim verified; otherwise "Not verified".
- Show the before/after for every change the client can see; get approval before publishing visible wording.
- One document index (`DOCUMENTS.md` in the project) listing every client and internal document with version and date.
