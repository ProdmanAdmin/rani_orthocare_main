import Link from "next/link";

// Real 404 status (Next.js sets it). Search engines drop missing pages instead of treating them as content.
export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-bold text-ink">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
