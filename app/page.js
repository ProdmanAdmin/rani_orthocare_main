import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { businessSchema, websiteSchema } from "@/lib/schema";
import { phoneHref, site } from "@/lib/site";
import services from "@/data/services";
import { homeFaqs } from "@/data/faqs";

export const metadata = pageMetadata(pages.home);

// Home outline: H1 (main keyword) → H2 sections → H3 cards. Replace the layout with the design; keep the outline.
// The hero image (if any) is the page's main image: use next/image with `priority` on that one image only.
export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={websiteSchema()} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold text-ink md:text-5xl">{pages.home.h1}</h1>
        <p className="mt-4 text-xl">{site.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact/" className="btn-primary">
            Book an appointment
          </Link>
          <a href={phoneHref} className="inline-flex min-h-[44px] items-center rounded-xl border px-6 font-semibold">
            Call {site.phone}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-3xl font-bold text-ink">Our services</h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="rounded-xl border bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
              <p className="mt-2">{service.metaDescription}</p>
              <Link href={`/services/${service.slug}/`} className="mt-3 inline-flex min-h-[44px] items-center font-semibold text-brand">
                Read about {service.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/services/" className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-brand">
          View all services
        </Link>
      </section>

      <div className="mx-auto max-w-4xl px-4">
        <FAQ faqs={homeFaqs} />
      </div>
    </>
  );
}
