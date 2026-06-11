"use client"

import { useState } from "react"

type Show = {
  date: string
  title: string
  venue?: string
  tag?: string
}

interface PastShowsProps {
  shows: Show[]
}

export default function PastShows({ shows }: PastShowsProps) {
  const [showAll, setShowAll] = useState(false)

  const visibleShows = showAll ? shows : shows.slice(0, 3)

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
        <span className="text-white">Shows</span>
        <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent"></span>
      </h2>

      <ul className="grid gap-3">
        {visibleShows.map((n, i) => (
          <li
            key={i}
            className="bg-black border border-white/10 hover:border-white/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-start"
          >
            <p className="text-white text-sm mb-2 sm:mb-0">{n.date}</p>
            <p className="text-white/90 sm:ml-6">
              {n.title}
              {n.venue ? ` — ${n.venue}` : ""}
            </p>
          </li>
        ))}
      </ul>

      {shows.length > 3 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 text-xs uppercase tracking-wider transition-colors"
          >
            {showAll ? "Show less" : "Read more"}
          </button>
        </div>
      )}
    </div>
  )
}
