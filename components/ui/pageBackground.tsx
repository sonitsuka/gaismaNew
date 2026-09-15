"use client"
import React from "react"

type Page =
  | "home"
  | "about"
  | "music"
  | "compositions"
  | "videos"
  | "performance"
  | "modeling"
  | "curation"
  | "press"

type PageBackgroundProps = {
  page: Page
}

// Matches the 4-color-family palette in components/side-navigation.tsx
const navItems: { page: Page; color: string }[] = [
  { page: "home", color: "#f97316" }, // orange (deep)
  { page: "about", color: "#fb923c" }, // orange (mid)
  { page: "music", color: "#22c55e" }, // green (deep)
  { page: "compositions", color: "#86efac" }, // green (light)
  { page: "videos", color: "#4ade80" }, // green (mid)
  { page: "performance", color: "#a855f7" }, // purple (deep)
  { page: "modeling", color: "#d8b4fe" }, // purple (light)
  { page: "curation", color: "#c084fc" }, // purple (mid)
  { page: "press", color: "#6366f1" }, // indigo (deep)
]

export default function PageBackground({ page }: PageBackgroundProps) {
  const index = navItems.findIndex((item) => item.page === page)
  const prevColor = navItems[index - 1]?.color || "#000000"
  const keyColor = navItems[index]?.color || "#111111"
  const nextColor = navItems[index + 1]?.color || "#000000"

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, #0c0c1a 0%, #000 100%)",
          filter: "contrast(1.1) saturate(1)",
        }}
      />

      {/* Main key color - subtle center glow */}
      <div
        className="absolute inset-0 blur-[120px] opacity-20"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${keyColor} 0%, transparent 70%)`,
        }}
      />

      {/* Previous color - gentle left fog */}
      <div
        className="absolute -left-1/4 top-1/3 w-[80%] h-[80%] blur-[160px] opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${prevColor} 0%, transparent 70%)`,
        }}
      />

      {/* Next color - gentle right fog */}
      <div
        className="absolute -right-1/4 top-1/2 w-[80%] h-[80%] blur-[160px] opacity-[0.08]"
        style={{
          background: `radial-gradient(circle, ${nextColor} 0%, transparent 70%)`,
        }}
      />

      {/* SVG noise overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Fine grain texture */}
      <div
        className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 5px)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.02) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.02) 20px)",
        }}
      />
    </div>
  )
}
