"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Volume2, Instagram, Facebook, Youtube, Music } from "lucide-react"

export default function NeonNoirMockup() {
  const [activeSection, setActiveSection] = useState("Home")

  // Rainbow colors for navigation
  const navColors = {
    Home: "#ff3366",
    About: "#ff9933",
    Music: "#ffcc33",
    Videos: "#33cc66",
    Performance: "#3399ff",
    Curation: "#9966ff",
    Press: "#cc33ff",
  }

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Side Navigation */}
      <div className="fixed top-0 left-0 bottom-0 w-16 md:w-20 bg-black/90 backdrop-blur-md z-50 border-r border-white/20 flex flex-col items-center justify-between py-8">
        <div className="flex-grow"></div> {/* Spacer to replace the removed logo */}
        <nav className="flex flex-col items-center space-y-8">
          {Object.keys(navColors).map((item, index) => (
            <a
              key={item}
              href="#"
              className={`text-white/60 hover:text-[${navColors[item as keyof typeof navColors]}] transition-colors relative group`}
              style={{
                color: activeSection === item ? navColors[item as keyof typeof navColors] : "rgba(255, 255, 255, 0.6)",
              }}
              onClick={() => handleNavClick(item)}
            >
              <span className="text-xs uppercase tracking-wider hidden md:block">{item[0]}</span>
              <span className="text-xs uppercase tracking-wider block md:hidden">{item[0]}</span>
              <span
                className="absolute left-full ml-2 px-2 py-1 bg-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block"
                style={{ color: navColors[item as keyof typeof navColors] }}
              >
                {item}
              </span>
              {activeSection === item && (
                <span
                  className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-px"
                  style={{ backgroundColor: navColors[item as keyof typeof navColors] }}
                ></span>
              )}
            </a>
          ))}
        </nav>
        <div className="flex flex-col space-y-4">
          <a
            href="https://www.instagram.com/__gaisma__/"
            target="_blank"
            className="text-white/60 hover:text-pink-500 transition-colors"
            rel="noreferrer"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/gaisma.lovin"
            target="_blank"
            className="text-white/60 hover:text-blue-500 transition-colors"
            rel="noreferrer"
          >
            <Facebook size={18} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4xlthzyUhxk7mI1pCV7W6w"
            target="_blank"
            className="text-white/60 hover:text-red-500 transition-colors"
            rel="noreferrer"
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://soundcloud.com/gaisma"
            target="_blank"
            className="text-white/60 hover:text-orange-500 transition-colors"
            rel="noreferrer"
          >
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
              Art resembles symbiosis of technology and human energy, that unifies in lucid dance.
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Real album data */}
              <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-zCmzohVQkIyQ25zK-ALphPQ-t500x500.jpg"
                  alt="Motherland (prod. by Dexter)"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Neon Border on Hover */}
                <div className="absolute inset-0 border border-pink-500/0 group-hover:border-pink-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-pink-500 transition-colors">Motherland</h3>
                  <p className="text-sm text-white/60">prod. by Dexter</p>
                </div>

                {/* Play Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://artists.landr.com/055855682215"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-pink-500 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-pink-500 fill-pink-500" />
                  </a>
                </div>
              </div>

              <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://i1.sndcdn.com/artworks-higItXLEX9aWs7yN-1vctxw-t500x500.jpg"
                  alt="Löwenzahn {Klang Parfüm}"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-blue-500 transition-colors">Löwenzahn</h3>
                  <p className="text-sm text-white/60">Klang Parfüm</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://soundcloud.com/gaisma/lowenzahn?si=a0b5e4a4ed034af38a0590ba02741f1c"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-blue-500 fill-blue-500" />
                  </a>
                </div>
              </div>

              <div className="group relative aspect-square bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/mirrorsOfCosmic.jpg"
                  alt="Mirrors Of The Cosmic Cinema"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-purple-500 transition-colors">
                    Mirrors Of The Cosmic Cinema
                  </h3>
                  <p className="text-sm text-white/60">Album</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://open.spotify.com/intl-de/album/47S3HkEBEkwxPv6vQup7zB"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-purple-500 fill-purple-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Upcoming <span className="text-blue-500">Performances</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h2>

            <div className="grid gap-4">
              <div className="bg-black border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-bold text-lg text-white">Klang Parfüm Radio Show</h3>
                  <p className="text-white/60">Lobby Radio, Stuttgart</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="text-right mr-6">
                    <p className="text-blue-500">Monthly</p>
                    <p className="text-sm text-white/60">Live Stream</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=wFM9VDz1308&list=PLDUsCsePpYHRQF_h1V3xkId7Q-zH4bx4L&ab_channel=LobbyRadio"
                    target="_blank"
                    className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(59,130,246,0.2)]"
                    rel="noreferrer"
                  >
                    Watch
                  </a>
                </div>
              </div>

              <div className="bg-black border border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-bold text-lg text-white">DJ Set</h3>
                  <p className="text-white/60">Mutant Radio</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="text-right mr-6">
                    <p className="text-pink-500">Archive</p>
                    <p className="text-sm text-white/60">13.12.2022</p>
                  </div>
                  <a
                    href="https://soundcloud.com/mutantradio/gaisma-13122022"
                    target="_blank"
                    className="bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(236,72,153,0.2)]"
                    rel="noreferrer"
                  >
                    Listen
                  </a>
                </div>
              </div>

              <div className="bg-black border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)] transition-all duration-300 p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="font-bold text-lg text-white">Live Performance</h3>
                  <p className="text-white/60">Stuttgart Rooftop Streams</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="text-right mr-6">
                    <p className="text-purple-500">Archive</p>
                    <p className="text-sm text-white/60">With Mariano Fernandez</p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=FyTQhsSNJGY&t=462s"
                    target="_blank"
                    className="bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(147,51,234,0.2)]"
                    rel="noreferrer"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Music Videos Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              Music <span className="text-green-500">Videos</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-green-500 to-transparent"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/4rBHuXb8-WA/0.jpg"
                  alt="White Shirt (prod. by Dexter)"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-green-500 transition-colors">White Shirt</h3>
                  <p className="text-sm text-white/60">prod. by Dexter</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.youtube.com/watch?v=4rBHuXb8-WA"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-green-500 fill-green-500" />
                  </a>
                </div>
              </div>

              <div className="group relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/Sk9y7KH4ARk/0.jpg"
                  alt="Sunny Side Up"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors">Sunny Side Up</h3>
                  <p className="text-sm text-white/60">Music Video</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.youtube.com/watch?v=Sk9y7KH4ARk"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </a>
                </div>
              </div>

              <div className="group relative aspect-video bg-black border border-white/10 overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/OkJS3Njo17g/0.jpg"
                  alt="Catnip"
                  width={640}
                  height={360}
                  className="object-cover h-full w-full grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 border border-orange-500/0 group-hover:border-orange-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] pointer-events-none"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors">Catnip</h3>
                  <p className="text-sm text-white/60">Music Video</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="https://www.youtube.com/watch?v=OkJS3Njo17g"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-black/70 border border-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                    rel="noreferrer"
                  >
                    <Play className="w-6 h-6 text-orange-500 fill-orange-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section Preview */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
              About <span className="text-orange-500">GAISMA</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[3/4] bg-black border border-white/10 overflow-hidden">
                <Image
                  src="/profImg.jpg"
                  alt="GAISMA profile pic"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <a
                    href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
                    target="_blank"
                    className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] inline-block"
                    rel="noreferrer"
                  >
                    View CV
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-white/80">
                  Born in Latvia, Alisa has been involved with music and dance since her childhood. From her first visit
                  to the theater, she fell in love with the atmosphere and decided to pursue her dream of becoming a
                  professional she fell in love with the atmosphere and decided to pursue her dream of becoming a
                  professional ballet dancer. At the age of fifteen, she left her family and moved to Germany to study
                  at the Munich Ballet Academy. She has since signed contracts with the Bavarian and Stuttgart Ballet
                  and has been on international tours with both companies.
                </p>
                <p className="text-white/80">
                  After six years of dancing professionally, she made the difficult decision to drastically change her
                  life by leaving the classical ballet world in pursuit of other artistic passions. She traveled the
                  globe, exploring and learning new ways and techniques to heal the body, mind, and soul, and dove into
                  the world of analog music production.
                </p>
                <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-white/70">
                  "In times of unpredictability and chaos one thing that we can always be certain of is that the power
                  and growth behind our personality lies in our own hands."
                </blockquote>
                <div className="pt-4">
                  <a
                    href="#about"
                    className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

