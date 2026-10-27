import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { addressText, hoursLines, site } from "@/lib/site";

export const metadata = pageMetadata(pages.areas);

// Local SEO page: the nearby areas the business serves (site.areasServed).
// Name the business's own location once; describe the areas honestly (no fake branch offices).
// Delete this page, its registry entry and its footer link if the business is not local.
export default function AreasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[{ name: "Areas We Serve", path: pages.areas.path }]} />
      <h1 className="mb-4 text-4xl font-bold text-ink">{pages.areas.h1}</h1>
      <p className="mb-8 text-lg">
        REPLACE: {site.name} is in {site.address.addressLocality}. We welcome customers from these nearby areas:
      </p>

      {site.areasServed.length > 0 ? (
        <ul className="mb-10 flex flex-wrap gap-3">
          {site.areasServed.map((area) => (
            <li key={area} className="rounded-full border bg-white px-5 py-2 font-medium">
              {area}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-10">REPLACE: add the areas to site.areasServed in lib/site.js.</p>
      )}

      <section className="rounded-2xl border bg-white p-6">
        <h2 className="mb-3 text-2xl font-bold text-ink">How to find us</h2>
        <p>{addressText}</p>
        <ul className="mt-3">
          {hoursLines().map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <Link href="/contact/" className="btn-primary mt-6">
          Book an appointment
        </Link>
      </section>
    </div>
  );
}
