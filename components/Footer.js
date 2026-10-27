import Link from "next/link";
import { addressText, hoursLines, phoneHref, site } from "@/lib/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms/" },
];

// Footer headings are h2 (never h4 after an h2: no skipped levels). Same name, address and phone as everywhere else.
// Social links appear only when real profile URLs are set in site.sameAs (no dead icons).
export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-bold text-ink">{site.name}</p>
          <p className="mt-2">{site.tagline}</p>
        </div>

        <div>
          <h2 className="mb-3 text-base font-bold text-ink">Visit or call</h2>
          <address className="not-italic">
            <p>{addressText}</p>
            <p className="mt-2">
              <a href={phoneHref} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                {site.phone}
              </a>
            </p>
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </p>
            )}
          </address>
          <ul className="mt-2 text-sm">
            {hoursLines().map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-base font-bold text-ink">Pages</h2>
          <ul>
            {[...site.nav, { label: "Areas We Serve", href: "/areas-we-serve/" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {site.sameAs.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Social profiles">
              {site.sameAs.map((url) => (
                <li key={url}>
                  <a href={url} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline" rel="noopener" target="_blank">
                    {new URL(url).hostname.replace(/^www\./, "")}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-4 text-sm">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-4">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
