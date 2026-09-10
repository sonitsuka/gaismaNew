import Image from "next/image"
import PageBackground from "@/components/ui/pageBackground"

export default function ModelingPage() {
  // Placeholder gallery using existing site photos — swap these for your modeling portfolio shots.
  const gallery = [
    { src: "/profile-new.jpg", alt: "GAISMA portrait" },
    { src: "/profImg.jpg", alt: "GAISMA portrait" },
    { src: "/aboutMe.jpg", alt: "GAISMA portrait" },
  ]

  return (
    <div className="text-white min-h-screen">
      <PageBackground page="modeling" />
      <div className="relative w-full h-32 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              <span className="text-white">Modeling</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
              Editorial, runway and campaign work.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] group overflow-hidden rounded-lg border border-white/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-white/40">
          More work — including agency/portfolio credits and campaign details — coming soon.
        </p>
      </div>
    </div>
  )
}
