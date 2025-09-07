import Image from "next/image"
import { Play } from "lucide-react"
import PageBackground from "@/components/ui/pageBackground"

export default function VideosPage() {
  return (
    <div className="text-white min-h-screen relative">
      <PageBackground page="videos" />

      <div className="relative w-full h-48 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              <span className="text-green-500">Videos</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-white/70 text-sm md:text-base">
              <a href="#music-video-gaisma" className="hover:text-green-400 underline underline-offset-2">Music Video Gaisma</a>
              <a href="#music-video-sceti" className="hover:text-green-400 underline underline-offset-2">Music Video Sceti</a>
              <a href="#dj-live" className="hover:text-green-400 underline underline-offset-2">DJ & Live</a>
              <a href="#radio-live" className="hover:text-green-400 underline underline-offset-2">Radio Live</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {/* Music Video Gaisma */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
            Music Video <span className="text-green-500">Gaisma</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://www.youtube.com/watch?v=4rBHuXb8-WA" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/4rBHuXb8-WA/0.jpg"
                  alt="White Shirt (prod. by Dexter)"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    White Shirt (prod. by Dexter)
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=Sk9y7KH4ARk" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/Sk9y7KH4ARk/0.jpg"
                  alt="Sunny Side Up"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">Sunny Side Up</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=OkJS3Njo17g" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/OkJS3Njo17g/0.jpg"
                  alt="Catnip"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">Catnip</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=wQ8LyXDO7Y4" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/wQ8LyXDO7Y4/0.jpg"
                  alt="Monarchy"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">Monarchy</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=JbxhDVcAumA" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/JbxhDVcAumA/0.jpg"
                  alt="Organic Muesli"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">Organic Muesli</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=hjc1WrK-4gA" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/hjc1WrK-4gA/0.jpg"
                  alt="Apana"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Apana (Hive Mind)
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Music Video Sceti */}     
        <div className="mb-16" id="music-video-sceti">  
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
            Music Video <span className="text-green-500">Sceti</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="https://www.youtube.com/watch?v=1UKIHVtwK9M" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/1UKIHVtwK9M/0.jpg"
                  alt="Dancing All Alone"
                  width={320}
                  height={180}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Dancing All Alone
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=azjcpwy_Qfw" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/azjcpwy_Qfw/0.jpg"
                  alt="Feel Alive"
                  width={320}
                  height={180}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">Feel Alive</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* DJ & Live */}
        <div className="mb-16" id="dj-live">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
            DJ & <span className="text-green-500">Live</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            

            <a href="https://www.youtube.com/watch?v=uifNs3R7t9U" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/uifNs3R7t9U/0.jpg"
                  alt="TINY WINDOW CONCERTS II - Gaisma"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    TINY WINDOW CONCERTS II - Gaisma
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.youtube.com/watch?v=lJh2z9t7eZc" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/lJh2z9t7eZc/0.jpg"
                  alt="Gaisma aka Tumsi - Bold Decisions"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Bold Decisions - Gaisma aka Tumsi
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>
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
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Stuttgart Rooftop Streams #10
                  </h3>
                  <p className="text-sm text-white/60">Gaisma & Mariano Fernandez (Live-Malerei)</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=aRcXE3MpmSI" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/aRcXE3MpmSI/0.jpg"
                  alt="Synthstrom Festival- Antidote"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Synthstrom Festival- Antidote
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Radio Live */}
        <div className="mb-16" id="radio-live">
         <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
            Radio <span className="text-green-500">Live</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="https://youtu.be/wFM9VDz1308" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/wFM9VDz1308/0.jpg"
                  alt="Klang Parfüm N°1"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Klang Parfüm N°1
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://youtu.be/i5lhwu1Jxv0" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/i5lhwu1Jxv0/0.jpg"
                  alt="Klang Parfüm N°2"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">
                    Klang Parfüm N°2
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
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

