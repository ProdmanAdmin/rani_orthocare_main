import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";
import { phoneHref, site } from "@/lib/site";
import services, { getService } from "@/data/services";

// Every service page is built at build time from data/services.js. Unknown slugs return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ...(service.image && { image: { url: service.image, width: 1200, height: 630, alt: service.imageAlt } }),
  });
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

// Section order: H1 + intro, benefits, steps, FAQ, reviewed-by line, call to action, related services.
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <JsonLd data={serviceSchema(service)} />
      <Breadcrumb
        items={[
          { name: "Services", path: "/services/" },
          { name: service.name, path: `/services/${service.slug}/` },
        ]}
      />

      <h1 className="mb-4 text-4xl font-bold text-ink">{service.name}</h1>
      <p className="mb-8 text-lg">{service.intro}</p>

      {service.image && (
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={1200}
          height={630}
          priority
          sizes="(min-width: 896px) 864px, 100vw"
          className="mb-10 h-auto w-full rounded-2xl"
        />
      )}

      {service.benefits.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-ink">Benefits of {service.name}</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <li key={b.title} className="rounded-xl border bg-white p-5">
                <h3 className="font-semibold text-ink">{b.title}</h3>
                <p className="mt-1">{b.text}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {service.steps.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-ink">How it works</h2>
          <ol className="space-y-4">
            {service.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      <FAQ faqs={service.faqs} />

      <p className="mb-12 text-sm text-muted">
        {site.reviewer.name && (
          <>
            Reviewed by {site.reviewer.name}
            {site.reviewer.credentials && `, ${site.reviewer.credentials}`}.{" "}
          </>
        )}
        Last updated {formatDate(service.updatedAt)}.
      </p>

      <section className="mb-12 rounded-2xl border bg-white p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold text-ink">Book {service.name}</h2>
        <p className="mb-6">Call us or send a message and we will find a time that suits you.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact/" className="btn-primary">
            Book an appointment
          </Link>
          <a href={phoneHref} className="inline-flex min-h-[44px] items-center rounded-xl border px-6 font-semibold">
            Call {site.phone}
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-bold text-ink">Related services</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="flex min-h-[44px] items-center rounded-xl border bg-white px-4 py-3 font-semibold text-brand">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
