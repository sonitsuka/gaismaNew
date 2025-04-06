"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function SideNavigation() {
  const pathname = usePathname()

  // Rainbow colors for navigation
  const navItems = [
    { name: "Home", path: "/", color: "#ff3366" },
    { name: "About", path: "/about", color: "#ff9933" },
    { name: "Music", path: "/music", color: "#ffcc33" },
    { name: "Videos", path: "/videos", color: "#33cc66" },
    { name: "Performance", path: "/performance", color: "#3399ff" },
    { name: "Curation", path: "/curation", color: "#9966ff" },
    { name: "Press", path: "/press", color: "#cc33ff" },
  ]

  return (
    <div className="fixed top-0 left-0 bottom-0 w-16 md:w-20 bg-black/90 backdrop-blur-md z-50 border-r border-white/20 flex flex-col items-center justify-between py-8">
      <div className="flex-grow"></div> {/* Spacer to replace the removed logo */}
      <nav className="flex flex-col items-center space-y-8">
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <Link
              key={item.name}
              href={item.path}
              className="text-white/60 transition-colors relative group"
              style={{
                color: isActive ? item.color : "rgba(255, 255, 255, 0.6)",
              }}
            >
              <span className="text-xs uppercase tracking-wider hidden md:block">{item.name[0]}</span>
              <span className="text-xs uppercase tracking-wider block md:hidden">{item.name[0]}</span>
              <span
                className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block"
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
      <div className="mt-8">
        <a href="mailto:gaisma@posteo.de" className="text-white/60 hover:text-white transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </div>
    </div>
  )
}

