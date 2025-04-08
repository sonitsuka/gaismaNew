"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Music, Video, Film, Palette, Newspaper, Mail } from "lucide-react"

export default function SideNavigation() {
  const pathname = usePathname()

  // Rainbow colors for navigation with appropriate icons
  const navItems = [
    { name: "Home", path: "/", color: "#ff3366", icon: Home },
    { name: "About", path: "/about", color: "#ff9933", icon: User },
    { name: "Music", path: "/music", color: "#ffcc33", icon: Music },
    { name: "Videos", path: "/videos", color: "#33cc66", icon: Video },
    { name: "Performance", path: "/performance", color: "#3399ff", icon: Film }, // Film icon for performance art/dance/cinema
    { name: "Curation", path: "/curation", color: "#9966ff", icon: Palette }, // Palette icon for art/painting
    { name: "Press", path: "/press", color: "#cc33ff", icon: Newspaper },
    { name: "Kontakt", path: "mailto:gaisma@posteo.de", color: "#00cccc", icon: Mail, isExternal: true }, // Email contact
  ]

  return (
    <div className="fixed top-0 left-0 h-[calc(100vh-50px)] w-16 md:w-20 bg-black/90 backdrop-blur-md z-50 border-r border-white/20 flex flex-col py-8">
      <nav className="flex flex-col items-center space-y-8 mt-4">
        {navItems.map((item) => {
          const isActive = !item.isExternal && pathname === item.path

          // For external links like mailto
          if (item.isExternal) {
            return (
              <a
                key={item.name}
                href={item.path}
                className="text-white/60 transition-colors relative group"
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                <span className="text-xs uppercase tracking-wider hidden md:block">
                  {item.icon ? <item.icon size={16} /> : item.name[0]}
                </span>
                <span className="text-xs uppercase tracking-wider block md:hidden">
                  {item.icon ? <item.icon size={16} /> : item.name[0]}
                </span>
                <span
                  className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block z-50"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
              </a>
            )
          }

          // For internal links
          return (
            <Link
              key={item.name}
              href={item.path}
              className="text-white/60 transition-colors relative group"
              style={{
                color: isActive ? item.color : "rgba(255, 255, 255, 0.6)",
              }}
            >
              <span className="text-xs uppercase tracking-wider hidden md:block">
                {item.icon ? <item.icon size={16} /> : item.name[0]}
              </span>
              <span className="text-xs uppercase tracking-wider block md:hidden">
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
  )
}
