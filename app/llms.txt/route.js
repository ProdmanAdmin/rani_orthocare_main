import { pages } from "@/lib/pages";
import { absoluteUrl, addressText, hoursLines, site } from "@/lib/site";
import services from "@/data/services";
import team from "@/data/team";

// /llms.txt: a short plain-text summary for AI assistants (audit A1), built from the same data as the
// site, so it can never drift from the pages. Generated once at build time.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Contact",
    `- Address: ${addressText}`,
    `- Phone: ${site.phone}`,
    ...(site.email ? [`- Email: ${site.email}`] : []),
    ...hoursLines().map((line) => `- Hours: ${line}`),
    ...(site.mapUrl ? [`- Map: ${site.mapUrl}`] : []),
    "",
    ...(team.length
      ? ["## Team", ...team.map((m) => `- ${[m.name, m.credentials, m.jobTitle].filter(Boolean).join(", ")}`), ""]
      : []),
    "## Services",
    ...services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.metaDescription}`),
    "",
    "## Key pages",
    ...Object.values(pages)
      .filter((p) => p.priority >= 0.5)
      .map((p) => `- [${p.h1}](${absoluteUrl(p.path)})`),
    ...(site.areasServed.length ? ["", "## Areas served", site.areasServed.join(", ")] : []),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
