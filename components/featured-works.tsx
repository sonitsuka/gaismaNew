import Link from "next/link"
import Image from "next/image"

export default function FeaturedWorks() {
  // Sample data - would come from a CMS in a real implementation
  const featuredWorks = [
    {
      id: 1,
      title: "Chromatic Pulse",
      type: "Album",
      image: "/placeholder.svg?height=500&width=500",
      link: "/music",
    },
    {
      id: 2,
      title: "Spectral Shift",
      type: "Performance",
      image: "/placeholder.svg?height=500&width=500",
      link: "/performance",
    },
    {
      id: 3,
      title: "Digital Echoes",
      type: "Video",
      image: "/placeholder.svg?height=500&width=500",
      link: "/videos",
    },
  ]

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Featured Works</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {featuredWorks.map((work) => (
          <Link key={work.id} href={work.link} className="group">
            <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="aspect-square relative">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <div className="text-sm text-purple-400">{work.type}</div>
                    <h3 className="text-xl font-bold">{work.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

