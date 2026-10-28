# Business Context: Rani Ortho Care

Internal notes, 2026-10-28. Sources:
- **Assets zip:** logos, visiting cards, prescription pad, print covers, map QR. The files in scope are in `brand-assets/`.
- **Google Business Profile**, from screenshots the user shared. This is the **source of truth for opening hours**.
- **The Instagram profile.**
- **raniorthocare.com.** Owned by the clinic.

Nothing here goes into `lib/site.js` until it is confirmed.

---

## 1. Core facts

| Item | Value | Source | Status |
|---|---|---|---|
| Business name | **Rani Ortho Care** (Tamil: ராணி ஆர்த்தோ கேர்) | Logo, cards, Google, Instagram | Consistent |
| Tagline | **Your Mobility, Our Mission** (Tamil: உங்கள் இயக்கம், எங்கள் நோக்கம்) | Logo, visiting card | Consistent |
| Doctor | **Dr. N. Manikandan** (Tamil: Dr. நா. மணிகண்டன்) | Cards, prescription, covers | Consistent |
| Qualifications | **M.B.B.S., M.S. (Ortho)** | Cards, covers | Consistent |
| Role | **Government Doctor, Consultant Orthopaedic Surgeon** (Tamil: அரசு மருத்துவர், எலும்புமுறிவு மற்றும் முடநீக்கியல் அறுவைசிகிச்சை நிபுணர்) | Visiting card | Confirm the wording for the website |
| Mobile / WhatsApp | **+91 94445 53070** | Cards, prescription, covers, Google | Consistent. Confirm it is also the WhatsApp number |
| Landline | **04565 233070** | Cards, prescription, covers | Consistent |
| Address | **No. 2, M.M. Complex, 1st Beat, Koviloor Road, near Indian Bank, Karaikudi, Tamil Nadu 630001** | Google, cards, prescription | Consistent. Combined from these sources, so confirm the exact form |
| Opening hours | **Mon–Sat 9 AM–10 PM; Sun 10 AM–12 PM** | Google Business Profile | **Use these.** The website must match Google exactly. The printed hours (evenings plus Sunday 4–10 PM) are out of date and not used |
| Domain | **raniorthocare.com** | User | **Owned by the clinic.** It currently shows a GoDaddy parking page, which goes away once the domain is pointed at Netlify |
| Google Business Profile | "Orthopedic clinic in Karaikudi, Tamil Nadu". 4.9 from 59 reviews. Website button present | Google | Needs a link to the place listing (for `mapUrl` and `sameAs`) and owner access. The rating is a third-party figure and must not be added to our own structured data (CLAUDE.md rule 8) |
| Instagram | **@rani_ortho_care** (https://www.instagram.com/rani_ortho_care/). Bio: "Rani Ortho Care 🦴 \| Karaikudi · Orthopedic doctor \| Bone & joint pain · Knee \| Back \| Sports injury · PRP \| Physio \| X-ray · 📍 Karaikudi \| 📞 9444553070" | Instagram | Real link, so it goes in `sameAs`. Posts are mainly festival greetings with contact details |

### Open questions

1. **An Instagram search result mentions "Dr Kalaivanan, 9791611108, 2:30–4:30 pm Friday".** Is there a second doctor or a visiting consultant? If yes, they belong on the Team page.
2. **A search result shows an address in "Christianpet, Main Road, Tadepalli" (Andhra Pradesh).** This is almost certainly a **different clinic** with a similar name, not ours, so we won't use it.

---

## 2. Services (from the printed "Available Services" sheet)

The clinic's own heading for this list is "Trusted Care for Bones, Joints & Spine Problems". The Tamil equivalent is எலும்பு, மூட்டு மற்றும் முதுகுத் தண்டு பிரச்சனைகளுக்கு நம்பகமான பராமரிப்பு.

| # | Service (English, as printed) | Likely website grouping |
|---|---|---|
| 1 | Treatment for Broken Bones (Fractures) | Fracture care |
| 2 | Knee, Shoulder & Joint Pain Relief | Joint pain |
| 3 | Back Pain & Neck Pain Treatment | Spine |
| 4 | Spine Surgery for Disc Problems & Nerve Compression | Spine |
| 5 | Arthritis Care (Joint Swelling & Pain) | Joint pain |
| 6 | Ligament & Meniscus Injury Treatment | Sports injuries |
| 7 | Sprains, Sports Injuries & Muscle Tears | Sports injuries |
| 8 | Joint Replacement Surgery (Knee, Hip) | Joint replacement |
| 9 | Clubfoot Treatment for Children | Children's orthopaedics |
| 10 | Digital X-ray Facility | Diagnostics |
| 11 | Physiotherapy for Pain Relief & Recovery | Physiotherapy |
| 12 | Plaster, Dressing & Minor Ortho Procedures | Minor procedures |
| 13 | Specialist Consultation | Consultation |

The business model (`docs/business-model.md`) adds more services: pain management, preventive orthopaedics and corporate coaching, regenerative therapies (PRP, GFC, BMAC, cartilage regeneration), non-surgical management, stroke and cerebral palsy rehabilitation, and trauma care. **PRP is confirmed as a service.**

The grouping column is only a suggestion for the services pages. The final page list comes from the keyword research.

---

## 3. Brand assets received

| Asset | Contents | Use on the website |
|---|---|---|
| **Logo (Tamil and English)** | An "R" letter with a green spine running through it. Comes as stacked (V1) and horizontal (V2) versions, each in English (-1 files) and Tamil. SVG, PNG and JPEG | Main logo. Horizontal for the header, stacked for the footer and sharing image. The "R" mark alone becomes the favicon |
| **Visiting cards** (English and Tamil) | Blue panel with spine artwork, doctor details, QR code, phones, address | Shows the brand's print style |
| **Prescription pad** | Blue and green top bar. Sections for Vitals, X-ray, Physio and General Advice. Hours (out of date). Knee-joint watermark | Print style reference |
| **Covers** (front ×2, back) | Blue and green wave, a light-blue shield shape, a highlighted spine or knee, doctor details, the services list, three photos | Mood reference. ⚠ The X-ray photo on the back cover has an **Adobe Stock watermark**, and the other photos look like stock or AI images. Licensed or real photos are needed for the web |
| **Map Link QR** | QR code to the map location | Can be decoded later to get the Google Maps link for `mapUrl` |

### Colours taken from the logo SVGs

| Colour | Hex | Where |
|---|---|---|
| Brand blue | `#3C59A8` | The "R" and the wordmark |
| Spine green | `#3DB54A` | The spine in the R |

**Print styles also use:**
- a light sky-blue gradient (`~#7FD0F0` to white) for backgrounds and the shield
- a deep navy (`~#1B2A55`) for footer bars
- a lime green bar on the prescription pad

### Type
- **English wordmark:** a heavy grotesque, Helvetica or Arial Bold style.
- **Tamil wordmark:** a heavy display Tamil font.
- **Print body text:** a geometric sans similar to Inter or Poppins.

The website will need a Tamil-capable font. Noto Sans Tamil or Mukta Malar both work with `next/font`.

---

## 4. What this means for the website (first thoughts, not decisions)

- **Brand palette:** brand blue `#3C59A8` as the trust colour and spine green `#3DB54A` as the accent. On white, `#3C59A8` has a 6.6:1 contrast ratio, so it is fine for text and buttons. Green `#3DB54A` on white is only 2.7:1, so it can't be used for text; it is for icons, bars and decoration only. Contrast must be checked again when `DESIGN.md` is written.
- **Bilingual:** the clinic already works in Tamil and English across all its print. The website should at least use Tamil for key labels and the tagline. A full Tamil version (`/ta/`) is a later decision.
- **Main contact:** the mobile (+91 94445 53070) for Call and WhatsApp, with the landline as the second number.
- **Hours:** Mon–Sat 9 AM–10 PM and Sun 10 AM–12 PM, taken from Google and kept the same everywhere.
- **Free camps:** no camp materials are in the assets yet. Photos, dates and places are still needed.

## 5. Still to collect

- [ ] Is the mobile also the WhatsApp number?
- [ ] Dr. Kalaivanan, and any other team members
- [ ] Free camp details (photos: later)
- [ ] Photos: to be discussed later
- [ ] Google Business Profile place link and map pin coordinates (or decode the map QR)
- [ ] Other social links (Facebook, YouTube?) and Google Business Profile access
- [ ] Year the clinic started, and the doctor's experience, only if he wants them stated
