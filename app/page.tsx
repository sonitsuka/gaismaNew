import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import VideoHero from "@/components/hero-promo-video";
// import ReleaseHeroTeaser from "@/components/ReleaseHeroTeaser";
import AnnouncementBar from "@/components/AnnouncementBar";
import PastShows from "@/components/pastShows"


// ------------ Latest data ------------
const LATEST_NEWS = [
  // January 2026 – Seele am Faden, SOLD OUT
  {
    date: "10.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },
  {
    date: "13.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },
  {
    date: "18.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },
  {
    date: "19.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },
  {
    date: "24.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },
  {
    date: "30.01.2026",
    title: "Seele am Faden (SOLD OUT)",
    venue: "Schauspielhaus Stuttgart",
    tag: "theatre",
  },

  // February 2026
  {
    date: "28.02.2026",
    title: '"Radiant Nexus" – STJ Fashion Show',
    venue: "Wagenhallen Stuttgart",
    tag: "other",
  },
];



const ALL_SHOWS = [
  // December 2025
  {
    date: "21.12.2025",
    title: "DJ GAISMA – La Fest",
    venue: "Staatsoper Stuttgart",
    tag: "dj",
  },
  {
    date: "18. - 19. 12.2025",
    title: 'Performance “When will we be …?”',
    venue: "Kulturinsel Stuttgart",
    tag: "performance",
  },
  {
    date: "13.12.2025",
    title: "Seele am Faden",
    venue: "Rome, Italy",
    tag: "theatre",
  },
  {
    date: "12.12.2025",
    title: "Seele am Faden",
    venue: "Rome, Italy",
    tag: "theatre",
  },

  // November 2025
  { date: "25.11.2025", title: "DJ GAISMA – La Fest", venue: "Staatsoper Stuttgart", tag: "dj" },
  { date: "22.11.2025", title: "DJ GAISMA – La Fest", venue: "Staatsoper Stuttgart", tag: "dj" },
  {
    date: "20. - 21.11.2025",
    title: 'Theater Performance – "Sinn des Lebens"',
    venue: "Heilbronn",
    tag: "theatre",
  },
  { date: "07.11.2025", title: "Vinyl DJ Set vor Erobique — Wizemann", tag: "dj" },

  // October 2025
  { date: "17.10.2025", title: "Tumsi DJ Vinyl Set — Sunny High Club", tag: "dj" },
  { date: "11.10.2025", title: "GAISMA Live — Das Zentrum Bayreuth", tag: "live" },
  { date: "10.10.2025", title: "GAISMA Live — Stuttpark", tag: "live" },
  { date: "03.10.2025", title: "Levin Goes Lightly — St. Maria Kirche Stuttgart", tag: "other" },

  // July 2025
  { date: "25.07.2025", title: "GAISMA Live — Feel Festival", venue: "Feel Festival", tag: "live" },
  { date: "19.07.2025", title: "Levin Goes Lightly", venue: "Kubus Museum", tag: "other" },
  { date: "18.07.2025", title: "DJ GAISMA — Marienplatz Festival", venue: "Marienplatz Festival", tag: "dj" },
  { date: "14.07.2025", title: "Seele am Faden", venue: "Hamburg", tag: "theatre" },
  { date: "11.07.2025", title: "DJ GAISMA — WeAre The Future Festival", venue: "Waiblingen", tag: "dj" },
  { date: "05.07.2025", title: "GAISMA Live", venue: "Magdeburg Beats & Butter", tag: "live" },
  { date: "04.07.2025", title: "Tumsi Kessel Festival", venue: "Tumsi Kessel Festival", tag: "other" },

  // June 2025
  { date: "22.06.2025", title: "Seele am Faden", venue: "Kleist Forum", tag: "theatre" },
  { date: "21.06.2025", title: "Seele am Faden", venue: "Kleist Forum", tag: "theatre" },
  { date: "14.06.2025", title: "Sceti at Saäxtasy Festival", venue: "Saäxtasy Festival", tag: "other" },
];

export default function Home() {
;

  return (

    <div className="bg-black text-white min-h-screen">
      <AnnouncementBar 
        message="New EP Dumped in Paris"
        releaseDate=""
        preSaveHref="https://artists.landr.com/057829699953"
        showPreSave={true}
      />
      {/* Hero Video */}
      <VideoHero
        backgroundVideoSrc="/gaisma-Matze-short.mp4"
        mainVideoSrc="/gaisma-Matze-short.mp4"
        description="In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands."
        buttonText="Explore"
        buttonLink="#latestReleases"
        showTitleOverlay
      />

      {/* Content Preview */}
      <div id="latestReleases" className="px-8 md:px-16 py-16 bg-black">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            Latest <span className="text-pink-500">Releases</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-pink-500 to-transparent"></span>
          </h2>
          <div className="flex flex-wrap gap-4">
          <a
              href="https://artists.landr.com/057829699953"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/dumpedInParis.webp"
                alt="GAISMA - Album"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                  Dumped in Paris
                </h3>
                <p className="text-xs text-white/60">21.11.2025</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  <Play className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </a>
          <a
              href="https://artists.landr.com/057829708549"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/verpissDich.jpg"
                alt="GAISMA - Verpiss Dich"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                Verpiss Dich
                </h3>
                <p className="text-xs text-white/60">11.2025</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  <Play className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://link.aurale.agency/cash_back"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/cashbackCover.webp"
                alt="GAISMA - Ca$hback"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                GAISMA - Ca$hback
                </h3>
                <p className="text-xs text-white/60">19.09.2025</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  <Play className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
            </div>
          </a>

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
            href="https://www.youtube.com/watch?v=_nLaTRlHUqw"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative bg-black border border-white/10 overflow-hidden">
              <Image
                src="https://img.youtube.com/vi/_nLaTRlHUqw/mqdefault.jpg"
                alt="GAISMA - Ca$hback"
                width={320}
                height={180}
                className="object-cover h-full w-full transition-all duration-500"
              />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 border border-green-500/0 group-hover:border-green-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] pointer-events-none"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-3">
        <h3 className="font-bold text-white group-hover:text-green-500 transition-colors text-sm">
          Ca$hback
        </h3>
        <p className="text-xs text-white/60">2024</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-black/70 border border-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          <Play className="w-5 h-5 text-green-500 fill-green-500" />
        </div>
      </div>
    </div>
  </a>
          <a
            href="https://www.youtube.com/watch?v=4rBHuXb8-WA"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative w-[260px] bg-black border border-white/10 overflow-hidden">
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
        <p className="text-xs text-white/60">2024</p>
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
          <ul className="grid gap-3">
            {LATEST_NEWS.map((n, i) => (
              <li key={i} className="bg-black border border-white/10 hover:border-blue-400/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-start">
                <p className="text-blue-500 text-sm mb-2 sm:mb-0">{n.date}</p>
                <p className="text-white/90 sm:ml-6">{n.title}</p>
              </li>
            ))}
          </ul>
        </div>
        { /* Past Shows Section Preview */}
        <div className="mt-16">
          <PastShows shows={ALL_SHOWS} />
        </div>

        {/* About Section Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-white relative inline-block">
            About <span className="text-orange-500">GAISMA</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-orange-500 to-transparent"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[3/4] max-w-[320px] md:max-w-[400px] bg-black border border-white/10 overflow-hidden mx-auto md:mx-0">
              <Image
                src="/profile-new.jpg"
                alt="GAISMA profile pic"
                fill
                className="object-cover  hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            </div>

            <div className="space-y-4">
            <p className="text-white/80">
            Born in Latvia, Alisa has been immersed in music and dance since childhood. From her very first visit to the theater, she was captivated by its atmosphere and set her sights on becoming a professional ballet dancer.
After six years of dancing professionally, she made the difficult decision to leave the classical ballet world behind in pursuit of broader artistic passions. She began her studies at the Stuttgart Art Academy but ultimately chose to follow her creative path beyond institutional boundaries, guided by the richness of everyday experience.
Alisa has since traveled the world, exploring and learning diverse methods for healing the body, mind, and soul, while delving deeply into the realm of analog music production.
            </p>

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

