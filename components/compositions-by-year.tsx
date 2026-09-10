"use client"

import { useState } from "react"

export type Composition = {
  title: string
  project: string
  role: string
  description: string
  link?: string
  year: number | null
  featured?: boolean
}

export function CompositionCard({ piece }: { piece: Composition }) {
  const content = (
    <>
      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white">{piece.title}</h3>
      <p className="mt-1 text-sm text-white/60">{piece.project}</p>
      <p className="mt-3 text-xs uppercase tracking-wider text-white/50">{piece.role}</p>
      <p className="mt-2 text-sm text-white/80">{piece.description}</p>
    </>
  )

  const className =
    "group block bg-white/5 border border-white/10 hover:border-white/40 rounded-lg p-5 md:p-6 transition-colors duration-300"

  return piece.link ? (
    <a href={piece.link} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  )
}

const YEARS_SHOWN_BY_DEFAULT = 2

export default function CompositionsByYear({ compositions }: { compositions: Composition[] }) {
  const [expanded, setExpanded] = useState(false)

  const dated = compositions.filter((c): c is Composition & { year: number } => c.year !== null)
  const undated = compositions.filter((c) => c.year === null)

  const years = Array.from(new Set(dated.map((c) => c.year))).sort((a, b) => b - a)
  const visibleYears = expanded ? years : years.slice(0, YEARS_SHOWN_BY_DEFAULT)
  const hiddenYearsCount = years.length - visibleYears.length

  return (
    <div>
      {visibleYears.map((year) => (
        <div key={year} className="mb-12 md:mb-16 last:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white relative inline-block">
            {year}
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {dated
              .filter((c) => c.year === year)
              .map((piece) => (
                <CompositionCard key={piece.title} piece={piece} />
              ))}
          </div>
        </div>
      ))}

      {years.length > YEARS_SHOWN_BY_DEFAULT && (
        <div className="mb-12">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 text-xs uppercase tracking-wider transition-colors"
          >
            {expanded ? "Show fewer years" : `Show earlier years (${hiddenYearsCount})`}
          </button>
        </div>
      )}

      {undated.length > 0 && (
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white/70 relative inline-block">
            More
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/30 to-transparent" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {undated.map((piece) => (
              <CompositionCard key={piece.title} piece={piece} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
