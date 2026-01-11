import Image from "next/image"
import { Play } from "lucide-react"
import PageBackground from "@/components/ui/pageBackground"
import MusicCard from "@/components/music-card"
import { getMusicSections, urlFor } from "@/lib/sanity"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function MusicPage() {
  // Fetch music sections from Sanity
  const musicSections = await getMusicSections()

  // Format music sections for rendering
  const formattedSections = musicSections.map((section) => ({
    category: section.category,
    name: section.name,
    items: section.items.map((item) => ({
      title: item.title,
      // Use Sanity image if available, otherwise use external URL or local path
      image: item.image
        ? urlFor(item.image).width(500).height(500).url()
        : item.imageUrl || '',
      href: item.href,
      alt: item.alt,
    })),
  }))

  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <PageBackground page="music" />

      {/* Hero section */}
      <div className="relative w-full h-48 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              <span className="text-yellow-500">Music</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-white/70 text-sm md:text-base">
              {formattedSections.map((section) => (
                <a
                  key={section.category}
                  href={`#${section.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-yellow-400 underline underline-offset-2"
                >
                  {section.category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {formattedSections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-white/70">No music content available yet.</p>
            <p className="text-white/50 text-sm mt-2">
              Add music sections in the Sanity Studio.
            </p>
          </div>
        ) : (
          formattedSections.map((section, i) => (
            <div
              key={i}
              id={section.category.toLowerCase().replace(/\s+/g, "-")}
              className="mb-16"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
                <span className="font-[Helvetica,Arial,sans-serif]">{section.name}</span>
                <span className="text-yellow-500 ml-3">{section.category}</span>
                <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent" />
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {section.items.map((item, j) => (
                  <MusicCard key={j} {...item} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
