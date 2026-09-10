"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Music, PenTool, Video, Film, Camera, Palette, Newspaper, Mail, Menu, X } from "lucide-react"

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

  // Rainbow colors for navigation with appropriate icons
  const navItems = [
    { name: "Home", path: "/", color: "#ff3366", icon: Home },
    { name: "About", path: "/about", color: "#ff9933", icon: User },
    { name: "Music", path: "/music", color: "#ffcc33", icon: Music },
    // Compositions: hidden from nav until real content (years, Bandcamp albums) is ready.
    // Page still exists at /compositions — re-add this line to relink it:
    // { name: "Compositions", path: "/compositions", color: "#99cc33", icon: PenTool },
    { name: "Videos", path: "/videos", color: "#33cc66", icon: Video },
    { name: "Performance", path: "/performance", color: "#3399ff", icon: Film }, // Film icon for performance art/dance/cinema
    // Modeling: hidden from nav until real portfolio photos are ready.
    // Page still exists at /modeling — re-add this line to relink it:
    // { name: "Modeling", path: "/modeling", color: "#6666ff", icon: Camera },
    { name: "Curation", path: "/curation", color: "#9966ff", icon: Palette },
    { name: "Press", path: "/press", color: "#cc33ff", icon: Newspaper },
    { name: "Contact", path: "/contact", color: "#00cccc", icon: Mail },
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
