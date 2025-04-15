"use client"
import React from "react"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 1. Deep colorful gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #1f1135 0%, #0f0a20 60%, #190f3d 100%)",
          filter: "contrast(1.3) saturate(1.3)",
        }}
      />

      {/* 2. Vibrant prismatic blobs (using full colors, no opacity-based black) */}
      <div
        className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full blur-[160px]"
        style={{
          background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[20%] left-[30%] w-[50%] h-[50%] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)",
        }}
      />

      {/* 3. SVG Noise texture with mix-blend */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-25"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* 4. Fine grain texture */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 5px)",
        }}
      />

      {/* 5. Optional subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(255,255,255,0.03) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(255,255,255,0.03) 20px)",
        }}
      />
    </div>
  )
}
