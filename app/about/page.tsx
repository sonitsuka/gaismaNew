import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      {/* Mesh gradient background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(21, 21, 35, 1) 0%, rgba(10, 10, 20, 1) 90%)',
          filter: 'contrast(1.2) saturate(0.8)'
        }}
      >
        {/* Prismatic blobs - with orange tones for About page */}
        <div 
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
            transform: 'rotate(-30deg)'
          }}
        />
        <div 
          className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(194, 65, 12, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
            transform: 'rotate(15deg)'
          }}
        />
        <div 
          className="absolute -bottom-[20%] left-[30%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(234, 88, 12, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
            transform: 'rotate(45deg)'
          }}
        />
      </div>
      
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="relative w-full h-40 md:h-80 overflow-hidden">

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
            <div className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm border border-white/10 overflow-hidden">
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

            <blockquote className="border-l-4 border-orange-500 pl-6 py-4 italic text-white/70 my-8 bg-black/30 backdrop-blur-sm rounded-r">
              "In times of unpredictability and chaos one thing that we can always be certain of is that the power and
              growth behind our personality lies in our own hands."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}