// Services: one entry per service page at /services/<slug>/. Add or edit services here, never by copying pages.
// Once a slug is live, never change it (it is the page address Google has stored).
//
// Fields
//   slug, name                 page address and visible name (the page's H1)
//   metaTitle, metaDescription title ≤ 60 characters, description ≤ 155, unique; main keyword near the start
//   intro                      first paragraph, answer-first: what it is, who it is for, where
//   image, imageAlt            optional; under public/images/, ≤ 200 KB, WebP/AVIF; alt describes the picture
//   benefits                   [{ title, text }]
//   steps                      [{ title, text }] how the service works, in order
//   faqs                       [{ question, answer }] first sentence answers the question, 40–60 words in total
//   updatedAt                  "YYYY-MM-DD" when this page's content last changed (sitemap lastModified)
// The two entries below are examples showing every field. Replace them.

const services = [
  {
    slug: "example-service",
    name: "REPLACE: Example Service",
    metaTitle: "REPLACE: Example Service in City | Business Name",
    metaDescription: "REPLACE: Example Service in City for families and professionals. What it involves, how long it takes and how to book.",
    intro:
      "REPLACE: Example Service is ... (one or two sentences that directly answer what it is and who it helps). We offer it at our City office, with ...",
    image: "",
    imageAlt: "",
    benefits: [
      { title: "REPLACE: Benefit one", text: "REPLACE: One sentence on why this matters to the customer." },
      { title: "REPLACE: Benefit two", text: "REPLACE: One sentence on why this matters to the customer." },
      { title: "REPLACE: Benefit three", text: "REPLACE: One sentence on why this matters to the customer." },
    ],
    steps: [
      { title: "REPLACE: Consultation", text: "REPLACE: What happens first." },
      { title: "REPLACE: The service", text: "REPLACE: What happens during the service." },
      { title: "REPLACE: Aftercare", text: "REPLACE: What happens afterwards." },
    ],
    faqs: [
      {
        question: "REPLACE: How long does Example Service take?",
        answer: "REPLACE: Example Service usually takes ... (answer in the first sentence, then one or two sentences of detail).",
      },
      {
        question: "REPLACE: Who is Example Service suitable for?",
        answer: "REPLACE: It suits ... (answer first, plain words, no promises of results).",
      },
    ],
    updatedAt: "2026-01-01",
  },
  {
    slug: "another-service",
    name: "REPLACE: Another Service",
    metaTitle: "REPLACE: Another Service in City | Business Name",
    metaDescription: "REPLACE: Another Service in City: a short, specific description with the location and the next step.",
    intro: "REPLACE: Another Service is ... (answer-first introduction).",
    image: "",
    imageAlt: "",
    benefits: [],
    steps: [],
    faqs: [],
    updatedAt: "2026-01-01",
  },
];

export default services;

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
