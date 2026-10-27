import Breadcrumb from "@/components/Breadcrumb";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(pages.terms);

// REPLACE the text with terms the business has approved. Do not publish this placeholder.
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumb items={[{ name: "Terms of Use", path: pages.terms.path }]} />
      <h1 className="mb-6 text-4xl font-bold text-ink">{pages.terms.h1}</h1>
      <p>REPLACE: Terms of use approved by {site.name}.</p>
    </div>
  );
}
