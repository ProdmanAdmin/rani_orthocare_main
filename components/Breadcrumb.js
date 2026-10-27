import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// Visible breadcrumb plus its BreadcrumbList structured data, rendered on the server (no client JavaScript).
// items: [{ name, path }] after Home; the last item is the current page.
export default function Breadcrumb({ items }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="font-medium text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="underline-offset-4 hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
