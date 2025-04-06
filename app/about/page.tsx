import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative w-full h-40 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="About background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines - Less visible on mobile */}
          <div className="absolute inset-0 z-20 opacity-10 md:opacity-20">
            <div className="w-full h-px bg-orange-500 absolute top-1/2 md:top-1/3"></div>
            <div className="hidden md:block w-full h-px bg-orange-500 absolute top-2/3"></div>

            <div className="h-full w-px bg-orange-500 absolute left-1/2 md:left-1/3"></div>
            <div className="hidden md:block h-full w-px bg-orange-500 absolute left-2/3"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              About <span className="text-orange-500">Me</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="relative aspect-[3/4] bg-black border border-white/10 overflow-hidden">
              <Image src="aboutMe.jpg" alt="Gaisma profile pic" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            </div>

            <a
              href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
              target="_blank"
              className="absolute bottom-4 left-4 right-4 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] text-center"
              rel="noreferrer"
            >
              View My CV
            </a>
          </div>

          <div className="space-y-6">
            <p className="text-white/80">
              Born in Latvia, Alisa has been involved with music and dance since her childhood. From her first visit to
              the theater, she fell in love with the atmosphere and decided to pursue her dream of becoming a
              professional ballet dancer. At the age of fifteen, she left her family and moved to Germany to study at
              the Munich Ballet Academy. She has since signed contracts with the Bavarian and Stuttgart Ballet and has
              been on international tours with both companies.
            </p>

            <p className="text-white/80">
              After six years of dancing professionally, she made the difficult decision to drastically change her life
              by leaving the classical ballet world in pursuit of other artistic passions. She traveled the globe,
              exploring and learning new ways and techniques to heal the body, mind, and soul, and dove into the world
              of analog music production.
            </p>

            <p className="text-white/80">
              Besides her music work, she is also frequently engaged with projects in the visual arts. These include
              analog and digital photography, behind and in front of the camera; as well as collages and video works,
              which she often puts within the context of music. Symbioses of auditory and visual material emerge, in
              which she presents herself in an increasingly contemporary form of movement. She acts as a composer,
              cinematographer, and performer in her works, which fluctuate between choreography and improvisation.
            </p>

            <blockquote className="border-l-4 border-orange-500 pl-6 py-4 italic text-white/70 my-8 bg-black/30 rounded-r">
              "In times of unpredictability and chaos one thing that we can always be certain of is that the power and
              growth behind our personality lies in our own hands."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

