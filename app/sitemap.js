import { pages } from "@/lib/pages";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";
import services from "@/data/services";

// Every indexable page with its real last-changed date (never the build time), on the official domain,
// in the same trailing-slash form the site serves. Submit /sitemap.xml in Search Console and Bing.
export default function sitemap() {
  const fixed = Object.values(pages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.updatedAt || CONTENT_UPDATED),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: new Date(service.updatedAt || CONTENT_UPDATED),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...fixed, ...serviceRoutes];
}
