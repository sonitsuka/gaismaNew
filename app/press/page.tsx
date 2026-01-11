import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { getPressArticles } from "@/lib/sanity"

export const revalidate = 60

export default async function PressPage() {
  // Fetch press articles from Sanity
  const articles = await getPressArticles()

  // Format articles for display
  const pressArticles = articles.map((article) => ({
    title: article.title,
    date: article.dateText || new Date(article.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    url: article.url,
  }))

  return (
    <div className="bg-[url('/bg-press.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <div className="relative w-full h-32 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0">



        </div>

        {/* Title - better positioned and sized for mobile */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-gray-100">Interviews & Press</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {pressArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/70">No press articles available yet.</p>
            <p className="text-white/50 text-sm mt-2">Add press articles in the Sanity Studio.</p>
          </div>
        ) : (
          <div className="space-y-4 md:space-y-6">
            {pressArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-4 sm:p-6 transition-colors border border-gray-800 hover:border-fuchsia-500/30"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-fuchsia-500 flex items-center">
                      {article.title}
                      <ExternalLink className="ml-2 h-4 w-4 text-fuchsia-500 opacity-70" />
                    </h3>
                  </div>
                  <div className="text-sm text-fuchsia-500">{article.date}</div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
