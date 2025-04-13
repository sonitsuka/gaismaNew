import Image from "next/image"
import { Play } from "lucide-react"

export default function MusicPage() {
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
        {/* Prismatic blobs - with yellow tones for Music page */}
        <div 
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full opacity-[0.07] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(234, 179, 8, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
            transform: 'rotate(-30deg)'
          }}
        />
        <div 
          className="absolute top-[40%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-[0.06] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(161, 98, 7, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
            transform: 'rotate(15deg)'
          }}
        />
        <div 
          className="absolute -bottom-[20%] left-[30%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(202, 138, 4, 0.4) 0%, rgba(13, 13, 35, 0) 70%)',
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
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-yellow-500">Music</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        {/* Gaisma Album & EP */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Gaisma <span className="text-yellow-500">Album & EP</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <a href="https://artists.landr.com/055855682215" target="_blank" className="group" rel="noreferrer">
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/gaisma_dexterEP.jpg"
                  alt="Motherland (prod. by Dexter)"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Motherland</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://open.spotify.com/intl-de/album/47S3HkEBEkwxPv6vQup7zB"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/mirrorsOfCosmic.jpg"
                  alt="Mirrors Of The Cosmic Cinema"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Mirrors Of The Cosmic Cinema
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://open.spotify.com/intl-de/album/0c3Bd93SHLw5vlVhrHN26P"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="notMyCupOfTea.jpeg"
                  alt="Not My Cup Of Tea"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Not My Cup Of Tea
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://open.spotify.com/intl-de/album/2bOnhokrEQOnHuvl8H6oZn"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/empathy.jpg"
                  alt="Empathy"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Empathy</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://open.spotify.com/intl-de/album/0ZLCVkecn8E0h0RXuPbgpi"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/monarchy.jpg"
                  alt="Monarchy"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Monarchy</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Sceti EP */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Sceti <span className="text-yellow-500">EP</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://open.spotify.com/intl-de/artist/7LmgNFt2L76bFO3f27IsC4"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/sceti.png"
                  alt="Feel Alive"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Feel Alive</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* DJ Set */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            DJ <span className="text-yellow-500">Sets</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <a
              href="https://soundcloud.com/mutantradio/gaisma-13122022"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-zCmzohVQkIyQ25zK-ALphPQ-t500x500.jpg"
                  alt="Mutant Radio 13.12.2022"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Mutant Radio 13.12.2022
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://soundcloud.com/gaisma/umbaustuttgart21house?ref=clipboard&p=a&c=1"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-000634171918-fbk03p-t500x500.jpg"
                  alt="Umbau/ Stuttgart21/House"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Umbau/ Stuttgart21/House
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://soundcloud.com/gaisma/house-party-2?ref=clipboard&p=a&c=1"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-000678411697-sm98iw-t500x500.jpg"
                  alt="House Party"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">House Party</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://soundcloud.com/gaisma/fruit-salad-brombeere?ref=clipboard&p=a&c=1"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-000380865012-ucttl1-t500x500.jpg"
                  alt="Fruit Salad - Brombeere"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Fruit Salad - Brombeere
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Radio Show */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Radio <span className="text-yellow-500">Show</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://soundcloud.com/gaisma/klang-parfum-viola?si=6f9125d763594aa49fd5ed212dcdd003"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-7GTYzvqqVXi50Nqz-YhW2ag-t500x500.jpg"
                  alt="Viola {Klang Parfüm}"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Viola &#123;Klang Parfüm&#125;
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://soundcloud.com/gaisma/lowenzahn?si=a0b5e4a4ed034af38a0590ba02741f1c"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-higItXLEX9aWs7yN-1vctxw-t500x500.jpg"
                  alt="Löwenzahn {Klang Parfüm}"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Löwenzahn &#123;Klang Parfüm&#125;
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://soundcloud.com/gaisma/klang-parfum-winter-blues?si=d992466869854eb2b737741869d0184c"
              target="_blank"
              className="group"
              rel="noreferrer"
            >
              <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-ySt4VSmhirshKoW4-XY4Hkg-t500x500.jpg"
                  alt="Winter Blues {Klang Parfüm}"
                  width={300}
                  height={300}
                  className="object-cover h-full w-full transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">
                    Winter Blues &#123;Klang Parfüm&#125;
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
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

