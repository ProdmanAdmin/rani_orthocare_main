import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/schema";

// Answer-first FAQ section with its FAQPage structured data.
// Write each answer so the first sentence answers the question (40–60 words in total), in plain words.
// headingLevel: the section heading level that fits the page outline (default 2). Questions are <summary> text, not headings.
export default function FAQ({ faqs, title = "Frequently Asked Questions", headingLevel = 2 }) {
  if (!faqs?.length) return null;
  const Heading = `h${headingLevel}`;
  return (
    <section className="mb-12" aria-labelledby="faq-heading">
      <JsonLd data={faqSchema(faqs)} />
      <Heading id="faq-heading" className="mb-6 text-2xl font-bold text-ink">
        {title}
      </Heading>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-xl border bg-white">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-ink">
              {faq.question}
              <span aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-body">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
