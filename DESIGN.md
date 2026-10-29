# DESIGN.md: Rani Ortho Care Design System

Version 1.0 (draft for approval), 2026-10-29. The visual mood board for this system is section 4 of the project prototype (`prototype/design-system.html`).

This is the single source for how the website looks. The SEO, accessibility and content rules in `CLAUDE.md` always apply on top, and the business core in `docs/business-model.md` decides what the design must say.

---

## 1. Who we design for

The website serves people within about **15 to 20 km of the clinic** in Karaikudi. Most visitors arrive with pain and limited patience, often on a phone.

| Reader | What they need from the page |
|---|---|
| **Elderly patient** (60+), knee, back or hip pain, may walk with difficulty. Often reads Tamil better than English. Eyesight may be weaker. | Big, clear text. One obvious next step (call). Pictures that explain. Nothing that moves or hides. |
| **Family member** (25 to 50) booking for a parent. Reads English and Tamil, often from a phone, sometimes from another city. | Doctor, services, timings, location and phone found within seconds. |
| **Working adult** (IT, driver, rider, manual worker) with neck or back pain, or wanting prevention. | Plain explanation of the problem and what the clinic does about it. |
| **Parent** of a child with clubfoot or a bone or leg problem. | Reassurance, a clear explanation, the doctor's details. |

Many readers are **biliterate** (Tamil and English) and some read only one language comfortably. The design must work for a slow reader, a reader with weak eyesight, and a reader using a low-cost Android phone in bright sunlight.

## 2. Design principles

1. **Clear before clever.** Plain layouts, plain shapes, high contrast. Nothing decorative that competes with words.
2. **Big enough to read without glasses.** Body text is never below 18 px on phones, and nothing on the page is below 16 px.
3. **One main action per screen.** Call or WhatsApp is always one tap away. Each section ends with one clear next step.
4. **Words with pictures.** Every service and step has an icon or photo **and** a text label. Icons never stand alone.
5. **Two languages, one at a time.** A page is fully in English or fully in Tamil, with the language switch always visible. Never mix both languages in one sentence or paragraph.
6. **Calm and trustworthy.** Real photos of the doctor, the clinic and the region. Soft blue structure, green only for "go". No fear imagery (red pain glows, skeletons).
7. **Same place, every page.** Header, language switch, call buttons and footer never move. Elderly readers learn the layout once.

## 3. Colour

### Strategy: 60 / 30 / 10
| Share | Role | Colours |
|---|---|---|
| **60%** | Reading surfaces: pages, cards, text areas | White `#FFFFFF`, Mist `#F5F8FC`, Blue Tint `#EEF3FB` |
| **30%** | Structure and trust: header, headings, footer, icons, links | Rani Navy `#14234A`, Rani Blue `#3C59A8`, Blue Deep `#2A4590` |
| **10%** | Action and movement: main buttons, active states, "open now" | Action Green `#1B7030` (spine green `#3DB54A` for decoration only) |

Both brand colours come from the logo: the blue "R" and the green spine. **The logo's spine green `#3DB54A` cannot carry text on white (2.7:1)**, so text and buttons use the darker **Action Green**, and the logo green is kept for decoration: lines, dots, icons on navy, the spine motif.

### Tokens
Contrast is against white unless stated. Body text targets **AAA (7:1)**; buttons and large text meet at least AA.

| Token | Hex | Use | Contrast |
|---|---|---|---|
| `navy` | `#14234A` | Headings, header utility bar, footer | 15.3:1 |
| `blue` | `#3C59A8` | Logo blue. Icons, large accents, borders of selected items | 6.6:1 |
| `blue-deep` | `#2A4590` | Links, secondary buttons, eyebrow labels | 8.9:1 |
| `green` | `#1B7030` | Primary buttons (white text), "Open now" | White on it: 6.2:1 |
| `green-hover` | `#155A26` | Primary button hover and pressed | White on it: 8.3:1 |
| `spine` | `#3DB54A` | Logo green. Decoration only, never text on white | 2.7:1 on white (no text), 5.8:1 on navy |
| `ink` | `#14234A` | Headings (same as navy) | 15.3:1 |
| `body` | `#25304A` | Paragraphs | 13.1:1 |
| `muted` | `#46526B` | Secondary text, captions, meta | 7.8:1 |
| `white` | `#FFFFFF` | Main surface | |
| `mist` | `#F5F8FC` | Alternate section bands | |
| `blue-tint` | `#EEF3FB` | Cards on white, highlight panels | Body on it: 11.8:1 |
| `green-tint` | `#E8F6EA` | "Open now" chip, success messages | Green text on it: 5.5:1 |
| `line` | `#D5DDEA` | Card borders, dividers | |
| `line-strong` | `#7D8BA6` | Form field borders (must be 3:1) | 3.4:1 |
| `on-navy` | `#C9D6F2` | Secondary text on navy | 10.5:1 on navy |
| `amber-bg` / `amber-text` | `#FFF4DF` / `#8A4B00` | Notices: camp dates, holiday timings | 6.2:1 |
| `error` | `#B42318` | Form errors (with an icon and text, never colour alone) | 6.6:1 |

