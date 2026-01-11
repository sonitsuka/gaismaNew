import Image from "next/image"

export default function MediaPage() {
  // Sample data - would come from a CMS in a real implementation
  const pressItems = [
    {
      id: 1,
      title: "GAISMA Pushes Boundaries with New Album",
      publication: "Electronic Sound Magazine",
      date: "November 2023",
      excerpt:
        "The artist's latest release demonstrates a mastery of both sonic and visual elements, creating an immersive experience that transcends traditional music consumption.",
      link: "#",
    },
    {
      id: 2,
      title: "Interview: The Visual World of GAISMA",
      publication: "Resident Advisor",
      date: "September 2023",
      excerpt:
        "We sat down with the artist to discuss the intricate relationship between sound and visuals in their work, and how technology shapes their creative process.",
      link: "#",
    },
    {
      id: 3,
      title: "Festival Highlight: GAISMA's Prismatic Performance",
      publication: "DJ Mag",
      date: "July 2023",
      excerpt:
        "The standout performance of this year's festival combined cutting-edge visuals with pulsating electronic soundscapes.",
      link: "#",
    },
  ]

  const photos = [
    { id: 1, src: "/common/placeholder.svg?height=800&width=1200", alt: "Live performance at Berghain" },
    { id: 2, src: "/common/placeholder.svg?height=800&width=1200", alt: "Studio session" },
    { id: 3, src: "/common/placeholder.svg?height=800&width=1200", alt: "Festival appearance" },
    { id: 4, src: "/common/placeholder.svg?height=800&width=1200", alt: "Album artwork" },
    { id: 5, src: "/common/placeholder.svg?height=800&width=1200", alt: "Behind the scenes" },
    { id: 6, src: "/common/placeholder.svg?height=800&width=1200", alt: "Visual installation" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        Media
      </h1>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-6">Press</h2>
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
          <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={photo.src || "/common/placeholder.svg"}
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
  )
}

