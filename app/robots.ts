import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

/** Served at /robots.txt: everything is public, and here is the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
