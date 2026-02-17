import Link from "next/link"
import { ExternalLink, ChevronRight } from "lucide-react"
import { pressItems, badgeLabel, badgeColor } from "@/lib/press-data"

export default function PressPage() {
  return (
    <div className="bg-[url('/bg-press.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <div className="relative w-full h-32 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-gray-100">Interviews & Press</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        <div className="space-y-4 md:space-y-6">
          {pressItems.map((item, index) => {
            const badge = (
              <span
                className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border rounded ${badgeColor[item.type]}`}
              >
                {badgeLabel[item.type]}
              </span>
            )

            const inner = (
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div className="flex-1">
                  {/* badge + media name row */}
                  <div className="flex items-center gap-2 mb-1">
                    {badge}
                    {item.media && (
                      <span className="text-xs font-semibold text-fuchsia-300 uppercase tracking-wider">
                        {item.media}
                      </span>
                    )}
                  </div>
                  {/* title row */}
                  <h3 className="text-base sm:text-lg font-medium text-white flex items-center gap-2">
                    {item.title}
                    {item.url ? (
                      <ExternalLink className="h-4 w-4 text-fuchsia-500 opacity-70 shrink-0" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-fuchsia-500 opacity-70 shrink-0" />
                    )}
                  </h3>
                </div>
                <div className="text-sm text-fuchsia-500 whitespace-nowrap sm:pt-6">{item.date}</div>
              </div>
            )

            if (item.slug) {
              return (
                <Link
                  key={index}
                  href={`/press/${item.slug}`}
                  className="block bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-4 sm:p-6 transition-colors border border-gray-800 hover:border-fuchsia-500/30"
                >
                  {inner}
                </Link>
              )
            }

            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-4 sm:p-6 transition-colors border border-gray-800 hover:border-fuchsia-500/30"
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
