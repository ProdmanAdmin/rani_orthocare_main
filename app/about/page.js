import Breadcrumb from "@/components/Breadcrumb";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(pages.about);

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[{ name: "About", path: pages.about.path }]} />
      <h1 className="mb-6 text-4xl font-bold text-ink">{pages.about.h1}</h1>
      <p className="mb-4">
        REPLACE: The story of the business in plain words: who started it, when, what it does and for whom.
        Use only facts the business has confirmed. No "best", "top" or "No. 1".
      </p>
      <h2 className="mb-3 mt-10 text-2xl font-bold text-ink">REPLACE: Our approach</h2>
      <p>REPLACE: How you work with customers.</p>
    </div>
  );
}
