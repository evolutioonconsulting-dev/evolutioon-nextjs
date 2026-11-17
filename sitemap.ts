import type { MetadataRoute } from "next";
import { site, services, articles, events } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/services",
    "/insights",
    "/events",
    "/contact"
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const serviceRoutes = services
    .filter((s) => s.slug === "coaching")
    .map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/insights/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes];
}
