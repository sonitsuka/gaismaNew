import Image from "next/image"

export default function CurationPage() {
  // Sample data - would come from a CMS in a real implementation
  const curatedProjects = [
    {
      id: 1,
      title: "Klang Parfüm Radio Show",
      description:
        "A monthly radio show curated by Gaisma, featuring a blend of electronic, ambient, and experimental music from emerging artists.",
      image: "/placeholder.svg?height=600&width=800",
      link: "https://www.youtube.com/watch?v=wFM9VDz1308&list=PLDUsCsePpYHRQF_h1V3xkId7Q-zH4bx4L&ab_channel=LobbyRadio",
      color: "blue",
    },
    {
      id: 2,
      title: "Sonic Landscapes Exhibition",
      description:
        "A collaborative exhibition exploring the intersection of sound and visual art, featuring installations from international artists.",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
      color: "pink",
    },
    {
      id: 3,
      title: "Electronic Visions Festival",
      description:
        "A curated festival showcasing innovative electronic music performances paired with immersive visual experiences.",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
      color: "purple",
    },
  ]

  const playlists = [
    {
      id: 1,
      title: "Ambient Reflections",
      platform: "Spotify",
      description: "A collection of atmospheric ambient tracks that create a space for reflection and introspection.",
      image: "/placeholder.svg?height=400&width=400",
      link: "#",
      color: "green",
    },
    {
      id: 2,
      title: "Electronic Frontiers",
      platform: "SoundCloud",
      description: "Cutting-edge electronic music pushing the boundaries of sound design and composition.",
      image: "/placeholder.svg?height=400&width=400",
      link: "#",
      color: "orange",
    },
    {
      id: 3,
      title: "Rhythmic Journeys",
      platform: "Spotify",
      description: "A journey through diverse rhythmic patterns and percussive elements from around the world.",
      image: "/placeholder.svg?height=400&width=400",
      link: "#",
      color: "yellow",
    },
    {
      id: 4,
      title: "Nocturnal Soundscapes",
      platform: "SoundCloud",
      description: "Deep and immersive electronic music perfect for late-night listening sessions.",
      image: "/placeholder.svg?height=400&width=400",
      link: "#",
      color: "indigo",
    },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Curation background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines */}
          <div className="absolute inset-0 z-20 opacity-20">
            <div className="w-full h-px bg-indigo-500 absolute top-1/3"></div>
            <div className="w-full h-px bg-indigo-500 absolute top-2/3"></div>

            <div className="h-full w-px bg-indigo-500 absolute left-1/3"></div>
            <div className="h-full w-px bg-indigo-500 absolute left-2/3"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-indigo-500">Curation</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Curated <span className="text-indigo-500">Projects</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-indigo-500 to-transparent"></span>
            </h2>

            <div className="space-y-12">
              {curatedProjects.map((project) => (
                <div key={project.id} className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70`}></div>
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-${project.color}-500`}></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-2xl font-bold text-${project.color}-500`}>{project.title}</h3>
                    <p className="text-white/80">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center bg-transparent border border-${project.color}-500 text-${project.color}-500 hover:bg-${project.color}-500/10 px-4 py-2 rounded-sm text-sm uppercase tracking-wider transition-colors`}
                    >
                      Explore Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          
        </div>
      </div>
    </div>
  )
}

