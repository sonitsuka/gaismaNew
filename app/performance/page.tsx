import Image from "next/image"
import VideoPreviewCard from "@/components/video-preview-card"
import PageBackground from "@/components/ui/pageBackground"
import { getPerformances, urlFor, getYouTubeThumbnail, isSanityConfigured } from "@/lib/sanity"

export const revalidate = 60

// Fallback data - original hardcoded content
const FALLBACK_PERFORMANCE_VIDEOS = [
  {
    category: "Performance",
    videos: [
      {
        title: "Die Seele am Faden – Tanzperformance mit Friedemann Vogel nach Heinrich von Kleist",
        thumbnail: "https://img.youtube.com/vi/iM1_UlsykWw/0.jpg",
        url: "https://www.youtube.com/watch?v=iM1_UlsykWw",
        videoId: "iM1_UlsykWw",
        credits: `Konzept und Choreografie - Thomas Lempertz und Friedemann Vogel
Kostüme und Raum - Thomas Lempertz
Komposition und Live-Musikerin - Alisa Scetinina (GAISMA)
Digital Artist - Timo Kreitz
Licht - Henry Winter`,
      },
      {
        title: "TUSK _Performance STJ Design Fashion Show Opening - GAISMA",
        thumbnail: "/TUSK _Performance.png",
        url: "https://vimeo.com/938340726",
        credits: `Performance - Alisa Scetinina (GAISMA)
Live Music and Visuals - Issueswithmysleep (Maximilian Luz)
Make up - Tamara Kokalj
Hair - Mladen Durdevic
Curation - Reiner Bock
Camera - Peter Heizmann
Post Production / Colorgrading - Roman Brauch`,
      },
      {
        title: "Emotional Traffic - Alisa Scetinina",
        thumbnail: "https://img.youtube.com/vi/h98Q9zuAS54/0.jpg",
        url: "https://youtu.be/h98Q9zuAS54",
        videoId: "h98Q9zuAS54",
        credits: "Founded by the city of Stuttgart, Pop - Büro and Kunstverein Wagenhalle",
      },
      {
        title: "Intact - Noverre - Young Choreographers Of Stuttgart Ballet 2017",
        thumbnail: "https://img.youtube.com/vi/GIh38PjyJnQ/0.jpg",
        url: "https://youtu.be/GIh38PjyJnQ",
        videoId: "GIh38PjyJnQ",
        credits: `Choreography: Alisa Scetinina
Composer - Alisa Scetinina
Dancers: Shaked Heller & Alisa Scetinina
Light & Costume Concept - Alisa Scetinina`,
      },
    ],
  },
  {
    category: "Art & Film",
    videos: [
      {
        title: "ISRA - Journey Through The Night - Art House Short Film",
        thumbnail: "https://img.youtube.com/vi/h4IpTMWKRxE/0.jpg",
        url: "https://www.youtube.com/watch?v=h4IpTMWKRxE",
        videoId: "h4IpTMWKRxE",
        credits: `Direction/Production Manager - Reiner Bocka
Costume Designer - Stjepan Cuka
Choreography, Performance - Alisa Scetinina
Music - Maximilian Luz and Ellie Fords
Camera - Peter Heizmann, Brian Zajak
Post Production, Color Grading - Roman Brauch`,
      },
      {
        title: "Alisa - filmed by Simon Pfister in Bavarian State Opera",
        thumbnail: "/alisa-perfomance.png",
        url: "https://vimeo.com/216516573",
        videoId: "216516573",
        credits: "Director - Donna Mae Burrows\nCamera - Simon Pfister\nDancer - Alisa Scetinina",
      },
    ],
  },
  {
    category: "Played a Role",
    videos: [
      {
        title: "Yung Obama & NoTypeBeats - GOLD",
        thumbnail: "https://img.youtube.com/vi/FPfuKAegXqo/0.jpg",
        url: "https://www.youtube.com/watch?v=FPfuKAegXqo",
        videoId: "FPfuKAegXqo",
        credits: "Music - Yung Obama & NoTypeBeats\nEsy Studios\nCamera & Postproduction - Rakete Visuals",
      },
      {
        title: "Levin Goes Lightly - Geschichten (official)",
        thumbnail: "https://img.youtube.com/vi/mK-petdPykc/0.jpg",
        url: "https://youtu.be/mK-petdPykc",
        videoId: "mK-petdPykc",
        credits: `Music & Text - Levin Stadler
Directed by Nicolas Ohnesorge
Starring: Alena Hermes, Alisa Scetinina
Color Grading: Harry Delgas`,
      },
      {
        title: "Image -Kampagne 2017",
        thumbnail: "https://img.youtube.com/vi/WGnBRZOx59o/0.jpg",
        url: "https://www.youtube.com/watch?v=WGnBRZOx59o",
        videoId: "WGnBRZOx59o",
        credits: "Commercial for Generali Versicherung Österreich",
      },
    ],
  },
]

export default async function PerformancePage() {
  // Fetch all performances from Sanity
  const allPerformances = await getPerformances()

  // Map category values
  const categoryMapping = {
    'performance': 'Performance',
    'art-film': 'Art & Film',
    'played-role': 'Played a Role',
  }

  // Use Sanity data if available, otherwise use fallback
  let performancesByCategory

  if (allPerformances.length > 0) {
    // Use Sanity data
    const categories = [
      { id: 'performance', title: 'Performance', value: 'performance' },
      { id: 'art-film', title: 'Art & Film', value: 'art-film' },
      { id: 'played-role', title: 'Played a Role', value: 'played-role' },
    ]

    performancesByCategory = categories.map(cat => ({
      category: cat.title,
      categoryId: cat.id,
      videos: allPerformances.filter(p => p.category === cat.value).map(p => {
        const isSanityImage = p.thumbnail && typeof p.thumbnail === 'object' && p.thumbnail.asset

        return {
          title: p.title,
          thumbnail: isSanityImage && isSanityConfigured
            ? urlFor(p.thumbnail).width(640).height(360).url()
            : p.thumbnailUrl || (p.videoId ? getYouTubeThumbnail(p.videoId) : '/placeholder.svg'),
          url: p.url,
          videoId: p.videoId,
          credits: p.credits,
        }
      })
    })).filter(cat => cat.videos.length > 0)
  } else {
    // Use fallback data
    performancesByCategory = FALLBACK_PERFORMANCE_VIDEOS.map(cat => ({
      category: cat.category,
      categoryId: cat.category.toLowerCase().replace(/\s+/g, '-').replace('&', ''),
      videos: cat.videos,
    }))
  }

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
        {performancesByCategory.map((category, categoryIndex) => (
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
        ))}
      </div>
    </div>
  )
}
