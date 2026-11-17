/**
 * One place for the facts about the site that search engines read.
 *
 * Google works out who a site belongs to partly from structured data and the
 * links it points at. Keeping the profile URLs here means the JSON-LD in the
 * layout, the sitemap and the footer can never drift apart.
 */
export const SITE_URL = "https://gaisma.space"

export const SITE_NAME = "GAISMA"

export const ARTIST_NAME = "Alisa Scetinina"

export const SITE_TITLE = "GAISMA | Alisa Scetinina: Music and Performance Art Portfolio"

/** What Google prints under the title in its results, so it says what this is. */
export const SITE_DESCRIPTION =
  "GAISMA is Alisa Scetinina - musician, composer and performer. Original music for dance, theatre and film, plus live shows, DJ sets and releases."

/** Profiles Google uses to tie this site to the same artist elsewhere. */
export const PROFILES = [
  "https://open.spotify.com/artist/01EmU1Segbe63mUG2eyJ58",
  "https://gaisma.bandcamp.com",
  "https://soundcloud.com/gaisma",
  "https://www.youtube.com/channel/UC4xlthzyUhxk7mI1pCV7W6w",
  "https://www.instagram.com/__gaisma__/",
]

/** Pages offered to search engines, in rough order of importance. */
export const ROUTES = [
  "",
  "/music",
  "/compositions",
  "/performance",
  "/videos",
  "/modeling",
  "/curation",
  "/press",
  "/about",
  "/contact",
  "/imprint",
  "/privacy",
]
