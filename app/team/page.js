import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { pages } from "@/lib/pages";
import { pageMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";
import team from "@/data/team";
import { teamFaqs } from "@/data/faqs";

export const metadata = pageMetadata(pages.team);

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Breadcrumb items={[{ name: "Team", path: pages.team.path }]} />
      <h1 className="mb-8 text-4xl font-bold text-ink">{pages.team.h1}</h1>
      <ul className="space-y-8">
        {team.map((member) => (
          <li key={member.id} id={member.id} className="flex flex-col gap-6 rounded-2xl border bg-white p-6 sm:flex-row">
            <JsonLd data={personSchema(member)} />
            {member.image && (
              <Image src={member.image} alt={member.imageAlt} width={200} height={200} className="h-48 w-48 rounded-xl object-cover" />
            )}
            <div>
              <h2 className="text-2xl font-bold text-ink">{member.name}</h2>
              <p className="font-medium">{[member.credentials, member.jobTitle].filter(Boolean).join(" · ")}</p>
              <p className="mt-3">{member.bio}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <FAQ faqs={teamFaqs} />
      </div>
    </div>
  );
}
