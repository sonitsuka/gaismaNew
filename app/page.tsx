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
          <div className="relative w-full max-w-md aspect-[9/16] md:max-w-lg">
            <div className="absolute inset-0 rounded-lg overflow-hidden border border-fuchsia-500/50 shadow-[0_0_25px_rgba(219,39,119,0.4)] bg-black/20 backdrop-blur-sm">
              <VideoPlayer videoSrc="/gaisma-Matze-short.mp4" />
            </div>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute top-1/4 left-8 md:left-16 z-30 max-w-md">
          
          <p className="text-lg text-white mb-6 max-w-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands.
          </p>
          <button className="bg-transparent backdrop-blur-sm border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]">
            Explore
          </button>
        </div>
      </div>

      {/* Content Preview */}
      <div className="px-8 md:px-16 py-16 bg-black">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Latest <span className="text-pink-500">Releases</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholder album data */}
            <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Album1"
                alt="Album 1"
                width={400}
                height={400}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Neon Border on Hover */}
              <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-bold text-white group-hover:text-pink-500 transition-colors">Album Title 1</h3>
                <p className="text-sm text-white/60">2023</p>
              </div>

              {/* Play Button on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 rounded-full bg-black/70 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                  <Play className="w-6 h-6 text-pink-500 fill-pink-500" />
                </button>
              </div>
            </div>

            <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Album2"
                alt="Album 2"
                width={400}
                height={400}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-bold text-white group-hover:text-blue-500 transition-colors">Album Title 2</h3>
                <p className="text-sm text-white/60">2023</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Play className="w-6 h-6 text-blue-500 fill-blue-500" />
                </button>
              </div>
            </div>

            <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Album3"
                alt="Album 3"
                width={400}
                height={400}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

              <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-bold text-white group-hover:text-purple-500 transition-colors">Album Title 3</h3>
                <p className="text-sm text-white/60">2023</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 rounded-full bg-black/70 border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                  <Play className="w-6 h-6 text-purple-500 fill-purple-500" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Upcoming <span className="text-blue-500">Shows</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>
          {/* comment out tmporaly 
          <div className="grid gap-4">
            <div className="bg-black border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-bold text-lg text-white">Performance Title 1</h3>
                <p className="text-white/60">Venue Name, City</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="text-right mr-6">
                  <p className="text-blue-500">Dec 15, 2023</p>
                  <p className="text-sm text-white/60">20:00</p>
                </div>
                <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  Tickets
                </button>
              </div>
            </div>

            <div className="bg-black border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-bold text-lg text-white">Performance Title 2</h3>
                <p className="text-white/60">Venue Name, City</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="text-right mr-6">
                  <p className="text-pink-500">Dec 22, 2023</p>
                  <p className="text-sm text-white/60">21:00</p>
                </div>
                <button className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                  Tickets
                </button>
              </div>
            </div>

            <div className="bg-black border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="font-bold text-lg text-white">Performance Title 3</h3>
                <p className="text-white/60">Venue Name, City</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center">
                <div className="text-right mr-6">
                  <p className="text-purple-500">Jan 5, 2024</p>
                  <p className="text-sm text-white/60">22:00</p>
                </div>
                <button className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)]">
                  Tickets
                </button>
              </div>
            </div>
          </div>
          */}
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
                Born in Latvia, Alisa has been involved with music and dance since her childhood. From her first visit
                to the theater, she fell in love with the atmosphere and decided to pursue her dream of becoming a
                professional ballet dancer.
              </p>
              <p className="text-white/80">
                After six years of dancing professionally, she made the difficult decision to drastically change her
                life by leaving the classical ballet world in pursuit of other artistic passions. She traveled the
                globe, exploring and learning new ways and techniques to heal the body, mind, and soul, and dove into
                the world of analog music production.
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

