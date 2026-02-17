"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { getPressItemBySlug, badgeLabel, badgeColor } from "@/lib/press-data"

export default function PressDetailPage({ params }: { params: { slug: string } }) {
  const item = getPressItemBySlug(params.slug)

  if (!item || !item.pages || item.pages.length === 0) {
    notFound()
  }

  return <PressViewer item={item} />
}

function PressViewer({ item }: { item: NonNullable<ReturnType<typeof getPressItemBySlug>> }) {
  const pages = item.pages!
  const [current, setCurrent] = useState(0)
  const total = pages.length
  const isMultiPage = total > 1

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Back nav */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-6">
        <Link
          href="/press"
          className="inline-flex items-center gap-1 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Press
        </Link>
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border rounded ${badgeColor[item.type]}`}
          >
            {badgeLabel[item.type]}
          </span>
          {item.media && (
            <span className="text-xs font-semibold text-fuchsia-300 uppercase tracking-wider">
              {item.media}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{item.title}</h1>

        <p className="text-sm text-fuchsia-500 mb-4">{item.date}</p>

        {item.description && (
          <p className="text-white/70 text-sm sm:text-base max-w-2xl leading-relaxed border-l-2 border-fuchsia-500/40 pl-4">
            {item.description}
          </p>
        )}
      </div>

      {/* Image viewer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-16">
        <div className="relative bg-gray-950 border border-gray-800 rounded-lg overflow-hidden select-none">
          {/* Page image */}
          <div className="relative w-full">
            <Image
              key={current}
              src={pages[current]}
              alt={`${item.title} – page ${current + 1}`}
              width={1200}
              height={1600}
              className="w-full h-auto object-contain"
              priority={current === 0}
              draggable={false}
            />
          </div>

          {/* Prev / Next overlays (only multi-page) */}
          {isMultiPage && (
            <>
              <button
                onClick={() => setCurrent((p) => Math.max(0, p - 1))}
                disabled={current === 0}
                aria-label="Previous page"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 disabled:opacity-20 transition"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => setCurrent((p) => Math.min(total - 1, p + 1))}
                disabled={current === total - 1}
                aria-label="Next page"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 disabled:opacity-20 transition"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Page indicator */}
        {isMultiPage && (
          <div className="flex items-center justify-center gap-3 mt-4">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Page ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-fuchsia-500 scale-125" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-2">
              {current + 1} / {total}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
