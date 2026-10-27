import { SITE_URL, absoluteUrl, site } from "./site";

// Structured data (JSON-LD) for Google and AI assistants. Rules:
// - Only facts that are visible on the site or confirmed by the business. No fake ratings or reviews.
// - The business has one @id; other blocks point to it with businessRef.
// - Validate with Google's Rich Results Test and the Schema Markup Validator after every change.

const BUSINESS_ID = `${SITE_URL}/#business`;

const postalAddress = { "@type": "PostalAddress", ...site.address };

// Short business reference used inside other structured data (people, services).
export const businessRef = {
  "@type": site.schemaType,
  "@id": BUSINESS_ID,
  name: site.name,
  url: absoluteUrl("/"),
  telephone: site.phone,
  address: postalAddress,
};

// Full business details (Home and Contact pages).
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": site.schemaType,
    "@id": BUSINESS_ID,
    name: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    logo: `${SITE_URL}${site.logo.url}`,
    image: `${SITE_URL}${site.ogImage.url}`,
    telephone: site.phone,
    ...(site.email && { email: site.email }),
    address: postalAddress,
    ...(site.geo && { geo: { "@type": "GeoCoordinates", ...site.geo } }),
    ...(site.mapUrl && { hasMap: site.mapUrl }),
    openingHoursSpecification: site.openingHours.map(({ days, opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    })),
    ...(site.areasServed.length && { areaServed: site.areasServed.map((name) => ({ "@type": "Place", name })) }),
    ...(site.sameAs.length && { sameAs: site.sameAs }),
  };
}

// Site name for Google results (Home page).
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: site.name,
    url: absoluteUrl("/"),
    publisher: { "@id": BUSINESS_ID },
  };
}

// A team member (Team page). Add `image` only when a real photo exists.
export function personSchema(member) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/team")}#${member.id}`,
    name: member.name,
    ...(member.credentials && { honorificSuffix: member.credentials }),
    ...(member.jobTitle && { jobTitle: member.jobTitle }),
    ...(member.bio && { description: member.bio }),
    ...(member.knowsAbout?.length && { knowsAbout: member.knowsAbout }),
    ...(member.image && { image: `${SITE_URL}${member.image}` }),
    worksFor: businessRef,
  };
}

// One service page (Service, or MedicalProcedure for clinics).
export function serviceSchema(service) {
  const url = absoluteUrl(`/services/${service.slug}`);
  const base = {
    "@context": "https://schema.org",
    "@type": site.serviceSchemaType,
    name: service.name,
    description: service.metaDescription,
    url,
  };
  return site.serviceSchemaType === "MedicalProcedure"
    ? { ...base, howPerformed: service.steps?.map((s) => s.title).join(", "), provider: businessRef }
    : { ...base, serviceType: service.name, provider: businessRef, areaServed: site.address.addressLocality };
}

// FAQ structured data for a list of { question, answer }.
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

// Breadcrumb trail; items are [{ name, path }], starting after Home.
export function breadcrumbSchema(items) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
