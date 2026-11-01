"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export type GalleryPhoto = {
  src: string
  full?: string
  width: number
  height: number
  alt: string
}

/**
 * Masonry gallery: equal-width columns, each photo keeping its own proportions.
 *
 * Photos are dealt across the columns in turn (1,2,3 / 4,5,6 …) rather than
 * filling one column before the next, so reading left-to-right across the top
 * follows the order they were given in. CSS `columns` would fill downwards and
 * bury the opening images in the first column.
 */
export default function MasonryGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [cols, setCols] = useState(3)
  const [lightbox, setLightbox] = useState<number | null>(null)

  useEffect(() => {
    const pick = () => setCols(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 2)
    pick()
    window.addEventListener("resize", pick)
    return () => window.removeEventListener("resize", pick)
  }, [])

  const step = useCallback(
    (d: number) => setLightbox((i) => (i === null ? null : (i + d + photos.length) % photos.length)),
    [photos.length],
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    document.addEventListener("keydown", onKey)
    // Stop the page scrolling behind the lightbox
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox, step])

  const columns: GalleryPhoto[][] = Array.from({ length: cols }, () => [])
  photos.forEach((p, i) => columns[i % cols].push(p))

  const open = lightbox !== null ? photos[lightbox] : null

  return (
    <>
      <div className="flex gap-3 md:gap-4 items-start">
        {columns.map((col, c) => (
          <div key={c} className="flex-1 flex flex-col gap-3 md:gap-4 min-w-0">
            {col.map((photo) => {
              const index = photos.indexOf(photo)
              return (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Open ${photo.alt}`}
                  className="group relative block w-full overflow-hidden rounded-lg border border-white/10 hover:border-white/40 transition-colors"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-4 right-4 h-11 w-11 flex items-center justify-center text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 h-12 w-12 flex items-center justify-center text-white/60 hover:text-white"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Next"
            className="absolute right-2 md:right-6 h-12 w-12 flex items-center justify-center text-white/60 hover:text-white"
          >
            <ChevronRight size={32} />
          </button>
          <img
            src={open.full || open.src}
            alt={open.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full object-contain select-none"
          />
          <span className="absolute bottom-4 text-xs uppercase tracking-wider text-white/40">
            {(lightbox ?? 0) + 1} / {photos.length}
          </span>
        </div>
      )}
    </>
  )
}
