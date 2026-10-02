import { ExternalLink } from "lucide-react"

export type BandcampEmbedProps = {
  /**
   * The numeric id from Bandcamp's embed code — just the digits after `album=`:
   *   https://bandcamp.com/EmbeddedPlayer/album=1234567890/size=large/...
   *                                             ^^^^^^^^^^
   * Get it from the album page on Bandcamp → "Share / Embed" → "Embed this album".
   *
   * Leave this out while the album is still private: a private release can't be
   * played by visitors inside an embed, so the component falls back to a
   * "Listen on Bandcamp" card pointing at `url` instead of a dead player.
   */
  albumId?: string | null
  /** Optional: the digits after `track=` in the embed code, to feature one piece instead of the whole album. */
  trackId?: string | null
  /** The album's page on Bandcamp. Used for the fallback card and the link under the player. */
  url: string
  /** Album name — shown on the fallback card and used as the player's accessible title. */
  title: string
  /** One line of context for the fallback card (ignored once the player is live). */
  note?: string
  /** Show the track list inside the player. Off gives the short artwork-only player. */
  tracklist?: boolean
  /**
   * Player height in px. Bandcamp players don't reflow, so this is fixed while the
   * width stays fluid. If you change the options in the Share / Embed dialog, copy
   * the `height` from the code it gives you.
   */
  height?: number
}

export default function BandcampEmbed({
  albumId,
  trackId,
  url,
  title,
  note,
  tracklist = true,
  height,
}: BandcampEmbedProps) {
  if (!albumId) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 hover:border-white/40 rounded-lg px-5 py-4 transition-colors duration-300"
      >
        <span className="min-w-0">
          <span className="block text-sm sm:text-base font-semibold text-white truncate">{title}</span>
          <span className="block mt-1 text-xs uppercase tracking-wider text-white/50">Listen on Bandcamp</span>
          {note && <span className="block mt-2 text-sm text-white/70">{note}</span>}
        </span>
        <ExternalLink size={18} className="shrink-0 text-white/50 group-hover:text-white transition-colors" />
      </a>
    )
  }

  // `transparent=true` drops Bandcamp's own background so the player sits on the
  // page's dark backdrop; `linkcol=ffffff` keeps its text readable against it.
  const src = [
    `https://bandcamp.com/EmbeddedPlayer/album=${albumId}`,
    trackId ? `track=${trackId}` : null,
    "size=large",
    "artwork=small",
    `tracklist=${tracklist ? "true" : "false"}`,
    "transparent=true",
    "bgcol=000000",
    "linkcol=ffffff",
  ]
    .filter(Boolean)
    .join("/")

  return (
    <div>
      {/* The dark wrapper + `colorScheme` keep the player's slot from flashing white
          on a slow load — a bare iframe paints the browser's white default first. */}
      <div
        style={{ height: height ?? (tracklist ? 472 : 120) }}
        className="w-full bg-black/40 border border-white/10 rounded-lg overflow-hidden"
      >
        <iframe
          src={`${src}/`}
          title={`${title} on Bandcamp`}
          loading="lazy"
          seamless
          style={{ colorScheme: "dark" }}
          className="w-full h-full border-0"
        />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors"
      >
        Open on Bandcamp
        <ExternalLink size={13} />
      </a>
    </div>
  )
}
