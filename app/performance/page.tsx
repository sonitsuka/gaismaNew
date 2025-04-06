import Image from "next/image"
import { Play } from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Performance background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines */}
          <div className="absolute inset-0 z-20 opacity-20">
            <div className="w-full h-px bg-blue-500 absolute top-1/3"></div>
            <div className="w-full h-px bg-blue-500 absolute top-2/3"></div>

            <div className="h-full w-px bg-blue-500 absolute left-1/3"></div>
            <div className="h-full w-px bg-blue-500 absolute left-2/3"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-blue-500">Performance</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {/* Performance Videos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Performance <span className="text-blue-500">Videos</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="https://www.youtube.com/watch?v=FyTQhsSNJGY&t=462s"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/FyTQhsSNJGY/0.jpg"
                  alt="Stuttgart Rooftop Streams #10 - Gaisma & Mariano Fernandez (Live-Malerei)"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-blue-500 transition-colors">
                    Stuttgart Rooftop Streams
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Play className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=uifNs3R7t9U" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/uifNs3R7t9U/0.jpg"
                  alt="TINY WINDOW CONCERTS II - Gaisma"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-blue-500 transition-colors">
                    TINY WINDOW CONCERTS
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Play className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=lJh2z9t7eZc" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/lJh2z9t7eZc/0.jpg"
                  alt="Gaisma aka Tumsi - Bold Decisions"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-blue-500 transition-colors">
                    Bold Decisions
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Play className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=aRcXE3MpmSI" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/aRcXE3MpmSI/0.jpg"
                  alt="Synthstrom Festival- Antidote"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-blue-500 transition-colors">
                    Synthstrom Festival
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Play className="w-5 h-5 text-blue-500 fill-blue-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Art & Film */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Art & <span className="text-purple-500">Film</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.youtube.com/watch?v=hjc1WrK-4gA" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/hjc1WrK-4gA/0.jpg"
                  alt="Apana"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-purple-500 transition-colors">
                    Apana (Hive Mind)
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                    <Play className="w-5 h-5 text-purple-500 fill-purple-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=JbxhDVcAumA" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/JbxhDVcAumA/0.jpg"
                  alt="Organic Muesli"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-purple-500 transition-colors">
                    Organic Muesli
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
                    <Play className="w-5 h-5 text-purple-500 fill-purple-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Played a Role */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Played a <span className="text-pink-500">Role</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="https://www.youtube.com/watch?v=1UKIHVtwK9M" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/1UKIHVtwK9M/0.jpg"
                  alt="Dancing All Alone"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-pink-500 transition-colors">
                    Dancing All Alone
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    <Play className="w-5 h-5 text-pink-500 fill-pink-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=azjcpwy_Qfw" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/azjcpwy_Qfw/0.jpg"
                  alt="Feel Alive"
                  width={400}
                  height={225}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-2">
                  <h3 className="font-bold text-sm text-white group-hover:text-pink-500 transition-colors">
                    Feel Alive
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-black/70 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    <Play className="w-5 h-5 text-pink-500 fill-pink-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

