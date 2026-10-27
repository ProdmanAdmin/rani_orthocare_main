import Image from "next/image";
import Link from "next/link";
import { phoneHref, site } from "@/lib/site";

// Site header. The mobile menu uses <details> so it works without JavaScript.
// Replace the styling with the design system; keep the link names, the logo alt text and the 44 px tap targets.
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex min-h-[44px] items-center gap-3 font-bold text-ink">
          <Image src={site.logo.url} alt={`${site.name} logo`} width={40} height={40} />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-[44px] items-center px-3 hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={phoneHref} className="btn-primary ml-2">
                Call {site.phone}
              </a>
            </li>
          </ul>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex min-h-[44px] min-w-[44px] cursor-pointer list-none items-center justify-center rounded-lg border px-3">
            Menu
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 w-60 rounded-xl border bg-white p-2 shadow-lg">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-[44px] items-center rounded-lg px-3 hover:bg-surface">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
