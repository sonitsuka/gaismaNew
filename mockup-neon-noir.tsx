import Image from "next/image"
import { Play, Volume2, Instagram, Facebook, Youtube, Music } from "lucide-react"

export default function NeonNoirMockup() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Side Navigation */}
      <div className="fixed top-0 left-0 bottom-0 w-16 md:w-20 bg-black/90 backdrop-blur-md z-50 border-r border-pink-500/20 flex flex-col items-center justify-between py-8">
        <div className="text-2xl font-bold text-pink-500 transform -rotate-90 whitespace-nowrap origin-center">
          GAISMA
        </div>

        <nav className="flex flex-col items-center space-y-8">
          {["Home", "About", "Music", "Videos", "Performance", "Curation", "Press"].map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-white/60 hover:text-pink-500 transition-colors relative group ${index === 0 ? "text-pink-500" : ""}`}
            >
              <span className="text-xs uppercase tracking-wider hidden md:block">{item[0]}</span>
              <span className="text-xs uppercase tracking-wider block md:hidden">{item[0]}</span>
              <span className="absolute left-full ml-2 px-2 py-1 bg-black text-pink-500 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                {item}
              </span>
              {index === 0 && (
                <span className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-px bg-pink-500"></span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex flex-col space-y-4">
          <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
            <Facebook size={18} />
          </a>
          <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
            <Youtube size={18} />
          </a>
          <a href="#" className="text-white/60 hover:text-pink-500 transition-colors">
            <Music size={18} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16 md:ml-20 flex-grow">
        {/* Hero Video */}
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Hero background"
              fill
              className="object-cover opacity-40"
            />

            {/* Neon Grid Lines */}
            <div className="absolute inset-0 z-20 opacity-20">
              <div className="w-full h-px bg-pink-500 absolute top-1/4"></div>
              <div className="w-full h-px bg-blue-500 absolute top-2/4"></div>
              <div className="w-full h-px bg-pink-500 absolute top-3/4"></div>

              <div className="h-full w-px bg-blue-500 absolute left-1/4"></div>
              <div className="h-full w-px bg-pink-500 absolute left-2/4"></div>
              <div className="h-full w-px bg-blue-500 absolute left-3/4"></div>
            </div>
          </div>

          {/* Video Player (Centered) */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="relative w-full max-w-md aspect-[9/16] md:max-w-lg">
              <div className="absolute inset-0 bg-black rounded-lg overflow-hidden border border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                <Image
                  src="/placeholder.svg?height=1920&width=1080"
                  alt="Video thumbnail"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-4 overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="w-12 h-12 rounded-full bg-black/50 border border-pink-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                    <Play className="w-6 h-6 text-pink-500 fill-pink-500" />
                  </button>

                  <div className="flex space-x-3">
                    <button className="w-10 h-10 rounded-full bg-black/50 border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <Volume2 className="w-5 h-5 text-blue-500" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-black/50 border border-blue-500/50 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute top-1/4 left-8 md:left-16 z-30 max-w-md">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              <span className="text-pink-500">GAISMA</span>
            </h1>
            <p className="text-lg text-white/70 mb-6 max-w-sm">
              Exploring the boundaries between sound, visuals, and performance art
            </p>
            <button className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10 px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(236,72,153,0.3)]">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Album${i + 1}`}
                    alt={`Album ${i + 1}`}
                    width={400}
                    height={400}
                    className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Neon Border on Hover */}
                  <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] pointer-events-none"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="font-bold text-white group-hover:text-pink-500 transition-colors">
                      Album Title {i + 1}
                    </h3>
                    <p className="text-sm text-white/60">2023</p>
                  </div>

                  {/* Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-12 h-12 rounded-full bg-black/70 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                      <Play className="w-6 h-6 text-pink-500 fill-pink-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Upcoming <span className="text-blue-500">Performances</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h2>

            <div className="grid gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-black border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                  <div>
                    <h3 className="font-bold text-lg text-white">Performance Title {i + 1}</h3>
                    <p className="text-white/60">Venue Name, City</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <div className="text-right mr-6">
                      <p className="text-blue-500">Dec {15 + i * 7}, 2023</p>
                      <p className="text-sm text-white/60">20:00</p>
                    </div>
                    <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                      Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