### Colour rules
- Never put text on photos without a solid or 70%+ navy overlay behind it.
- Never use colour alone to carry meaning. Always add text or an icon (e.g. "Open now" plus a dot).
- The website has **one light theme** only. This is a deliberate choice: one consistent, high-contrast look for every visitor, matching the printed materials.

## 4. Typography

### Typefaces (both free on Google Fonts, loaded with `next/font`)
| Script | Face | Weights | Why |
|---|---|---|---|
| English | **Atkinson Hyperlegible Next** | 400, 700 (800 for the home headline only) | Designed by the Braille Institute for readers with low vision. Letters that are easily confused (I, l, 1; O, 0; b, d) are clearly different. Wide, open shapes. |
| Tamil | **Noto Sans Tamil** | 400, 500, 700 | Clear, open Tamil letterforms with complete coverage of conjuncts and vowel signs. Even stroke weight, stays clear at small sizes and on low-cost screens. |

**Fallback stacks:** `"Atkinson Hyperlegible Next", "Noto Sans Tamil", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` for English pages, and `"Noto Sans Tamil", "Atkinson Hyperlegible Next", "Latha", "Nirmala UI", sans-serif` for Tamil pages. Numbers and Latin words on Tamil pages (phone numbers, "M.B.B.S.") render in Atkinson through the stack.

### Type scale
Sizes in px. **Mobile** is under 640 px wide, **tablet** 640 to 1023 px, **desktop** 1024 px and up.

| Style | Mobile | Tablet | Desktop | Weight | Line height (EN / TA) | Use |
|---|---|---|---|---|---|---|
| Display | 34 | 44 | 56 | 800 | 1.15 / 1.4 | Home page headline only |
| H1 | 30 | 38 | 46 | 700 | 1.2 / 1.45 | Page title, one per page |
| H2 | 26 | 30 | 36 | 700 | 1.25 / 1.5 | Section titles |
| H3 | 22 | 24 | 28 | 700 | 1.3 / 1.5 | Card and sub-section titles |
| H4 | 20 | 21 | 22 | 700 | 1.35 / 1.55 | Small groups, FAQ questions |
| Lead | 20 | 21 | 22 | 400 | 1.55 / 1.75 | Intro paragraph under H1 or H2 |
| Body | 18 | 18 | 20 | 400 | 1.65 / 1.85 | All running text |
| Small | 16 | 16 | 17 | 400 | 1.5 / 1.7 | Captions, footnotes, meta. **Minimum size anywhere** |
| Label | 16 | 16 | 16 | 700 | 1.3 / 1.5 | Eyebrows above headings, form labels |
| Button | 18 | 18 | 19 | 700 | 1.2 / 1.4 | All buttons |
| Nav | 18 | 18 | 18 | 700 | 1.2 / 1.4 | Menu links |

Each step down the heading scale is clearly smaller **and** separated by space, so H1, H2, H3 and H4 are easy to tell apart even for a reader who can't see weight differences well.

