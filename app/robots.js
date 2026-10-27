import { SITE_URL } from "@/lib/site";

// Allow every crawler, including search engines (Googlebot, Bingbot) and AI assistants
// (OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot). Never add a Disallow or noindex by accident.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
