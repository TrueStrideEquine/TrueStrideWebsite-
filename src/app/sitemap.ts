import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.SITE_URL;
  if (!siteUrl) return [];

  let origin: URL;
  try {
    origin = new URL(siteUrl);
  } catch {
    return [];
  }

  if (origin.protocol !== "http:" && origin.protocol !== "https:") return [];

  return [{ url: new URL("/", origin).toString() }];
}
