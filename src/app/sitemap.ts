import type { MetadataRoute } from "next";

const siteUrl = "https://example.com";
const routes = [
  "",
  "/our-world",
  "/ts-01",
  "/journey",
  "/philosophy",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
