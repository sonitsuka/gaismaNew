import Image from "next/image"
import VideoPreviewCard from "@/components/video-preview-card"
import PageBackground from "@/components/ui/pageBackground"
import { getPerformances, urlFor, getYouTubeThumbnail } from "@/lib/sanity"

export const revalidate = 60

export default async function PerformancePage() {
  // Fetch all performances from Sanity
  const allPerformances = await getPerformances()

  // Group performances by category
  const categories = [
    { id: 'performance', title: 'Performance', value: 'performance' },
    { id: 'art-film', title: 'Art & Film', value: 'art-film' },
    { id: 'played-role', title: 'Played a Role', value: 'played-role' },
  ]

  const performancesByCategory = categories.map(cat => ({
    category: cat.title,
    categoryId: cat.id,
    videos: allPerformances.filter(p => p.category === cat.value).map(p => ({
      title: p.title,
      thumbnail: p.thumbnail
        ? urlFor(p.thumbnail).width(640).height(360).url()
        : p.thumbnailUrl || (p.videoId ? getYouTubeThumbnail(p.videoId) : '/placeholder.svg'),
      url: p.url,
      videoId: p.videoId,
      credits: p.credits,
    }))
  })).filter(cat => cat.videos.length > 0)

  return (
    <div className="text-white min-h-screen">
      <PageBackground page="performance" />
      {/* Responsive header - reduced height on mobile */}
      <div className="relative w-full h-40 sm:h-48 md:h-64 overflow-hidden">

        {/* Title - better positioned and sized for mobile */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              <span className="text-blue-500">Performance</span>
            </h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
              {performancesByCategory.map((category) => (
                <a
                  key={category.categoryId}
                  href={`#${category.categoryId}`}
                  className="text-sm sm:text-base text-white/70 hover:text-blue-400 underline underline-offset-2 transition-colors"
                >
                  {category.category}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {performancesByCategory.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/70">No performance content available yet.</p>
            <p className="text-white/50 text-sm mt-2">Add performances in the Sanity Studio.</p>
          </div>
        ) : (
          performancesByCategory.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.categoryId} className="mb-12 md:mb-16 last:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
                <span className="text-blue-500">{category.category}</span>
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {category.videos.map((video, videoIndex) => (
                  <VideoPreviewCard
                    key={videoIndex}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    url={video.url}
                    credits={video.credits}
                    videoId={video.videoId}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
