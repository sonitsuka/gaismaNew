import type { MetadataRoute } from "next"
import { SITE_URL, ROUTES } from "@/lib/site"
import { pressItems } from "@/lib/press-data"

/**
 * Served at /sitemap.xml. It is how a search engine learns which pages exist
 * without having to find every one of them by following links.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/music" || route === "/compositions" ? 0.8 : 0.6,
  }))

  const press = pressItems
    .filter((item) => item.slug)
    .map((item) => ({
      url: `${SITE_URL}/press/${item.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    }))

  return [...pages, ...press]
}
