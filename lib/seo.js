import { absoluteUrl, site } from "./site";

// Page metadata in one place: full title, description, absolute self-referencing canonical,
// Open Graph and Twitter tags with an image.
// Each page must set the full openGraph object: a page-level openGraph REPLACES the layout's
// (Next.js does not merge it), so a partial one silently drops the image and site name.
// `title` is complete (it already ends with the brand), so the layout's title template is skipped.
export function pageMetadata({ title, description, path, image, noindex = false }) {
  const url = absoluteUrl(path);
  const ogImage = image || site.ogImage;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: ogImage.width >= 600 ? "summary_large_image" : "summary",
      title,
      description,
      images: [ogImage.url],
    },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
