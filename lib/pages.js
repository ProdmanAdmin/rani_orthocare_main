// Page registry: one place for every fixed page's main heading (h1), address, title and description.
// h1: one per page, contains the page's main keyword naturally.
// Pages read their metadata from here and the sitemap lists them from here, so they never drift apart.
// Rules: title 60 characters or less, description 155 or less, both unique, main keyword near the start,
// no superlatives ("best", "No. 1") and no promises. Take the wording from the growth plan's metadata table.
// Service pages keep their title and description in data/services.js.

export const pages = {
  home: {
    h1: "REPLACE: Main Keyword in City",
    path: "/",
    title: "REPLACE: Main Keyword in City | Business Name",
    description: "REPLACE: 120–155 characters: what you offer, for whom, where, and the next step (call, book, visit).",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  about: {
    h1: "About REPLACE: Business Name",
    path: "/about/",
    title: "REPLACE: About Business Name | City",
    description: "REPLACE: Who you are, how long you have served the area and what makes the service careful and reliable.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  services: {
    h1: "Our Services",
    path: "/services/",
    title: "REPLACE: Services in City | Business Name",
    description: "REPLACE: The main services in one sentence, with the location.",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  team: {
    h1: "Our Team",
    path: "/team/",
    title: "REPLACE: Lead Person, Credentials | Role, City",
    description: "REPLACE: The lead person's name, qualifications and roles.",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  contact: {
    h1: "Contact Us",
    path: "/contact/",
    title: "REPLACE: Book an Appointment in City | Business Name",
    description: "REPLACE: Address, opening hours and phone number in one sentence.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  areas: {
    h1: "Areas We Serve",
    path: "/areas-we-serve/",
    title: "REPLACE: Service Near Area One, Area Two | Business Name",
    description: "REPLACE: Business Name in City welcomes customers from Area One, Area Two and nearby areas.",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  privacy: {
    h1: "Privacy Policy",
    path: "/privacy-policy/",
    title: "Privacy Policy | REPLACE: Business Name",
    description: "How REPLACE: Business Name collects, uses and protects the details you share through this website.",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  terms: {
    h1: "Terms of Use",
    path: "/terms/",
    title: "Terms of Use | REPLACE: Business Name",
    description: "The terms for using the REPLACE: Business Name website.",
    changeFrequency: "yearly",
    priority: 0.2,
  },
};
