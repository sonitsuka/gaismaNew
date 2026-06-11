"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Music, Video, Film, Palette, Newspaper, Mail, ChevronRight, ChevronLeft } from "lucide-react"

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
    { name: "Videos", path: "/videos", color: "#33cc66", icon: Video },
    { name: "Performance", path: "/performance", color: "#3399ff", icon: Film }, // Film icon for performance art/dance/cinema
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

      {/* Mobile open zone — tapping anywhere in the left ~1cm strip slides the bar in */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="md:hidden fixed left-0 top-0 z-40 h-[calc(100vh-50px)] w-10 flex items-center justify-start"
        >
          <span className="flex items-center justify-center h-16 w-7 bg-black/90 backdrop-blur-md border border-l-0 border-white/20 rounded-r-md text-white/70">
            <ChevronRight size={18} />
          </span>
        </button>
      )}

      {/* Mobile close tab — sits at the open drawer's edge */}
      {isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="md:hidden fixed top-1/2 -translate-y-1/2 left-16 z-50 h-16 w-7 flex items-center justify-center bg-black/90 backdrop-blur-md border border-l-0 border-white/20 rounded-r-md text-white/70"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Sidebar — hidden off-screen on mobile, always visible on desktop */}
      <div
        className={`fixed top-0 left-0 h-[calc(100vh-50px)] w-16 md:w-20 bg-black/90 backdrop-blur-md z-50 border-r border-white/20 flex flex-col py-8 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center space-y-8 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path

            return (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white/60 transition-colors relative group"
                style={{
                  color: isActive ? item.color : "rgba(255, 255, 255, 0.6)",
                }}
              >
                <span className="text-xs uppercase tracking-wider block">
                  {item.icon ? <item.icon size={16} /> : item.name[0]}
                </span>
                <span
                  className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-50"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
                {isActive && (
                  <span
                    className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-px"
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
