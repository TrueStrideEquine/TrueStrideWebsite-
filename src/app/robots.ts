import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  let sitemap: string | undefined;
  if (process.env.SITE_URL) {
    try {
      const origin = new URL(process.env.SITE_URL);
      if (origin.protocol === "http:" || origin.protocol === "https:") {
        sitemap = new URL("/sitemap.xml", origin).toString();
      }
    } catch {
      sitemap = undefined;
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(sitemap ? { sitemap } : {}),
  };
}
