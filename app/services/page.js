import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import services from "@/data/services";

export const metadata = pageMetadata(pages.services);

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Breadcrumb items={[{ name: "Services", path: pages.services.path }]} />
      <h1 className="mb-8 text-4xl font-bold text-ink">{pages.services.h1}</h1>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug} className="overflow-hidden rounded-xl border bg-white">
            {service.image && (
              <Image
                src={service.image}
                alt={service.imageAlt}
                width={640}
                height={400}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-ink">{service.name}</h2>
              <p className="mt-2">{service.metaDescription}</p>
              <Link href={`/services/${service.slug}/`} className="mt-3 inline-flex min-h-[44px] items-center font-semibold text-brand">
                Read about {service.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
