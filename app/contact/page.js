import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { businessSchema } from "@/lib/schema";
import { addressText, hoursLines, phoneHref, site, whatsappUrl } from "@/lib/site";
import { contactFaqs } from "@/data/faqs";

export const metadata = pageMetadata(pages.contact);

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd data={businessSchema()} />
      <Breadcrumb items={[{ name: "Contact", path: pages.contact.path }]} />
      <h1 className="mb-4 text-4xl font-bold text-ink">{pages.contact.h1}</h1>
      <p className="mb-10 max-w-2xl text-lg">
        To book an appointment, call us on{" "}
        <a href={phoneHref} className="font-semibold text-brand underline-offset-4 hover:underline">
          {site.phone}
        </a>
        {whatsappUrl && (
          <>
            , message us on{" "}
            <a href={whatsappUrl} className="font-semibold text-brand underline-offset-4 hover:underline">
              WhatsApp
            </a>
          </>
        )}{" "}
        or send the form below.
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        <section aria-labelledby="details-heading" className="rounded-2xl border bg-white p-6">
          <h2 id="details-heading" className="mb-4 text-2xl font-bold text-ink">
            Visit us
          </h2>
          <address className="not-italic">
            <p>{addressText}</p>
          </address>
          <h3 className="mb-2 mt-6 font-semibold text-ink">Opening hours</h3>
          <ul>
            {hoursLines().map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {site.mapUrl && (
            <a href={site.mapUrl} className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-brand" target="_blank" rel="noopener">
              Open our location in Google Maps
            </a>
          )}
        </section>

        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="mb-4 text-2xl font-bold text-ink">
            Send us a message
          </h2>
          <ContactForm />
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <FAQ faqs={contactFaqs} />
      </div>
    </div>
  );
}