### Tamil-specific rules
- Tamil uses the **same sizes**, with taller line heights (table above). Tamil letters have tall vowel signs above and below, so tight lines make them collide.
- Tamil words are longer. Layouts must let headings wrap to 2 or 3 lines without breaking, and **buttons must allow 2 lines** of Tamil.
- **No all-caps, no letter-spacing and no italics** in Tamil (they don't exist in the script or damage it). The English eyebrow labels in uppercase become normal Tamil text at the same size.
- Never set Tamil in a Latin-only font. Every element that can show Tamil uses the Tamil stack.

### General text rules
- Line length: 45 to 70 characters (max width `68ch` for paragraphs).
- Left-aligned text. Never justify. Centre only short headings and single-line CTAs.
- Paragraphs of 2 to 4 sentences. Use bullet lists for steps and symptoms.
- Headings use `text-wrap: balance`.
- Phone numbers and timings use `font-variant-numeric: tabular-nums`.

## 5. Layout

### Breakpoints
| Name | Width | Columns | Gutter (side padding) | Column gap | Container |
|---|---|---|---|---|---|
| Mobile | 0 to 639 px | 4 | 16 px (20 px at 400 px+) | 16 px | Full width |
| Tablet | 640 to 1023 px | 8 | 32 px | 24 px | Full width |
| Desktop | 1024 px and up | 12 | 40 px | 24 px | Max 1200 px, centred |

These match Tailwind's `sm` (640) and `lg` (1024), and the text column is capped at `68ch`.

### Spacing scale (8-point)
`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96`

| Space | Mobile | Tablet | Desktop |
|---|---|---|---|
| Between sections | 56 | 72 | 96 |
| Heading to its text | 12 | 16 | 16 |
| Between cards | 16 | 24 | 24 |
| Inside cards | 20 | 24 | 32 |
| Between paragraphs | 16 | 16 | 20 |

### Common layouts
| Pattern | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero (text + photo) | Stacked: headline, text, buttons, then photo | Stacked, photo wider | Two columns, 7 + 5 |
| Service tiles | 1 column (2 columns for small icon tiles) | 2 columns | 3 or 4 columns |
| Care journey (4 steps) | Vertical list with a connecting line | 2 × 2 | 4 in a row with arrows |
| Doctor profile | Photo above text | Photo beside text, 3 + 5 | 4 + 8 |
| Text page (service, condition) | 1 column | 1 column, 68ch | 8 columns of text + 4 columns side panel (contact, timings) |
| Footer | Stacked | 2 columns | 4 columns |

### Corners, borders, shadows
- Radius: **buttons 12 px, cards 16 px, chips and pills fully round, images 16 px**.
- Use **borders** (`line`, 1 px) to separate cards. Shadows are soft and rare, only for things that float (sticky header, mobile action bar).
- Clear edges help readers with low vision find where one item ends.

## 6. Components

### Buttons
| Type | Look | Use |
|---|---|---|
| **Primary** | Action Green fill, white text, 12 px radius | The one main action: "Call now", "Book appointment" |
| **Secondary** | White fill, 2 px Blue Deep border, Blue Deep text | WhatsApp, "View services", "Get directions" |
| **Text link** | Blue Deep, underlined, with an arrow | "Read more", inline links |

| Size | Mobile | Tablet | Desktop |
|---|---|---|---|
| Height (minimum) | 56 px | 56 px | 56 px |
| Side padding | 20 px | 24 px | 28 px |
| Font | 18 px bold | 18 px bold | 19 px bold |
| Icon | 24 px, left of text | 24 px | 24 px |
| Width | **Full width** in hero and CTA bands | Auto | Auto |

- Labels say what happens: "Call +91 94445 53070", "WhatsApp us", "Get directions". Not "Submit" or "Click here".
- Show the phone number **in** the call button, so readers know what will happen.
- Focus: a 3 px navy ring with a 2 px white gap around every button and link.
- Tap targets are at least **48 × 48 px**, and 8 px apart.

### Header
- **Desktop:** logo on the left (horizontal logo, 48 px tall), menu in the middle (5 or 6 items, 18 px bold), language switch (`EN | தமிழ்`), and a primary "Call" button on the right. A thin navy bar above shows timings and "Open now" or "Closed now".
- **Tablet and mobile:** logo, language switch and a "Menu" button with the word "Menu" (not just three lines). The menu opens full screen with large 56 px rows.
- The header stays visible when scrolling up, and hides on scroll down on phones to give space to the content.

### Mobile action bar (phones only)
Fixed at the bottom: **Call | WhatsApp | Directions**, each with an icon and a word, 64 px tall, safe-area padding for gesture bars. Always visible on phones.

### Language switch
Two clear text buttons, `EN` and `தமிழ்`, side by side, with the current language filled navy. It sits in the same place on every page and keeps the reader on the same page in the other language.

### Service tile
A line icon (32 px, Rani Blue) in a soft blue circle, a title (H3), one sentence and a "Learn more" link. The whole tile is clickable and has a visible border.

### Care-journey steps
Four numbered steps: **Relieve the pain → Find the root cause → Restore movement → Safely, always**. Each has a number in a circle, an icon, a short title and one sentence. This is the signature visual of the brand and repeats on the home page and service pages.

### Doctor card
Photo (4:5, real photo only), name (H3), qualifications in Blue Deep, role chips, two buttons (Call, WhatsApp).

### Timings and "Open now"
Timings in a simple two-column table. Today's row is highlighted. An "Open now" chip (green tint, green text and a dot) or "Closed now" chip (grey) is shown, driven by the hours in `lib/site.js`.

### FAQ (accordion)
Each question is a full-width button (H4, 20 px+) with a large plus or minus icon. Answers open below in body size. Several answers can be open at once. Works without JavaScript (`<details>`).

### Forms
- Labels always visible **above** fields (never placeholder-only), 16 px bold.
- Fields at least 56 px tall, 18 px text, 2 px `line-strong` border, 12 px radius.
- Fewer fields: name, phone, problem area (a dropdown with pictures where possible), message.
- Errors shown under the field in red with an icon and plain words: "Please enter your 10-digit mobile number."

### Notice banner
Amber background with dark amber text, an icon, and one sentence. Used for camp dates and holiday timings, and it **always has an end date** so it never shows stale information.

### Footer
Navy background. Logo (white version needed), short tagline, address, phone, timings, quick links, language switch, social links (from `site.sameAs` only). Footer headings are H2 styled small, per CLAUDE.md.

## 7. Icons, pictures and photography

### Icons
- **Lucide** line icons (ISC licence), copied into the project as SVG components. **No icon font, no extra library.**
- Stroke 2 px, rounded ends, 24 px in text and buttons, 32 px in tiles, 40 to 48 px in feature blocks.
- Colour: Rani Blue on white; spine green or white on navy.
- **Always paired with a text label.** No icon-only buttons (except the menu close "X", which also has a hidden label).
- Starting set: `phone`, `message-circle` (WhatsApp), `map-pin`, `clock`, `calendar-days`, `bone`, `person-standing`, `accessibility`, `footprints`, `baby`, `hand`, `activity`, `heart-pulse`, `scan-line` (X-ray), `armchair` (posture), `dumbbell` (physiotherapy), `shield-check` (safety), `stethoscope`, `languages`, `chevron-right`.

### Body-area pictograms (to commission)
Simple, friendly outline pictograms for **knee, back and spine, neck, shoulder, hip, hand and wrist, foot and ankle, child's leg**, drawn in the same 2 px line style, with the affected area highlighted in spine green. These help readers who don't know the medical word point to **where it hurts**. Until they are drawn, Lucide icons stand in.

### Photography
- **Real** photos: Dr. N. Manikandan, the clinic outside (so people recognise the building), reception, the X-ray room, physiotherapy sessions, and free camps in nearby villages.
- People from the region, all ages, especially older adults **walking, standing up, moving**. The theme is movement.
- Natural light, warm and calm. Faces shown only with consent; no identifiable patients without written consent.
- **Avoid:** stock skeleton or red "pain glow" images, models in gyms, watermarked images (the current back cover has an Adobe Stock watermark), and anything that looks foreign to Karaikudi.
- Format: WebP or AVIF, at most 1,600 px wide, at most 200 KB (CLAUDE.md P-series).

## 8. Motion
- Almost none. Gentle fades (200 ms) for the menu and accordions only.
- No carousels, no auto-playing sliders, no parallax, no scrolling text, no pop-ups.
- Respect `prefers-reduced-motion` everywhere.

## 9. Accessibility checklist (every page, every breakpoint)
- [ ] Body text 18 px or larger on phones and 20 px on desktop; nothing smaller than 16 px.
- [ ] Body text contrast 7:1 or more; large text and buttons 4.5:1 or more; field borders and icons 3:1 or more.
- [ ] Headings in order (H1 → H2 → H3 → H4), one H1 per page.
- [ ] Every icon has a text label; every image has alt text in the page's language.
- [ ] Tap targets at least 48 × 48 px; focus ring visible on everything.
- [ ] Works at 200% browser zoom with no sideways scrolling.
- [ ] Tamil headings and buttons wrap cleanly, with no clipped or overlapping vowel signs.
- [ ] Call, WhatsApp and Directions reachable in one tap on phones.
- [ ] No information shown by colour alone; no moving content.
- [ ] Checked at 375 px, 768 px and 1280 px wide, in English and Tamil.

## 10. Do and don't

| Do | Don't |
|---|---|
| Large text, short sentences, one idea per paragraph | Small grey text, long paragraphs |
| One green main button per section | Several competing buttons in different colours |
| Icon plus word | Icon on its own |
| Whole page in one language, switch always visible | Tamil and English mixed in the same sentence |
| Real photos of the doctor and clinic | Stock skeletons, red pain glows, models |
| Borders that show where a card ends | Faint shadows as the only edge |
| Phone number written out in full | "Contact us" with no number |
| Calm words: "We aim to help you walk again" | "Best", "guaranteed", "100%", "permanent cure" |

## 11. Implementation notes (for the build step)
- Tokens go into `app/globals.css` as CSS variables and are mapped in `tailwind.config.js`; type sizes become per-breakpoint classes (`text-body`, `sm:`, `lg:`). This hasn't been done yet; it happens when the first page section is built.
- Fonts via `next/font/google`: `Atkinson_Hyperlegible_Next` and `Noto_Sans_Tamil`, with `display: "swap"`, exposed as CSS variables, and the stack switched by `lang`.
- `<html lang="en">` on English pages and `lang="ta"` on Tamil pages, so the right font stack and line heights apply.
- The prototype's own colours (`prototype/index.html`) were temporary and are replaced by this system when the prototype is next updated.

## 12. Open items
- A white version of the logo for the navy footer and header bar.
- Body-area pictograms (section 7) to be drawn.
- Real photography (to be discussed).
- Approval of this system by Dr. N. Manikandan.
