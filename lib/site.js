// Single source of business facts. Every page, the footer, structured data, llms.txt and the
// manifest read from here. Replace every "REPLACE:" value before going live
// (`npm run check:seo -- <url> --strict` fails while any placeholder is visible).
// Never invent facts: if the business has not confirmed something, leave it empty.

// Official website address. Set NEXT_PUBLIC_SITE_URL in .env.local and in the hosting settings.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/+$/, "");

// Absolute URL for a page path, in the trailing-slash form the site serves (see next.config.js).
export function absoluteUrl(path = "/") {
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${SITE_URL}/${trimmed}/` : `${SITE_URL}/`;
}

// Date the site content was last updated: the sitemap's lastModified. Update it whenever page
// content changes (or set `updatedAt` on a single service in data/services.js).
export const CONTENT_UPDATED = "2026-01-01";

export const site = {
  name: "REPLACE: Business Name", // exact legal/brand spelling, used everywhere (one name only)
  shortName: "REPLACE: Short Name", // phone home-screen label, max ~12 characters
  tagline: "REPLACE: Short tagline shown under the main heading",
  description:
    "REPLACE: One or two plain sentences on what the business does, for whom and where. Used by structured data and llms.txt.",

  // schema.org type for the business. Examples: "LocalBusiness", "Dentist", "MedicalClinic",
  // "LegalService", "AccountingService", "Restaurant", "ProfessionalService", "Organization".
  schemaType: "LocalBusiness",
  // schema.org type for each service page: "Service" for most businesses, "MedicalProcedure" for clinics.
  serviceSchemaType: "Service",
  // Shown on service pages as "Reviewed by". Leave empty to hide.
  reviewer: { name: "", credentials: "" },

  locale: "en_IN", // Open Graph locale
  language: "en", // <html lang>

  phone: "REPLACE: +91 00000 00000", // as displayed
  whatsapp: "", // digits with country code, e.g. "919000000000"; empty hides WhatsApp buttons
  whatsappMessage: "Hello, I would like to make an enquiry.",
  email: "",

  address: {
    streetAddress: "REPLACE: Street address",
    addressLocality: "REPLACE: Area / locality",
    addressRegion: "REPLACE: State",
    postalCode: "REPLACE: PIN",
    addressCountry: "IN",
  },
  geo: null, // { latitude: 12.34, longitude: 56.78 } from the Google Business Profile pin
  mapUrl: "", // Google Maps link to the business listing (place link, not a search)

  // Regular opening hours (structured data + footer). Days use full English names.
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hoursNote: "", // display-only note, e.g. "Sunday: by appointment only" (not put in structured data)

  areasServed: [], // nearby areas for the Areas We Serve page, e.g. ["Area One", "Area Two"]
  sameAs: [], // real profile URLs only (Google Business Profile, Instagram, Facebook, LinkedIn)

  logo: { url: "/icon.png", width: 512, height: 512 }, // replace app/icon.png with the real logo
  ogImage: { url: "/og-default.png", width: 1200, height: 630, alt: "REPLACE: Business Name" },
  themeColor: "#1d4ed8",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Team", href: "/team/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
  : "";
export const addressText = [
  site.address.streetAddress,
  site.address.addressLocality,
  `${site.address.addressRegion} ${site.address.postalCode}`.trim(),
]
  .filter(Boolean)
  .join(", ");

const DAY_SHORT = { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" };

function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")} ${suffix}` : `${hour} ${suffix}`;
}

// Opening hours as display lines, e.g. "Mon–Sat: 9 AM – 6 PM".
export function hoursLines() {
  const lines = site.openingHours.map(({ days, opens, closes }) => {
    const label = days.length > 2 ? `${DAY_SHORT[days[0]]}–${DAY_SHORT[days[days.length - 1]]}` : days.map((d) => DAY_SHORT[d]).join(", ");
    return `${label}: ${formatTime(opens)} – ${formatTime(closes)}`;
  });
  return site.hoursNote ? [...lines, site.hoursNote] : lines;
}
