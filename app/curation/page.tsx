import Image from "next/image"

export default function CurationPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Responsive header - reduced height on mobile */}
      <div className="relative w-full h-32 sm:h-40 md:h-60 lg:h-80 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-black via-black to-black absolute z-10"></div>
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Curation background"
            fill
            className="object-cover opacity-40"
          />

          {/* Neon Grid Lines - Less visible and simplified on mobile */}
          <div className="absolute inset-0 z-20 opacity-10 md:opacity-20">
            <div className="w-full h-px bg-purple-500 absolute top-1/2"></div>
            <div className="hidden sm:block w-full h-px bg-purple-500 absolute top-2/3"></div>
            <div className="h-full w-px bg-purple-500 absolute left-1/2"></div>
            <div className="hidden sm:block h-full w-px bg-purple-500 absolute left-2/3"></div>
          </div>
        </div>

        {/* Title - better positioned and sized for mobile */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-purple-500">Curation</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {/* Exhibition: The Sacrifice Of Your Little Self */}
        <div className="mb-16 md:mb-24">
          {/* Exhibition Header */}
          <div className="relative mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Exhibition</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 leading-tight">
                The Sacrifice Of Your Little Self
              </h3>
            </div>
            <div className="absolute -bottom-3 left-0 w-full md:w-2/3 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          {/* Main Exhibition Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Left Column - Description and Credits */}
            <div className="md:col-span-1 space-y-6">
              <div className="text-sm sm:text-base text-white/80 space-y-4">
                <p>
                  This exhibition aims to explore the concept of ego and our connection to it through various forms of
                  art including painting, ceramics, music and performance.
                </p>
                <p>
                  In a world that is becoming increasingly individualistic and self-centred, the concept of ego becomes
                  more important than ever. "The Sacrifice Of Your Little Self" is a thoughtful exhibition that invites
                  visitors to reflect on their own relationship with ego and its impact on our lives and the world
                  around us.
                </p>
              </div>

              {/* Credits Box */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 md:p-6 backdrop-blur-sm">
                <h4 className="text-base sm:text-lg font-semibold text-purple-300 mb-3">Artists & Bands</h4>
                <div className="space-y-1.5 text-sm sm:text-base">
                  <p>
                    <span className="font-medium">Ivan Zozulya</span> - Painting
                  </p>
                  <p>
                    <span className="font-medium">A-Hyun Cho</span> - Ceramic
                  </p>
                  <p>
                    <span className="font-medium">Eva - Maria Hasler</span> - Performance
                  </p>
                  <p>
                    <span className="font-medium">Alisa Scetinina</span> - Digital Photography
                  </p>
                  <p className="mt-3">
                    Bands: <span className="font-medium">Gránátèze</span>, <span className="font-medium">NaN</span>,{" "}
                    <span className="font-medium">Diva Daneben</span>
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-purple-500/30">
                  <p className="text-sm text-purple-300">Project funded by the city of Stuttgart.</p>
                </div>
              </div>

              {/* Poster */}
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-auto mt-4 md:mt-6 group">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg"></div>
                <Image
                  src="/nectar127_poster.png"
                  alt="Event Poster"
                  width={500}
                  height={700}
                  className="w-full object-contain border border-purple-500/30 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                />
                <p className="text-xs text-gray-400 mt-1">Poster: Ivan Zozulya</p>
              </div>
            </div>

            {/* Right Column - Gallery */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-12 gap-3 md:gap-4">
                {/* Large image */}
                <div className="col-span-12 group relative overflow-hidden rounded-lg">
                  <Image
                    src="/SacrificeOfourLittleSelf.jpg"
                    alt="Main Theme Art"
                    width={800}
                    height={400}
                    className="w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* 2x2 grid of smaller images */}
                <div className="col-span-6 sm:col-span-6 group relative overflow-hidden rounded-lg">
                  <Image
                    src="/simulation.jpg"
                    alt="Simulation Art"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="col-span-6 sm:col-span-6 group relative overflow-hidden rounded-lg">
                  <Image
                    src="/stimulation1-left.jpg"
                    alt="Simulation Left Art"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="col-span-6 sm:col-span-6 group relative overflow-hidden rounded-lg">
                  <Image
                    src="/stimulation1-right.jpg"
                    alt="Simulation Right Art"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="col-span-6 sm:col-span-6 group relative overflow-hidden rounded-lg">
                  <Image
                    src="/simulation2.jpg"
                    alt="Simulation Art 2"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Festival: We Are The Future */}
        <div className="mb-16 md:mb-24">
          {/* Festival Header */}
          <div className="relative mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Festival</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 leading-tight">
                We Are The Future
              </h3>
            </div>
            <div className="absolute -bottom-3 left-0 w-full md:w-2/3 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          {/* Festival Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="text-sm sm:text-base text-white/80 space-y-4">
                <p>
                  Family Festival in the German city of Waiblingen, offering Skate, BMX, Streetboard, Hip - Hop,
                  Graffiti, Parkour, Fashion and Recycling Workshops, as well as Music Shows and Sport contests.
                </p>
              </div>

              <a
                href="https://www.wearethefuture-festival.de"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-purple-900/20 border border-purple-500/30 rounded-lg px-6 py-3 text-purple-300 hover:text-white hover:bg-purple-800/40 transition-colors duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                Visit Festival Website
              </a>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="/weAretheFutureFes_logo.jpg"
                  alt="We Are The Future Festival Logo"
                  width={500}
                  height={500}
                  className="relative w-full max-w-md object-contain rounded-lg border border-purple-500/30"
                />
              </div>
            </div>
          </div>
          
        </div>

        {/* Klang Parfüm Radio Show Section */}
        <div className="mb-16 md:mb-24">
          <div className="relative mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Radio</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 leading-tight">
                Klang Parfüm Radio Show
              </h3>
            </div>
            <div className="absolute -bottom-3 left-0 w-full md:w-2/3 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
  <div className="md:w-1/2 space-y-6">
    <div className="text-sm sm:text-base text-white/80 space-y-4">
      <p>
        A monthly radio show curated by Gaisma, featuring a blend of electronic, ambient, and experimental music from emerging artists.
      </p>
    </div>

    <a
      href="https://www.youtube.com/watch?v=wFM9VDz1308&list=PLDUsCsePpYHRQF_h1V3xkId7Q-zH4bx4L&ab_channel=LobbyRadio"
      target="_blank"
      rel="noreferrer"
      className="inline-block bg-purple-900/20 border border-purple-500/30 rounded-lg px-6 py-3 text-purple-300 hover:text-white hover:bg-purple-800/40 transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
    >
      Listen on YouTube
    </a>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <a
      href="https://www.youtube.com/watch?v=wFM9VDz1308"
      target="_blank"
      rel="noreferrer"
      className="rounded-lg overflow-hidden border border-purple-500/30 shadow-md hover:shadow-lg transition"
    >
      <img
        src="https://img.youtube.com/vi/wFM9VDz1308/hqdefault.jpg"
        alt="Klang Parfüm YouTube Thumbnail"
        className="w-64 h-auto object-cover rounded-lg"
      />
    </a>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}