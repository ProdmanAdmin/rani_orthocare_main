import Link from "next/link";
import { phoneHref, whatsappUrl } from "@/lib/site";

// Call / WhatsApp / Contact bar fixed to the bottom of the screen on phones, so the main action is always one tap away.
// The layout adds bottom padding on phones so this bar never covers the footer.
export default function MobileActionBar() {
  const actions = [
    { label: "Call", href: phoneHref, external: true },
    ...(whatsappUrl ? [{ label: "WhatsApp", href: whatsappUrl, external: true }] : []),
    { label: "Contact", href: "/contact/" },
  ];
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t bg-white md:hidden">
      <ul className="grid" style={{ gridTemplateColumns: `repeat(${actions.length}, minmax(0, 1fr))` }}>
        {actions.map((action) => (
          <li key={action.label}>
            {action.external ? (
              <a href={action.href} className="flex min-h-[56px] items-center justify-center font-semibold text-brand">
                {action.label}
              </a>
            ) : (
              <Link href={action.href} className="flex min-h-[56px] items-center justify-center font-semibold text-brand">
                {action.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
