import Image from "next/image"

export default function PressPage() {
  // Sample data - would come from a CMS in a real implementation
  const pressItems = [
    {
      id: 1,
      title: "Gaisma Pushes Boundaries with New Album",
      publication: "Electronic Sound Magazine",
      date: "November 2023",
      excerpt:
        "The artist's latest release demonstrates a mastery of both sonic and visual elements, creating an immersive experience that transcends traditional music consumption.",
      link: "#",
    },
    {
      id: 2,
      title: "Interview: The Visual World of Gaisma",
      publication: "Resident Advisor",
      date: "September 2023",
      excerpt:
        "We sat down with the artist to discuss the intricate relationship between sound and visuals in their work, and how technology shapes their creative process.",
      link: "#",
    },
    {
      id: 3,
      title: "Festival Highlight: Gaisma's Prismatic Performance",
      publication: "DJ Mag",
      date: "July 2023",
      excerpt:
        "The standout performance of this year's festival combined cutting-edge visuals with pulsating electronic soundscapes.",
      link: "#",
    },
  ]

  const photos = [
    { id: 1, src: "/placeholder.svg?height=800&width=1200", alt: "Live performance at Berghain" },
    { id: 2, src: "/placeholder.svg?height=800&width=1200", alt: "Studio session" },
    { id: 3, src: "/placeholder.svg?height=800&width=1200", alt: "Festival appearance" },
    { id: 4, src: "/placeholder.svg?height=800&width=1200", alt: "Album artwork" },
    { id: 5, src: "/placeholder.svg?height=800&width=1200", alt: "Behind the scenes" },
    { id: 6, src: "/placeholder.svg?height=800&width=1200", alt: "Visual installation" },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Press background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines */}
          <div className="absolute inset-0 z-20 opacity-20">
            <div className="w-full h-px bg-purple-500 absolute top-1/3"></div>
            <div className="w-full h-px bg-purple-500 absolute top-2/3"></div>

            <div className="h-full w-px bg-purple-500 absolute left-1/3"></div>
            <div className="h-full w-px bg-purple-500 absolute left-2/3"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-purple-500">Press</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Press <span className="text-purple-500">Coverage</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h2>
            <div className="space-y-8">
              {pressItems.map((item) => (
                <div key={item.id} className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{item.publication}</span>
                    <span>{item.date}</span>
                  </div>
                  <p className="mb-4">{item.excerpt}</p>
                  <a href={item.link} className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                    Read full article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Photo <span className="text-purple-500">Gallery</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo) => (
                <div key={photo.id} className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

