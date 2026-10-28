# Design References: what we learned from 7 sites

Internal research notes for the Rani Ortho Care website, written 2026-10-28. These notes record ideas to draw from. They are not a design. The design system and templates will come later and will be recorded in `DESIGN.md`. Every idea here still has to follow `CLAUDE.md`: no superlatives, no invented numbers, no testimonials without approval, and the location named at most once in each page's body text.

Pages studied, about 25 in total:
- **Welbeck (London):** orthopaedic centre page, a consultant profile, a condition page, a treatment page, the About page.
- **ARV Hospital (Chandigarh):** homepage, surgeon profile, knee replacement page, physiotherapy page, contact, blog, gallery.
- **Ortho Westmount (Montreal):** homepage, surgeon profile, knee service page, intake form.
- **Canadian Private Surgical Clinic:** homepage, surgeon profile.
- **NEBH (Boston):** homepage, joint care service page, find-a-doctor, community benefits.
- **Weill Cornell:** homepage.
- **Sunnybrook:** find-a-doctor page.

---

## 1. One line per site: what to take from it

| Site | Type | Take this | Avoid this |
|---|---|---|---|
| **ARV Hospital** | Single-surgeon orthopaedic hospital in a mid-sized Indian city | **Closest match to us.** The surgeon is the brand. WhatsApp is the main way to book, with the phone second. City names in page names and URLs. Stat strip. A physiotherapy-first page that is honest about when surgery is needed. A floating WhatsApp button. | Bold claims like "the surgeon who is certain" or "first in the city". Big numbers we can't prove. Duplicate blog posts and keyword-stuffed blog titles ("Best ... in Chandigarh"). |
| **Welbeck** | Premium private specialist centre | **The model for page layouts.** A condition page with question headings, a treatment page with an "At a glance" box and a recovery timeline, a consultant profile with tabs, conditions shown as tag "chips", and FAQs on every page. A calm, premium look: a serif headline font, a warm off-white background and deep navy. | Words like "world-class" and "pioneering". Prices and insurer logos, unless the clinic confirms them. |
| **Ortho Westmount** | Private orthopaedic clinic, 2 offices | Services grouped **by body part** (Knee, Hip, Shoulder, Spine) with simple line icons. A surgeon profile with jump links (Summary, Highlights, Specialises, Book). A step-by-step booking form. A "Request a call back" option. | "Most trusted" claims. Typos, broken `#` links and duplicate doctor cards. These are lessons in what to check before launch. |
| **Canadian Private Surgical Clinic** | Surgeon-led sports and joint clinic | One featured surgeon with a **career timeline**. A consultation form that asks "how did you hear about us" and allows a scan upload. Conditions listed under body-part headings. | A holiday notice left up after the dates passed. Conditions that link to the form instead of their own page. |
| **NEBH** | Orthopaedic hospital | An **"I'd like to..." task grid** (Book, Call, Directions, Find a doctor). A row of quick-action icons under the hero. Each service area page links to its sub-services. A community benefits page with named principles. A clear notice banner. | Too many CTAs competing for attention. Community impact shown only as PDFs. |
| **Weill Cornell** | Large academic health system | **Search as the hero** ("Find a Doctor, search by specialty or condition"). Four quick-action tiles. Big stat numbers. A curved section divider. | Institutional scale and features we don't need, such as patient portals and bill pay. |
| **Sunnybrook** | Large hospital | Find-a-doctor filters (keyword, department, specialty). A soft gradient title band. | Useful only if the clinic grows to several doctors. Its results didn't load in our check, so the doctor cards were not seen. |

---

## 2. Visual style observed

| Site | Fonts | Colours | Feel |
|---|---|---|---|
| ARV | Inter (all text) | White, near-black text `#1D1D1F`, red buttons `#C8102E` | Apple-like, clean, photo-led, large bold numbers |
| Welbeck | Newsreader (serif headings), Avenir (body) | Cream background `#FEFBF6`, deep navy `#0A1438` | Premium, editorial, calm |
| Ortho Westmount | Instrument Sans | Dark navy `#09132F`, teal-green accent, pill buttons | Modern, techy, dark hero over a photo |
| Canadian Private Surgical | Plus Jakarta Sans | Deep indigo/purple `#6238DC`, rounded pill buttons | Modern start-up feel, Google rating badge |
| NEBH | Roboto | Plum `#7A1052`, grey text | Institutional, image-led |
| Weill Cornell | Custom sans (1898 Sans), Open Sans | Red `#B31B1B`, white | Institutional, search-first |
| Sunnybrook | Sans | Royal blue, soft gradients, green logo | Friendly institutional |

**Common patterns:**
- One trust colour, usually navy or deep blue, plus one action colour for buttons.
- Lots of white space.
- Real photos of doctors and the clinic, never stock photos of models.
- Rounded cards.
- Large headings at 40 to 48 px.
- A sticky header with a single strong "Book" button.

---

## 3. Patterns worth using for Rani Ortho Care

### Header and global elements
- **Logo, then a short menu, then the phone number and one main button**, for example "Book Appointment". A WhatsApp link fits a Karaikudi audience, as ARV shows.
- **A floating WhatsApp button and a phone action bar on mobile.** Our starter already has `MobileActionBar`.
- **An optional notice banner** for camp dates or holiday closures. It must be easy to switch off and must have an end date, so it never shows stale dates as Canadian Private Surgical's does.
- Breadcrumbs on inner pages. These are already in the starter.

