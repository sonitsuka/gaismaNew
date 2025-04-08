import Image from "next/image"
import VideoPreviewCard from "@/components/video-preview-card"

export default function PerformancePage() {
  // Performance videos data
  const performanceVideos = [
    {
      category: "Performance",
      videos: [
        {
          title: "TUSK _Performance STJ Design Fashion Show Opening - Gaisma",
          thumbnail: "/images/TUSK _Performance.png",
          url: "https://vimeo.com/user50616907",
          credits: `Performance - Alisa Scetinina (Gaisma)
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
          title: "Retaken Heart - Azimuth Art and Dance Ansamble",
          thumbnail: "https://img.youtube.com/vi/UVqem5Be9VI/0.jpg",
          url: "https://youtu.be/UVqem5Be9VI",
          videoId: "UVqem5Be9VI",
          credits: "Director - Gonçalo Cruzinha\nPerformed at Gedok Galerie und Landesmuseum Württemberg",
        },
        {
          title: "Intact - Noverre - Young Choreographers Of Stuttgart Ballet 2017",
          thumbnail: "https://img.youtube.com/vi/GIh38PjyJnQ/0.jpg",
          url: "https://youtu.be/GIh38PjyJnQ",
          videoId: "GIh38PjyJnQ",
          credits:
            "Choreography: Alisa Scetinina\nComposer - Alisa Scetinina\nDancers: Shaked Heller & Alisa Scetinina\nLight & Costume Concept - Alisa Scetinina",
        },
      ],
    },
    {
      category: "Art & Film",
      videos: [
        {
          title: "ISRA - Journey Through The Night - Art House Short Film",
          thumbnail: "/images/ISRA-perfomance.png",
          url: "https://vimeo.com/639004437",
          videoId: "639004437",
          credits:
            "Direction/Production Manager - Reiner Bocka\nCostume Designer - Stjepan Cuka\nChoreography, Performance - Alisa Scetinina\nMusic - Maximilian Luz and Ellie Fords\nCamera - Peter Heizmann, Brian Zajak\nPost Production, Color Grading - Roman Brauch",
        },
        {
          title: "Alisa - filmed by Simon Pfister in Bavarian State Opera",
          thumbnail: "/images/alisa-perfomance.png",
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
          credits:
            "Music & Text - Levin Stadler\nDirected by Nicolas Ohnesorge\nStarring: Alena Hermes, Alisa Scetinina\nColor Grading: Harry Delgas",
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

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Responsive header - reduced height on mobile */}
      <div className="relative w-full h-32 sm:h-40 md:h-60 lg:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Performance background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines - Less visible and simplified on mobile */}
          <div className="absolute inset-0 z-20 opacity-10 md:opacity-20">
            <div className="w-full h-px bg-blue-500 absolute top-1/2"></div>
            <div className="hidden sm:block w-full h-px bg-blue-500 absolute top-2/3"></div>
            <div className="h-full w-px bg-blue-500 absolute left-1/2"></div>
            <div className="hidden sm:block h-full w-px bg-blue-500 absolute left-2/3"></div>
          </div>
        </div>

        {/* Title - better positioned and sized for mobile */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-blue-500">Performance</span>
            </h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-2 sm:mt-4">
              <span className="text-sm sm:text-base text-white/70">Performance</span>
              <span className="text-sm sm:text-base text-white/70">Art & Film</span>
              <span className="text-sm sm:text-base text-white/70">Played a Role</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {performanceVideos.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 md:mb-16 last:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-white relative inline-block">
              <span className="text-blue-500">{category.category}</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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
