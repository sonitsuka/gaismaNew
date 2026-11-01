"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Music, Video, Camera, Palette, Newspaper, Mail, Menu, X, ChevronDown } from "lucide-react"

// Stage curtains only — two draped sides, no bottom line and no chairs.
function ClefIcon({ size = 24 }: { size?: number }) {
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
      {/* Stem, continuing into the descender hook below the staff */}
      <path d="M13.25 2.65v15c0 2.3-1.1 3.7-2.8 3.7-1.3 0-2.1-.9-2.1-1.9" />
      {/* One open sweep from the top into the eye — a second crossing turns to mush at 20px */}
      <path d="M13.25 2.65C9.45 6.05 7.65 9.25 7.65 12.05c0 2.7 2.1 4.6 4.7 4.6 2.3 0 4-1.7 4-3.8 0-2-1.6-3.5-3.6-3.5" />
    </svg>
  )
}

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
    </svg>
  )
}

export default function SideNavigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

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

  // Close the submenu when the route changes, so it never lingers over a new page.
  useEffect(() => {
    setOpenMenu(null)
  }, [pathname])

  // Desktop: a click anywhere outside the rail closes an open submenu.
  useEffect(() => {
    if (!openMenu) return
    const onDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-sidenav]")) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [openMenu])

  // Four color families (green / purple / red-orange / blue), spaced far apart in hue
  // so items don't blend together — each pair differs mainly by light vs. dark shade.
  const navItems = [
    { name: "Home", path: "/", color: "#a2bf69", icon: Home }, // green (light, matches the site's natural forest tones)
    { name: "About", path: "/about", color: "#67863c", icon: User }, // green (dark)
    // Music opens a submenu rather than navigating: /music and the videos page sit
    // under it, which frees a top-level slot (Videos used to take one of its own).
    {
      name: "Music",
      color: "#b890df", // purple (light)
      icon: Music,
      children: [
        { name: "Music", path: "/music", icon: Music },
        { name: "Video", path: "/videos", icon: Video },
      ],
    },
    { name: "Compositions", path: "/compositions", color: "#9155ce", icon: ClefIcon }, // purple (mid)
    { name: "Performance", path: "/performance", color: "#bb401b", icon: CurtainsIcon }, // red-orange (dark)
    { name: "Modeling", path: "/modeling", color: "#e36f2b", icon: Camera }, // red-orange (mid)
    { name: "Curation", path: "/curation", color: "#eda65e", icon: Palette }, // orange (light)
    { name: "Press", path: "/press", color: "#2450a8", icon: Newspaper }, // blue (dark)
    { name: "Contact", path: "/contact", color: "#66ccc4", icon: Mail }, // green-blue / teal (light)
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
        data-sidenav
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
            // A parent counts as active when any of its children is the current page.
            const isActive = item.children
              ? item.children.some((c) => pathname === c.path)
              : pathname === item.path

            if (item.children) {
              const isOpenMenu = openMenu === item.name
              return (
                <div key={item.name} className="relative group">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpenMenu ? null : item.name)}
                    aria-expanded={isOpenMenu}
                    className="w-full flex items-center gap-4 md:justify-center text-white/60 transition-colors px-3 py-2.5 md:p-0 rounded-md hover:bg-white/5 md:hover:bg-transparent"
                    style={{ color: isActive || isOpenMenu ? item.color : "rgba(255, 255, 255, 0.6)" }}
                  >
                    <span className="shrink-0 flex items-center justify-center">
                      <item.icon size={20} />
                    </span>
                    <span className="text-sm md:hidden flex-1 text-left">{item.name}</span>
                    <ChevronDown
                      size={16}
                      className={`md:hidden transition-transform ${isOpenMenu ? "rotate-180" : ""}`}
                    />
                    {/* Desktop hover label, matching the plain items */}
                    <span
                      className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-50 pointer-events-none"
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </span>
                    {isActive && (
                      <span
                        className="absolute right-2 md:right-0 md:left-full top-1/2 -translate-y-1/2 w-6 h-px hidden md:block"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                    {isActive && (
                      <span
                        className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </button>

                  {isOpenMenu && (
                    <div
                      className="md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-4 md:w-44 md:bg-black/95 md:backdrop-blur-md md:border md:border-white/20 md:rounded-lg md:shadow-xl md:py-2 z-50 mt-1 md:mt-0 pl-10 md:pl-0"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          href={child.path}
                          onClick={() => {
                            setOpenMenu(null)
                            setIsOpen(false)
                          }}
                          className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors"
                          style={{
                            color: pathname === child.path ? item.color : "rgba(255,255,255,0.7)",
                          }}
                        >
                          <child.icon size={16} className="shrink-0" />
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.path!}
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
