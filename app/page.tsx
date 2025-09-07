import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import VideoHero from "@/components/hero-promo-video";
import ReleaseHeroTeaser from "@/components/ReleaseHeroTeaser";
import AnnouncementBar from "@/components/AnnouncementBar";


// ------------ Latest data ------------
const LATEST_NEWS = [
{ date: "27.09.2025", title: "Gaisma Vinyl DJ Set — 40. Jahre Werkstatthaus", tag: "dj" },
{ date: "03.10.2025", title: "Levin Goes Lightly — St. Maria Kirche Stuttgart", tag: "other" },
{ date: "10.10.2025", title: "Gaisma Live — Stuttpark", tag: "live" },
{ date: "11.10.2025", title: "Gaisma Live — Das Zentrum Bayreuth", tag: "live" },
{ date: "17.10.2025", title: "Tumsi DJ Vinyl Set — Sunny High Club", tag: "dj" },
{ date: "07.11.2025", title: "Vinyl DJ Set vor Erobique — Wizemann", tag: "dj" },
];


// Example: move your hard-coded shows here. Add older shows; they will auto-sort into Past.
const ALL_SHOWS = [
// Keep any existing or future shows here (date can be dd.mm or dd.mm.yyyy)
{ date: "14.06.2025", title: "Sceti at Saäxtasy Festival", venue: "Saäxtasy Festival", tag: "other" },
{ date: "21.06.2025", title: "Seele am Faden", venue: "Kleist Forum", tag: "theatre" },
{ date: "22.06.2025", title: "Seele am Faden", venue: "Kleist Forum", tag: "theatre" },
{ date: "04.07.2025", title: "Tumsi Kessel Festival", venue: "Tumsi Kessel Festival", tag: "other" },
{ date: "05.07.2025", title: "Gaisma Live", venue: "Magdeburg Beats & Butter", tag: "live" },
{ date: "11.07.2025", title: "DJ Gaisma — WeAre The Future Festival", venue: "Waiblingen", tag: "dj" },
{ date: "14.07.2025", title: "Seele am Faden", venue: "Hamburg", tag: "theatre" },
{ date: "18.07.2025", title: "DJ Gaisma — Marienplatz Festival", venue: "Marienplatz Festival", tag: "dj" },
{ date: "19.07.2025", title: "Levin Goes Lightly", venue: "Kubus Museum", tag: "other" },
{ date: "25.07.2025", title: "Gaisma Live — Feel Festival", venue: "Feel Festival", tag: "live" },
];

export default function Home() {
;

  return (

    <div className="bg-black text-white min-h-screen">
      <AnnouncementBar 
        message="New single Ca$hback drops"
        releaseDate="19 Sept 2025"
        preSaveHref="https://artists.landr.com/057829514119"
        showPreSave={true}
      />
      {/* Hero Video */}
      <ReleaseHeroTeaser
        releaseTitle="Gaisma Ca$hback"
        releaseDateISO="2025-09-19T00:00:00+02:00"
        coverSrc="/cashbackCover.webp"              // replace with your attached cover if different
        preSaveHref="https://artists.landr.com/057829514119"
        listenHref="https://www.youtube.com/@gaisma_/featured"                         // "full" | "tall" | "comfortable"
        focal="object-[center_20%]"             // tweak to keep face centered on mobile crops
        tickerItems={LATEST_NEWS}               // scrolling upcoming
        scrollToId="latestReleases"
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
            href="https://artists.landr.com/057829514119"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/dumpedInParis.webp"
                alt="Gaisma - Album"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                
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
            href="https://artists.landr.com/057829514119"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
              <Image
                src="/cashbackCover.webp"
                alt="Gaisma - Ca$hback"
                width={200}
                height={200}
                className="object-cover h-full w-full transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-bold text-white group-hover:text-yellow-500 transition-colors text-sm">
                Gaisma - Ca$hback
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
            href="https://www.youtube.com/watch?v=4rBHuXb8-WA"
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <div className="relative aspect-square w-[200px] bg-black border border-white/10 overflow-hidden">
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

