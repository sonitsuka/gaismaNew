import Image from "next/image"
import Link from "next/link"
import { Play, Volume2 } from "lucide-react"
import VideoPlayer from "@/components/video-player"

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Video */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Y2K Futuristic Background Elements */}
        {/* Y2K Futuristic Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-fuchsia-900/30 to-purple-900/30"></div>

          {/* Holographic Grid Lines */}
          <div className="absolute inset-0 z-20">
            <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-1/4 animate-pulse"></div>
            <div className="w-full h-px bg-gradient-to-r from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute top-2/4 animate-pulse"></div>
            <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-3/4 animate-pulse"></div>

            <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-1/4 animate-pulse"></div>
            <div className="h-full w-px bg-gradient-to-b from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute left-2/4 animate-pulse"></div>
            <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-3/4 animate-pulse"></div>
          </div>

          {/* Prismatic Light Effects */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-3xl animate-slow-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full blur-3xl animate-slow-pulse delay-1000"></div>

          <video
            id="background-video"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/gaisma-Matze-short.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Video Player (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[9/16] max-h-[90vh]">
            <div className="absolute inset-0 rounded-lg overflow-hidden border border-fuchsia-500/50 shadow-[0_0_25px_rgba(219,39,119,0.4)] bg-black/20 backdrop-blur-sm">
              <VideoPlayer videoSrc="/gaisma-Matze-short.mp4" />
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="hidden md:block absolute top-1/4 left-8 md:left-16 z-30 max-w-md">
          
          <p className="text-lg text-white mb-6 max-w-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands.
          </p>
          <Link
            href="#latestReleases"
            className="inline-block bg-transparent backdrop-blur-sm border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]"
          >
            Explore
          </Link>

        </div>
      </div>

      {/* Content Preview */}
      <div id="latestReleases" className="px-8 md:px-16 py-16 bg-black">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Latest <span className="text-pink-500">Releases</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-transparent"></span>
          </h2>
          <div className="flex flex-wrap gap-4">
          {/* Album: Motherland */}
          <a
            href="https://artists.landr.com/055855682215"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/gaisma_dexterEP.jpg"
                alt="Motherland (prod. by Dexter)"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                  Motherland
                </h3>
                <p className="text-xs text-white/60">2024</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  <Play className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </a>

          {/* Music Video: White Shirt */}
          <a
            href="https://www.youtube.com/watch?v=4rBHuXb8-WA"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-video w-[320px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="https://img.youtube.com/vi/4rBHuXb8-WA/0.jpg"
                alt="White Shirt (prod. by Dexter)"
                width={320}
                height={180}
                className="object-cover h-full w-full transition-all duration-500"
              />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <h3 className="font-bold text-white group-hover:text-green-500 transition-colors text-sm">
          White Shirt (prod. by Dexter)
        </h3>
        <p className="text-xs text-white/60">2023</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <Play className="w-5 h-5 text-green-500 fill-green-500" />
        </div>
      </div>
    </div>
  </a>
</div>


          
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Upcoming <span className="text-blue-500">Shows</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          <div className="grid gap-4">
  <div className="bg-black border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">Sceti at Saäxtasy Festival</h3>
      <p className="text-white/60">Saäxtasy Festival</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-red-500">Jun 14, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">"Seele am Faden"</h3>
      <p className="text-white/60">Kleist Forum</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-orange-500">Jun 21 & 22, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">Tumsi Kessel Festival</h3>
      <p className="text-white/60">Tumsi Kessel Festival</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-yellow-500">Jul 4, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(234,179,8,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">Gaisma Live</h3>
      <p className="text-white/60">Magdeburg Beats&Butter</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-green-500">Jul 5, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(34,197,94,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">DJ Gaisma at WeAre The Future Festival</h3>
      <p className="text-white/60">Waiblingen</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-blue-500">Jul 11, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">"Seele am Faden"</h3>
      <p className="text-white/60">Hamburg</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-indigo-500">Jul 14, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(99,102,241,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">DJ Gaisma Marienplatz Festival</h3>
      <p className="text-white/60">Marienplatz Festival</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-purple-500">Jul 18, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">Levin Goes Lightly</h3>
      <p className="text-white/60">Kubus Museum</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-pink-500">Jul 19, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(236,72,153,0.2)]">
        Tickets
      </button>
    </div>
  </div>

  <div className="bg-black border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
    <div>
      <h3 className="font-bold text-lg text-white">Gaisma Live at Feel Festival</h3>
      <p className="text-white/60">Feel Festival</p>
    </div>
    <div className="mt-4 md:mt-0 flex items-center">
      <div className="text-right mr-6">
        <p className="text-red-500">Jul 25, 2025</p>
        <p className="text-sm text-white/60">TBA</p>
      </div>
      <button className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)]">
        Tickets
      </button>
    </div>
  </div>
</div>
          
         
        </div>

        {/* About Section Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            About <span className="text-orange-500">Gaisma</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[3/4] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/aboutMe.jpg?height=600&width=400"
                alt="Gaisma profile pic"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <Link
                  href="/about"
                  className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] inline-block"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="space-y-4">
            <p className="text-white/80">
            Born in Latvia, Alisa has been immersed in music and dance since childhood. From her very first visit to the theater, she was captivated by its atmosphere and set her sights on becoming a professional ballet dancer.
After six years of dancing professionally, she made the difficult decision to leave the classical ballet world behind in pursuit of broader artistic passions. She began her studies at the Stuttgart Art Academy but ultimately chose to follow her creative path beyond institutional boundaries, guided by the richness of everyday experience.
Alisa has since traveled the world, exploring and learning diverse methods for healing the body, mind, and soul, while delving deeply into the realm of analog music production.
            </p>

            <p className="text-white/80">
            With her main project Gaisma, she has carved out a unique space in rap, hip-hop, and neo-soul—blending raw energy with emotional depth. She has collaborated with influential acts like Chicks On Speed and produced her most recent album alongside renowned German hip-hop producer Dexter. Currently, she plays synth in the wave-pop band Levin Goes Lightly, further expanding her sonic reach.
            </p>

            <p className="text-white/80">
            Beyond Gaisma, Alisa explores multiple musical personas: Sceti channels synthwave, electronica, and disco-infused grooves, while Tumsi leans into a more technoid, experimental, and high-tempo realm. Each project reveals a distinct facet of her ever-evolving artistic identity—consistently bold, curious, and unmistakably her.
            </p>
              <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-white/70">
                "In times of unpredictability and chaos one thing that we can always be certain of is that the power and
                growth behind our personality lies in our own hands."
              </blockquote>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

