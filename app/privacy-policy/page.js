import Breadcrumb from "@/components/Breadcrumb";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(pages.privacy);

// REPLACE the text with a policy the business has approved (what the contact form collects, why,
// where it is stored, how long, who to contact). Do not publish this placeholder.
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Breadcrumb items={[{ name: "Privacy Policy", path: pages.privacy.path }]} />
      <h1 className="mb-6 text-4xl font-bold text-ink">{pages.privacy.h1}</h1>
      <p>REPLACE: Privacy policy text approved by {site.name}.</p>
    </div>
  );
}
