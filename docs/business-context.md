# Business Context: Rani Ortho Care

Internal notes, started 2026-10-28, last updated 2026-11-10 (doctor's answers, section 1a). Sources:
- **Assets zip:** logos, visiting cards, prescription pad, print covers, map QR. The files in scope are in `brand-assets/`.
- **Google Business Profile**, from screenshots the user shared. This is the **source of truth for opening hours**.
- **The Instagram profile.**
- **raniorthocare.com.** Owned by the clinic.
- **Dr. N. Manikandan's own answers** to our questionnaire (sent 2 November 2026, answers recorded 10 November 2026), in English and Tamil. See section 1a.

Nothing here goes into `lib/site.js` until it is confirmed.

---

## 1. Core facts

| Item | Value | Source | Status |
|---|---|---|---|
| Business name | **Rani Ortho Care** (Tamil: ராணி ஆர்த்தோ கேர்) | Logo, cards, Google, Instagram | Consistent |
| Tagline | **Your Mobility, Our Mission** (Tamil: உங்கள் இயக்கம், எங்கள் நோக்கம்) | Logo, visiting card | Consistent |
| Doctor | **Dr. N. Manikandan** (Tamil: Dr. நா. மணிகண்டன்) | Cards, prescription, covers | Consistent. **He runs the clinic and is our client:** the main person on the site, and the approver for all content and medical wording |
| Qualifications | **M.B.B.S., M.S. (Ortho)**. MBBS from Tirunelveli Medical College (Government); MS (Ortho) from Government Rajaji Medical College, Madurai | Cards, covers; colleges from the doctor, 2026-11-10 | Confirmed |
| Role | Visiting card: **Government Doctor, Consultant Orthopaedic Surgeon** (Tamil: அரசு மருத்துவர், எலும்புமுறிவு மற்றும் முடநீக்கியல் அறுவைசிகிச்சை நிபுணர்). Government post, from the doctor: **Assistant Surgeon, Government Hospital** (Tamil: அரசு மருத்துவமனையில் உதவி அறுவை சிகிச்சை நிபுணர்) | Visiting card; doctor, 2026-11-10 | Confirmed. Which government hospital is not stated: ask before naming it |
| Experience | **10 years** (Tamil: 10 ஆண்டுகள் அனுபவம்) | Doctor, 2026-11-10 | Confirmed. State exactly "10 years"; never add or round |
| Home town and schooling | Born in **Karaikudi**; schooling at **SMSV Higher Secondary School, Karaikudi** | Doctor, 2026-11-10 | Confirmed. A strong local trust point ("a Karaikudi doctor") |
| Photo | A profile (DP-style) photo will be shared | Doctor, 2026-11-10 | **Awaited** |
| Mobile / WhatsApp | **+91 94445 53070** | Cards, prescription, covers, Google | **Confirmed for both calls and WhatsApp.** Google shows it as 094445 53070; the website shows +91 94445 53070, and the WhatsApp link uses 919444553070 |
| Landline | **04565 233070** | Cards, prescription, covers | Consistent |
| Address | **No. 2, M.M. Complex, 1st Beat, Koviloor Road, near Indian Bank, Karaikudi, Tamil Nadu 630001** | Google, cards, prescription | Consistent. Combined from these sources, so confirm the exact form |
| Opening hours | **Mon–Sat 9 AM–10 PM; Sun 10 AM–12 PM** | Google Business Profile | **Use these.** The website must match Google exactly. The printed hours (evenings plus Sunday 4–10 PM) are out of date and not used |
| Domain | **raniorthocare.com** | User | **Owned by the clinic.** It currently shows a GoDaddy parking page, which goes away once the domain is pointed at Netlify |
| Google Business Profile | "Orthopedic clinic in Karaikudi, Tamil Nadu". 4.9 from 59 reviews. Website button present | Google | Needs a link to the place listing (for `mapUrl` and `sameAs`) and owner access. The rating is a third-party figure and must not be added to our own structured data (CLAUDE.md rule 8). **Approved for display on the site (2026-10-29)** as its own section with the date and a link to Google, without copying review text: see `docs/storybrand.md` |
| Languages of care | Dr. Manikandan explains to patients in **Tamil and English** | User, 2026-10-29 | Confirmed |
| Corporate posture sessions | Offered **now** to companies and worksites, and to individuals | User, 2026-10-29 | Confirmed. Names of companies already coached: still to ask |
| Instagram | **@rani_ortho_care** (https://www.instagram.com/rani_ortho_care/). Bio: "Rani Ortho Care 🦴 \| Karaikudi · Orthopedic doctor \| Bone & joint pain · Knee \| Back \| Sports injury · PRP \| Physio \| X-ray · 📍 Karaikudi \| 📞 9444553070" | Instagram | Real link, so it goes in `sameAs`. Posts are mainly festival greetings with contact details |

### Open questions

1. **An Instagram search result mentions "Dr Kalaivanan, 9791611108, 2:30–4:30 pm Friday".** Is there a second doctor or a visiting consultant? If yes, they belong on the Team page.
2. **A search result shows an address in "Christianpet, Main Road, Tadepalli" (Andhra Pradesh).** This is almost certainly a **different clinic** with a similar name, not ours, so we won't use it.

---

## 1a. Doctor's answers (questionnaire of 2 November 2026)

Recorded on 2026-11-10 from Dr. N. Manikandan's reply, kept in English and Tamil as received. These replace earlier guesses wherever they differ.

### Profile

| Item | English | Tamil |
|---|---|---|
| MBBS | Tirunelveli Medical College (Government) | திருநெல்வேலி அரசு மருத்துவக் கல்லூரி |
| MS (Ortho) | Government Rajaji Medical College, Madurai | அரசு ராஜாஜி மருத்துவக் கல்லூரி, மதுரை |
| Current government post | Assistant Surgeon, Government Hospital | அரசு மருத்துவமனையில் உதவி அறுவை சிகிச்சை நிபுணர் (Assistant Surgeon) |
| Place of birth | Karaikudi | காரைக்குடி |
| Schooling | SMSV Higher Secondary School, Karaikudi | SMSV மேல்நிலைப் பள்ளி, காரைக்குடி |
| Experience | 10 years | 10 ஆண்டுகள் |
| Photo | A profile (DP-style) picture will be shared | சுயவிவரப் படம் (DP போன்றது) அனுப்பப்படும் |

### Area served

| English | Tamil |
|---|---|
| 10 to 20 locations around Karaikudi, near the clinic | கிளினிக்கைச் சுற்றியுள்ள காரைக்குடி பகுதியில் 10–20 இடங்கள் |
| Patients also come from Thondi, Kovilpatti [?], Namakkal [?], Devipattinam [?], Ponnamaravathi / Thirumayam [?] | தொண்டி, கோவில்பட்டி [?], நாமக்கல் [?], தேவிபட்டினம் [?], பொன்னமராவதி / திருமயம் [?] ஆகிய ஊர்களிலிருந்தும் நோயாளிகள் வருகின்றனர் |
| Overall coverage: about 70 to 80 km radius | மொத்தம் சுமார் 70–80 கி.மீ. சுற்றளவு |

**Notes:**
- The **[?]** marks are from the reply itself: those place names were unclear and need confirming.
- **Kovilpatti** (Thoothukudi district) and **Namakkal** are far more than 80 km from Karaikudi, so they may have been heard wrongly. Confirm them before any use.
- **Thondi and Devipattinam** are in Ramanathapuram district. **Ponnamaravathi and Thirumayam** are in Pudukkottai district. Check each distance on a map before publishing.
- The **list of 10 to 20 nearby locations with district names has not been given yet.** Still to collect.

### Camps and special services

| English | Tamil |
|---|---|
| Free Bone Mineral Density (BMD) screening camp, once every 3 months | 3 மாதங்களுக்கு ஒருமுறை இலவச எலும்பு அடர்த்தி (BMD) பரிசோதனை முகாம் |
| Several mini camps every month | ஒவ்வொரு மாதமும் பல சிறிய மருத்துவ முகாம்கள் |
| Bone Marrow Aspiration Cytology | எலும்பு மஜ்ஜை உறிஞ்சு செல் பரிசோதனை (Bone Marrow Aspiration Cytology) |
| Bone Marrow Aspirate Concentrate (BMAC) | எலும்பு மஜ்ஜை செறிவு சிகிச்சை (BMAC) |

**Notes:**
- **BMAC naming (question 5.1):** the reply lists **both** names as **separate services**: aspiration cytology (a test) and BMAC (a treatment). The website uses "Bone Marrow Aspirate Concentrate (BMAC)" for the treatment. That is the standard medical name; the reply wrote "Aspiration Concentrate".
- **Camp places, dates and photos have not been given yet.** Still to collect.

### Emergency care, surgery and physiotherapy

| Topic | English | Tamil |
|---|---|---|
| Emergency care (question 5.2) | Available 24/7 | அவசர சிகிச்சை 24 மணி நேரமும், வாரத்தின் 7 நாட்களும் கிடைக்கும் |
| Minor surgery (question 5.3) | Done at the clinic, in its own Mini OT (minor operation theatre) | கிளினிக்கில் உள்ள சொந்த Mini OT-யில் செய்யப்படும் |
| Major surgery (question 5.3) | Done at tie-up hospitals | இணைந்த (tie-up) மருத்துவமனைகளில் செய்யப்படும் |
| Physiotherapy (question 5.4) | Not offered at the clinic itself. It is provided at a separate, dedicated centre: Rani Rehab and Wellness | கிளினிக்கில் இந்த வசதி இல்லை. இதற்கென தனியாக Rani Rehab and Wellness என்ற பிரத்யேக மையம் உள்ளது |

**What this means for the website:**
- **Emergency care is 24/7, but the clinic hours stay as on Google.** The site must show both clearly. Still to confirm before writing this copy:
  - Is the mobile number answered at night?
  - Where are night emergencies seen: at the clinic or at a tie-up hospital?
- **Physiotherapy is not at the clinic.** The site must not say "physiotherapy at the clinic" or call it a "physiotherapy clinic".
  - Rani Rehab and Wellness was earlier kept out of this project's scope, so its assets and details are still not used.
  - **Decision needed:** can the site say physiotherapy is provided at a separate dedicated centre, and may it name and link that centre?
- **Surgery wording:** minor procedures happen in the clinic's own Mini OT. Major operations (joint replacement, spine surgery) happen at tie-up hospitals.
  - Name the hospitals only when the doctor confirms which ones and that they may be named.

---

## Service area and audience (2026-10-29, updated 2026-11-10)

- **Brand area:** about **15 to 20 km around the clinic** in Karaikudi. This is the core area for local SEO, the Areas We Serve page and brand building.
- **Patient catchment (from the doctor, 2026-11-10):** about **70 to 80 km**. Patients also come from places such as Thondi, Devipattinam, Ponnamaravathi and Thirumayam (some names still to confirm, see section 1a). The Areas We Serve page can mention the wider area once the place list is confirmed.
- **Nearby places to confirm with a map before use:** Devakottai, Kottaiyur, Kandanur, Puduvayal, Pallathur, Kanadukathan, Ariyakudi, Sakkottai. These are candidates only; check each distance first.
- **Audience:** people with bone, joint and spine problems. Mainly older patients who find walking hard or uncomfortable, people needing physiotherapy (given at a separate centre, see section 1a), people needing orthopaedic surgery, and their families. Many are biliterate (Tamil and English); some read one language better. The design system (`DESIGN.md`) is built for them.

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
| 11 | Physiotherapy for Pain Relief & Recovery | Physiotherapy. **Given at a separate dedicated centre, not at the clinic** (doctor, 2026-11-10) |
| 12 | Plaster, Dressing & Minor Ortho Procedures | Minor procedures, in the clinic's own Mini OT (doctor, 2026-11-10) |
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
- **Free camps:** a free Bone Mineral Density (BMD) screening camp once every 3 months, and several mini camps every month (doctor, 2026-11-10). Photos, dates and places are still needed.

## 5. Still to collect

- [ ] Dr. Kalaivanan, and any other team members
- [ ] Free camp details: places, dates and photos (the camp pattern is now known, see section 1a)
- [ ] Doctor's profile photo (he will share a DP-style picture)
- [ ] Clinic and team photos: to be discussed later
- [ ] List of 10 to 20 nearby locations, with district names
- [ ] Confirm the unclear place names: Kovilpatti, Namakkal, Devipattinam, Ponnamaravathi / Thirumayam
- [ ] Which government hospital he serves at (only if he wants it named)
- [ ] Names of the tie-up hospitals for major surgery, and whether they may be named
- [ ] How 24/7 emergency care works: night phone line, and where patients are seen
- [ ] Whether the site may mention, name and link the physiotherapy centre
- [ ] Google Business Profile place link and map pin coordinates (or decode the map QR)
- [ ] Other social links (Facebook, YouTube?) and Google Business Profile access
- [ ] Year the clinic started, only if he wants it stated
- [x] Doctor's experience: 10 years (2026-11-10)
