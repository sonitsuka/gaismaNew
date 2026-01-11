import Image from "next/image"
import { Play } from "lucide-react"
import PageBackground from "@/components/ui/pageBackground"
import { getVideos, urlFor, getYouTubeThumbnail, isSanityConfigured } from "@/lib/sanity"

export const revalidate = 60

// Fallback data - original hardcoded content (主要なビデオ)
const FALLBACK_VIDEOS = [
  {
    category: 'music-video-gaisma',
    videos: [
      { title: "GAISMA - Ca$hback", url: "https://www.youtube.com/watch?v=_nLaTRlHUqw", videoId: "_nLaTRlHUqw" },
      { title: "White Shirt (prod. by Dexter)", url: "https://www.youtube.com/watch?v=4rBHuXb8-WA", videoId: "4rBHuXb8-WA" },
      { title: "Sunny Side Up", url: "https://www.youtube.com/watch?v=Sk9y7KH4ARk", videoId: "Sk9y7KH4ARk" },
      { title: "Catnip", url: "https://www.youtube.com/watch?v=OkJS3Njo17g", videoId: "OkJS3Njo17g" },
      { title: "Monarchy", url: "https://www.youtube.com/watch?v=wQ8LyXDO7Y4", videoId: "wQ8LyXDO7Y4" },
      { title: "Organic Muesli", url: "https://www.youtube.com/watch?v=JbxhDVcAumA", videoId: "JbxhDVcAumA" },
      { title: "Apana", url: "https://www.youtube.com/watch?v=hjc1WrK-4gA", videoId: "hjc1WrK-4gA" },
      { title: "Dancing All Alone", url: "https://www.youtube.com/watch?v=1UKIHVtwK9M", videoId: "1UKIHVtwK9M" },
    ]
  },
  {
    category: 'music-video-sceti',
    videos: [
      { title: "Feel Alive", url: "https://www.youtube.com/watch?v=azjcpwy_Qfw", videoId: "azjcpwy_Qfw" },
    ]
  },
  {
    category: 'dj-live',
    videos: [
      { title: "TINY WINDOW CONCERTS II - GAISMA", url: "https://www.youtube.com/watch?v=uifNs3R7t9U", videoId: "uifNs3R7t9U" },
      { title: "GAISMA aka Tumsi - Bold Decisions", url: "https://www.youtube.com/watch?v=lJh2z9t7eZc", videoId: "lJh2z9t7eZc" },
      { title: "Stuttgart Rooftop Streams #10 - GAISMA & Mariano Fernandez", url: "https://www.youtube.com/watch?v=FyTQhsSNJGY&t=462s", videoId: "FyTQhsSNJGY" },
      { title: "Synthstrom Festival- Antidote", url: "https://www.youtube.com/watch?v=aRcXE3MpmSI", videoId: "aRcXE3MpmSI" },
    ]
  },
  {
    category: 'radio-live',
    videos: [
      { title: "Klang Parfüm N°1", url: "https://youtu.be/wFM9VDz1308", videoId: "wFM9VDz1308" },
      { title: "Klang Parfüm N°2", url: "https://youtu.be/i5lhwu1Jxv0", videoId: "i5lhwu1Jxv0" },
    ]
  },
]

export default async function VideosPage() {
  // Fetch all videos from Sanity
  const allVideos = await getVideos()

  // Group videos by category
  const categories = [
    { id: 'music-video-gaisma', title: 'Music Video GAISMA', value: 'music-video-gaisma' },
    { id: 'music-video-sceti', title: 'Music Video Sceti', value: 'music-video-sceti' },
    { id: 'dj-live', title: 'DJ & Live', value: 'dj-live' },
    { id: 'radio-live', title: 'Radio Live', value: 'radio-live' },
  ]

  let videosByCategory

  if (allVideos.length > 0) {
    // Use Sanity data
    videosByCategory = categories.map(cat => ({
      ...cat,
      videos: allVideos.filter(v => v.category === cat.value)
    })).filter(cat => cat.videos.length > 0)
  } else {
    // Use fallback data
    videosByCategory = FALLBACK_VIDEOS.map(fallback => {
      const cat = categories.find(c => c.value === fallback.category)
      return {
        ...cat,
        videos: fallback.videos.map(v => ({
          ...v,
          _id: v.videoId,
          category: fallback.category,
          isActive: true,
        }))
      }
    })
  }

  return (
    <div className="text-white min-h-screen relative">
      <PageBackground page="videos" />

      <div className="relative w-full h-48 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              <span className="text-green-500">Videos</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-white/70 text-sm md:text-base">
              {videosByCategory.map((cat) => (
                <a key={cat.id} href={`#${cat.id}`} className="hover:text-green-400 underline underline-offset-2">
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {videosByCategory.map((category) => (
          <div key={category.id} className="mb-16" id={category.id}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
              {category.title.includes('GAISMA') ? (
                <>
                  Music Video <span className="text-green-500">GAISMA</span>
                </>
              ) : category.title.includes('Sceti') ? (
                <>
                  Music Video <span className="text-green-500">Sceti</span>
                </>
              ) : (
                <span className="text-green-500">{category.title}</span>
              )}
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.videos.map((video) => {
                // Determine thumbnail URL
                const isSanityImage = video.thumbnail && typeof video.thumbnail === 'object' && video.thumbnail.asset
                const thumbnailUrl = isSanityImage && isSanityConfigured
                  ? urlFor(video.thumbnail).width(640).height(360).url()
                  : video.videoId
                  ? getYouTubeThumbnail(video.videoId)
                  : '/placeholder.svg'

                return (
                  <a
                    key={video._id}
                    href={video.url}
                    target="_blank"
                    className="group"
                    rel="noreferrer"
                  >
                    <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                      <Image
                        src={thumbnailUrl}
                        alt={video.title}
                        width={640}
                        height={360}
                        className="object-cover h-full w-full transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                      <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                          {video.title}
                        </h3>
                        {video.description && (
                          <p className="text-sm text-white/70 mt-1">{video.description}</p>
                        )}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                          <Play className="w-6 h-6 text-green-500 fill-green-500" />
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
