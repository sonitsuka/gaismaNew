"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Music, PenTool, Video, Camera, Palette, Newspaper, Mail, Menu, X } from "lucide-react"

// Stage curtains only — the lucide Theater icon minus the two chair/seat shapes at the bottom.
function CurtainsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
    </svg>
  )
}

export default function SideNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Swipe gestures (mobile): swipe right from the left edge opens, swipe left closes
  useEffect(() => {
    let startX = 0
    let startY = 0
    let tracking = false

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      startX = touch.clientX
      startY = touch.clientY
      // Only begin tracking near the left edge when closed, or anywhere when open
      tracking = isOpen || startX < 40
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!tracking) return
      tracking = false
      const touch = e.changedTouches[0]
      const dx = touch.clientX - startX
      const dy = touch.clientY - startY
      // Ignore mostly-vertical swipes (scrolling)
      if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return
      if (dx > 0 && startX < 40) setIsOpen(true)
      else if (dx < 0 && isOpen) setIsOpen(false)
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
    }
  }, [isOpen])

  // Four color families (green / orange / purple / indigo), grouped by theme —
  // each item within a family gets a different shade so they stay distinguishable.
  const navItems = [
    { name: "Home", path: "/", color: "#f97316", icon: Home }, // orange (deep)
    { name: "About", path: "/about", color: "#fb923c", icon: User }, // orange (mid)
    { name: "Music", path: "/music", color: "#22c55e", icon: Music }, // green (deep)
    // Compositions: hidden from nav until real content (years, Bandcamp albums) is ready.
    // Page still exists at /compositions — re-add this line to relink it:
    // { name: "Compositions", path: "/compositions", color: "#86efac", icon: PenTool }, // green (light)
    { name: "Videos", path: "/videos", color: "#4ade80", icon: Video }, // green (mid)
    { name: "Performance", path: "/performance", color: "#a855f7", icon: CurtainsIcon }, // purple (deep)
    // Modeling: hidden from nav until real portfolio photos are ready.
    // Page still exists at /modeling — re-add this line to relink it:
    // { name: "Modeling", path: "/modeling", color: "#d8b4fe", icon: Camera }, // purple (light)
    { name: "Curation", path: "/curation", color: "#c084fc", icon: Palette }, // purple (mid)
    { name: "Press", path: "/press", color: "#6366f1", icon: Newspaper }, // indigo (deep)
    { name: "Contact", path: "/contact", color: "#818cf8", icon: Mail }, // indigo (mid)
  ]

  return (
    <>
      {/* Mobile backdrop: tap anywhere to close the drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu button — always visible, clearly tappable */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden fixed top-4 left-4 z-40 h-11 w-11 flex items-center justify-center bg-black/90 backdrop-blur-md border border-white/20 rounded-full text-white shadow-lg"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar — full labeled drawer on mobile, icon rail with hover labels on desktop */}
      <div
        className={`fixed top-0 left-0 h-[calc(100vh-50px)] w-64 md:w-20 bg-black/95 md:bg-black/90 backdrop-blur-md z-50 border-r border-white/20 flex flex-col py-6 md:py-8 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile close button — inside the open drawer */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="md:hidden self-end mr-4 mb-4 h-9 w-9 flex items-center justify-center text-white/70 hover:text-white"
        >
          <X size={20} />
        </button>

        <nav className="flex flex-col items-stretch md:items-center gap-1 md:gap-8 px-2 md:px-0 md:mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 md:block text-white/60 transition-colors relative group px-3 py-2.5 md:p-0 rounded-md hover:bg-white/5 md:hover:bg-transparent"
                style={{
                  color: isActive ? item.color : "rgba(255, 255, 255, 0.6)",
                }}
              >
                <span className="shrink-0 flex items-center justify-center">
                  {item.icon ? <item.icon size={20} /> : item.name[0]}
                </span>
                {/* Always-visible label on mobile */}
                <span className="text-sm md:hidden">{item.name}</span>
                {/* Desktop hover tooltip */}
                <span
                  className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-50"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
                {isActive && (
                  <span
                    className="absolute right-2 md:right-0 top-1/2 md:translate-x-3 -translate-y-1/2 w-6 h-px hidden md:block"
                    style={{ backgroundColor: item.color }}
                  ></span>
                )}
                {isActive && (
                  <span
                    className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                )}
              </Link>
            )
          })}
        </nav>
        <div className="mt-auto mb-4"></div>
      </div>
    </>
  )
}
