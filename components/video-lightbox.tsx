"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Loader2, X } from "lucide-react"

/**
 * Plays YouTube and Vimeo links in an overlay instead of sending people off-site.
 *
 * Mounted once in the root layout, it listens for clicks anywhere on the page and
 * takes over any link pointing at a video. Nothing else changes: the cards
 * stay ordinary <a href="https://www.youtube.com/watch?v=..."> elements, so with
 * JavaScript off, or if this ever breaks, every link still works the old way.
 *
 * Cost on page load is zero. No player exists until someone clicks - an embed is
 * several hundred KB of script per video, so putting 16 of them on /videos up front
 * would be far heavier than the page is now.
 *
 * youtube-nocookie.com defers YouTube's tracking cookies until playback starts.
 *
 * Opt out per link with data-external-video, for videos that should send people
 * to YouTube itself (VideoPreviewCard exposes this as the `external` prop).
 *
 * Perceived speed. A cold embed spends its first moments on DNS, TCP and TLS
 * before a single pixel arrives, which reads as a dead player. Two things hide
 * that: the connections are opened the first time someone hovers or touches a
 * video link, so the handshakes are done before the click, and the overlay puts
 * the poster frame and a spinner up immediately, with the player fading in over
 * them once it is ready. The click always produces something visible at once.
 */
type Video = { kind: "youtube" | "vimeo"; id: string; start?: number }

const PRECONNECT: Record<Video["kind"], string[]> = {
  youtube: ["https://www.youtube-nocookie.com", "https://i.ytimg.com"],
  vimeo: ["https://player.vimeo.com", "https://i.vimeocdn.com", "https://f.vimeocdn.com"],
}

// If the embed never reports back, show it anyway rather than spin for ever.
const READY_TIMEOUT_MS = 4000

function parseVideo(href: string): Video | null {
  let url: URL
  try {
    url = new URL(href)
  } catch {
    return null
  }
  const host = url.hostname.replace(/^www\./, "")
  let id: string | null = null
  if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    if (url.pathname === "/watch") id = url.searchParams.get("v")
    else if (url.pathname.startsWith("/embed/")) id = url.pathname.slice(7)
  } else if (host === "youtu.be") {
    id = url.pathname.slice(1)
  }
  if (id) {
    if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null
    // "?t=462s", "?t=462" and "?start=462" all appear in the wild.
    const raw = url.searchParams.get("t") || url.searchParams.get("start")
    const start = raw ? parseInt(raw, 10) : undefined
    return { kind: "youtube", id, start: Number.isFinite(start) && start! > 0 ? start : undefined }
  }

  if (host === "vimeo.com") {
    const m = url.pathname.match(/^\/(\d{6,})/)
    if (m) return { kind: "vimeo", id: m[1] }
  }
  return null
}

export default function VideoLightbox() {
  const [video, setVideo] = useState<Video | null>(null)
  const [ready, setReady] = useState(false)
  const warmed = useRef<Set<string>>(new Set())

  useEffect(() => {
    const videoLinkFrom = (target: EventTarget | null) => {
      const link = (target as HTMLElement | null)?.closest?.("a")
      if (!link) return null
      // Some videos belong to other artists, where the view should count on
      // their channel. Those links are marked data-external-video, and both the
      // overlay and the preconnects below leave them alone.
      if (link.closest("[data-external-video]")) return null
      return parseVideo(link.getAttribute("href") || "")
    }

    const warm = (e: Event) => {
      const parsed = videoLinkFrom(e.target)
      if (!parsed) return
      for (const href of PRECONNECT[parsed.kind]) {
        if (warmed.current.has(href)) continue
        warmed.current.add(href)
        const el = document.createElement("link")
        el.rel = "preconnect"
        el.href = href
        el.crossOrigin = ""
        document.head.appendChild(el)
      }
    }

    const onClick = (e: MouseEvent) => {
      // Leave cmd/ctrl/shift-click and middle-click alone so "open in new tab" still works.
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const parsed = videoLinkFrom(e.target)
      if (!parsed) return
      e.preventDefault()
      setReady(false)
      setVideo(parsed)
    }

    // pointerover covers a mouse, pointerdown the first touch on a phone.
    document.addEventListener("pointerover", warm, { passive: true })
    document.addEventListener("pointerdown", warm, { passive: true })
    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("pointerover", warm)
      document.removeEventListener("pointerdown", warm)
      document.removeEventListener("click", onClick)
    }
  }, [])

  const close = useCallback(() => setVideo(null), [])

  useEffect(() => {
    if (!video) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => setReady(true), READY_TIMEOUT_MS)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
      clearTimeout(timer)
    }
  }, [video, close])

  if (!video) return null

  const poster = video.kind === "youtube" ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` : null

  const src =
    video.kind === "vimeo"
      ? `https://player.vimeo.com/video/${video.id}?autoplay=1`
      : `https://www.youtube-nocookie.com/embed/${video.id}` +
        `?autoplay=1&rel=0&modestbranding=1${video.start ? `&start=${video.start}` : ""}`

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={close}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close video"
        className="absolute top-4 right-4 h-11 w-11 flex items-center justify-center text-white/70 hover:text-white"
      >
        <X size={24} />
      </button>
      <div
        className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {!ready && (
          <>
            {poster && (
              <div
                aria-hidden
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url("${poster}")` }}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-10 w-10 animate-spin text-white/70" aria-label="Loading video" />
            </div>
          </>
        )}
        <iframe
          key={video.id}
          src={src}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setReady(true)}
          className={`relative w-full h-full border-0 transition-opacity duration-300 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <a
        href={
          video.kind === "vimeo"
            ? `https://vimeo.com/${video.id}`
            : `https://www.youtube.com/watch?v=${video.id}`
        }
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-4 text-xs uppercase tracking-wider text-white/40 hover:text-white/80 transition-colors"
      >
        {video.kind === "vimeo" ? "Watch on Vimeo" : "Watch on YouTube"}
      </a>
    </div>
  )
}
