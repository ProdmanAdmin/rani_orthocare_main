import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { SITE_URL, site } from "@/lib/site";

// Fonts: add the design system's fonts with next/font (self-hosted, no layout shift), e.g.
//   import { Inter } from "next/font/google";
//   const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
// and put `inter.variable` on <html>.

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: site.locale,
    type: "website",
    images: [site.ogImage],
  },
};

export const viewport = {
  themeColor: site.themeColor,
};

export default function RootLayout({ children }) {
  return (
    <html lang={site.language}>
      <body className="bg-surface pb-16 text-body md:pb-0">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
