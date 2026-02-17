export type PressType = "video" | "interview" | "newspaper" | "magazine" | "online"

export type PressItem = {
  title: string
  date: string
  type: PressType
  media?: string
  // external link items
  url?: string
  // internal detail page items
  slug?: string
  description?: string
  // WebP pages for newspaper/magazine slugs
  pages?: string[]
}

export const pressItems: PressItem[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    title: "Erst Ballett, dann Beats",
    date: "Dienstag, 27. 01. 2026",
    media: "STUTTGARTER ZEITUNG",
    type: "newspaper",
    slug: "stuttgarter-zeitung-erst-ballett-dann-beats",
    description:
      "Ein Porträt über GAISMA – Balletttänzerin, Produzentin, Performerin. Die Stuttgarter Zeitung beleuchtet ihren Weg von der klassischen Bühne in die elektronische Musikwelt.",
    pages: ["/page-01.webp"],
  },

  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    title: "TwinTalk: GAISMA on creative diversity and her path into the Stuttgart music scene - STUGGI.TV (DE)",
    date: "September 4, 2025",
    type: "video",
    url: "https://www.youtube.com/watch?v=ok7Y6PG6icg",
  },

  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    title: "4 Minuten mit GAISMA (DE)",
    date: "November 11, 2024",
    type: "online",
    url: "https://www.das-ticket-magazin.de/2024/10/11/4-minuten-mit-gaisma/",
  },

  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    title: "LIFT STUTTGARTMAGAZIN Playtime mit GAISMA Interview (DE)",
    date: "September 28, 2023",
    type: "magazine",
    url: "https://www.lift-online.de/lift-aktuell/playtime-mit-gaisma/",
  },
  {
    title: "Al-Tiba9 Contemporary Art - Alisa Scetinina Performace music body (EN)",
    date: "April 12, 2023",
    type: "online",
    url: "https://www.altiba9.com/artist-interviews/alisa-scetinina-performace-music-body",
  },

  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    title: "LKZ - Vor dem Literaturmuseum in Marbach: Ein Klangspielplatz unter Strom (DE)",
    date: "September 26, 2022",
    type: "newspaper",
    url: "https://www.lkz.de/lokales_artikel,-vor-dem-literaturmuseum-in-marbach-ein-klangspielplatz-unter-strom-_arid,703510.html",
  },

  // ── 2021 ──────────────────────────────────────────────────────────────
  {
    title: "dmcworld magazine - BACK TO MINE WITH SCETI (DE)",
    date: "August 27, 2021",
    type: "magazine",
    url: "http://www.dmcworld.net/back-to-mine/back-to-mine-with-sceti/",
  },

  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    title: "WOMAN OF MUSIC - ALISA SCETININA (DE)",
    date: "May, 2019",
    type: "online",
    url: "https://womenofmusic.de/member_reader/alisa-pgeboren-in-lettland-hat-sich-alisa-scetinina-seit-ihrer-kindheit-mit-musik-und-lettischem-tanz-besch%C3%A4ftigt-w%C3%A4hrend-ihres-.html",
  },
]

export function getPressItemBySlug(slug: string): PressItem | undefined {
  return pressItems.find((item) => item.slug === slug)
}

export const badgeLabel: Record<PressType, string> = {
  newspaper: "NEWSPAPER",
  magazine: "MAGAZINE",
  video: "VIDEO",
  interview: "INTERVIEW",
  online: "ONLINE",
}

export const badgeColor: Record<PressType, string> = {
  newspaper: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  magazine: "bg-purple-500/20 text-purple-400 border-purple-500/40",
  video: "bg-red-500/20 text-red-400 border-red-500/40",
  interview: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  online: "bg-gray-500/20 text-gray-400 border-gray-500/40",
}
