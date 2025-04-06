import Image from "next/image"
import { Play, Volume2, Instagram, Facebook, Youtube, Music } from "lucide-react"

export default function VibrantMosaicMockup() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              GAISMA
            </div>

            <nav className="hidden md:flex space-x-6">
              {["Home", "About", "Music", "Videos", "Performance", "Curation", "Press"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </nav>

            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Video */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 absolute z-10"></div>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="Hero background" fill className="object-cover" />
        </div>

        {/* Video Player (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="relative w-full max-w-md aspect-[9/16] md:max-w-lg">
            <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=1920&width=1080"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Play className="w-6 h-6 text-white fill-white" />
              </button>

              <div className="flex space-x-3">
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
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

        {/* Mosaic Grid Preview (Bottom of Hero) */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black/30 backdrop-blur-sm z-20">
          <div className="container mx-auto h-full">
            <div className="flex h-full overflow-x-auto gap-2 py-2 px-4 scrollbar-hide">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-full aspect-square flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${i + 1}`}
                    alt={`Preview ${i + 1}`}
                    width={200}
                    height={200}
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Latest Releases
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Album${i + 1}`}
                  alt={`Album ${i + 1}`}
                  width={400}
                  height={400}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white">Album Title {i + 1}</h3>
                  <p className="text-sm text-white/80">2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Upcoming Performances
          </h2>

          <div className="grid gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="font-bold text-lg">Performance Title {i + 1}</h3>
                  <p className="text-white/70">Venue Name, City</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="text-right mr-6">
                    <p className="text-blue-400">Dec {15 + i * 7}, 2023</p>
                    <p className="text-sm text-white/70">20:00</p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    Tickets
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                GAISMA
              </div>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Music size={20} />
              </a>
            </div>

            <div className="text-sm text-white/50">© 2023 Gaisma. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