### Homepage order: a combination of ARV, Welbeck and NEBH
1. **Hero:** the main keyword in the heading, one calm supporting line, and two CTAs (Book / Call or WhatsApp). Use a real photo of Dr. Manikandan or the clinic.
2. **Quick-action row:** Book, Call, WhatsApp, Directions, Free Camps (from NEBH and Weill Cornell).
3. **Trust strip:** only facts the clinic confirms, such as qualifications, services offered, physiotherapy on site and years in practice if stated. No invented numbers.
4. **Meet the doctor:** portrait, name, qualifications shown as tags, a short bio and "Read full profile" (from ARV).
5. **What we treat, by body part:** Knee, Hip, Shoulder, Spine/Back, Fractures and Trauma, Sports Injuries, Physiotherapy. Each gets an icon card with "Learn more" (from Ortho Westmount and Welbeck).
6. **Physiotherapy:** its own section. It is both a service and a draw: "Not every joint problem needs surgery" (from ARV's physiotherapy page, which is honest and not pushy).
7. **Free medical camps and community care.** This is our **unique story**, and none of the 7 sites has anything like it. Show upcoming camps, past camps with photos, and how support for surgery or physiotherapy works. Stick to facts the doctor confirms.
8. **FAQs:** an accordion with answer-first replies. Already in the starter.
9. **Visit us:** a map link, address, hours and an "Areas we serve" teaser.
10. **Final CTA band**, for example "Living with joint pain? Talk to us." with WhatsApp and Call buttons.

### Service and condition pages (Welbeck's layout, with ARV's local tone)
- **Top of page:** breadcrumb, H1 (the service plus the location once), a one-line answer-first intro, and CTAs.
- **"At a glance" box:** who it is for, whether it is a day procedure, and what physiotherapy follows. Facts only.
- **Body:** question-style H2s: "What is it?", "Who needs it?", "What happens during treatment?", "Recovery timeline" (a milestone list: Day 1, Week 2, Week 6...), and "When to see a doctor".
- **Physiotherapy first:** say plainly when non-surgical care is tried first.
- **Review details:** "Reviewed by Dr. Manikandan" and "Last updated". Already in the starter, and something Welbeck lacks.
- **Bottom of page:** FAQs, a booking block and related services.

### Doctor profile page (Welbeck's tabs, with ARV and Canadian Private Surgical content)
- **Hero:** photo, name, role, qualifications as tags, and the conditions he treats as chips.
- **Jump links:** About, Qualifications, Treatments, Camps and Community, Book.
- **About:** a bio, plus a **career timeline** (education, training, the clinic's founding) from Canadian Private Surgical, using only facts he provides.
- Memberships and languages spoken. Tamil and English are likely, but need confirming.
- A booking block and FAQs.
- This page is where Person structured data matters most. The starter's `data/team.js` already supports it.

### Contact and booking
- **Contact page:** the main contact options as cards (Phone, WhatsApp with a usual reply time, Address with "Open in Maps"), plus morning and evening hours and an emergency note if one applies. Add an embedded map, which ARV doesn't have.
- **Enquiry form:** short. Name, phone, preferred time, the problem area as a dropdown (Knee/Hip/...), "How did you hear about us", and a message. The starter's Netlify form already sends a message only on real delivery.
- **Optional later:** "Request a call back" from Ortho Westmount.

### Content and SEO ideas
- **Service URLs and names include the area**, as ARV does with "chandigarh", but stay within our rule of naming the location once in the body text.
- **A blog of patient guides**, with a category tag, date, title, excerpt and "Read article". Topics are recovery guides and when to see a doctor. **No "Best ... in Karaikudi" titles.**
- **A gallery:** clinic, team, camps and events. Patient photos only with consent.
- **Areas We Serve:** a page for Karaikudi and nearby towns such as Devakottai, Pudukkottai and Sivaganga. The list needs the doctor's confirmation.

---

## 4. Lessons: mistakes seen on these sites that we must avoid
1. Placeholder `#` links and CTAs leading nowhere (Ortho Westmount, Canadian Private Surgical).
2. Typos in menus ("Arthoplasty", "robotic sugery"), and alt text naming the wrong doctor.
3. Notices left up after their dates have passed.
4. Duplicate cards and duplicate blog posts.
5. Different addresses or phone numbers in different places. Our `lib/site.js` single source prevents this.
6. Several phone numbers with no clear main one. We should pick one for calls and one for WhatsApp.
7. Superlatives such as "most trusted", "best" and "world-class". These are not allowed in our copy.

## 5. Questions for later (design and content)
- Brand colours and logo: is there an existing logo? Our default idea is a calm navy or teal for trust, with a warm action colour.
- Photos: Dr. Manikandan's portrait, the clinic interior and exterior, the physiotherapy area, and camp photos.
- Camp details: how often camps run, where, an example schedule, and how support for surgery or physiotherapy works.
- Languages: should the site have a Tamil version or Tamil phrases? Ortho Westmount's EN/FR toggle is a model.
- Final list of services and the doctor's qualifications, exactly as he states them.
