import Link from "next/link"
import PageBackground from "@/components/ui/pageBackground"
import BandcampEmbed from "@/components/bandcamp-embed"
import VideoPreviewCard from "@/components/video-preview-card"
import CompositionsByYear, { type Composition } from "@/components/compositions-by-year"

// The two Bandcamp releases this page can show. Each one needs `albumId` — the digits
// after `album=` in the album's "Share / Embed" code on Bandcamp — to show a player.
// While `albumId` is null the section shows a "Listen on Bandcamp" link card instead.
// Set a release to null entirely to hide its section until there's something to put there.
const REEL = {
  title: "Compositions",
  url: "https://gaisma.bandcamp.com/album/compositions",
  albumId: "3749092135" as string | null,
  // Compact player, matching the options picked in Bandcamp's Share / Embed dialog.
  // Flip tracklist to true (and height to 472) to list the pieces inside the player.
  tracklist: false,
  height: 120,
  note: "Excerpts from scores written for theatre, dance and film.",
}

const FULL_ALBUM: { title: string; url: string; albumId: string | null } | null = null

export default function CompositionsPage() {
  // Compositions written for other people's projects (theatre, dance, film, etc).
  // To add a new piece, add an object below with its real year — the page groups
  // and sorts by year automatically, newest first, and the two newest years show
  // by default (older years collapse behind "Show earlier years").
  // Leave year: null only if you genuinely don't know it — those land in a "More" section at the end.
  const compositions: Composition[] = [
    {
      title: "Intact",
      project: "Noverre: Young Choreographers — Schauspielhaus Stuttgart",
      role: "Composition and Choreography",
      description: "Original composition for a duet performed at the Stuttgart Ballet's Noverre choreography showcase.",
      link: "https://youtu.be/GIh38PjyJnQ",
      year: null,
    },
    {
      title: "Emotional Traffic",
      project: "Solo performance piece",
      role: "Composition (with Simon Herody)",
      description: "Score created and performed for an original solo performance piece.",
      link: "https://youtu.be/h98Q9zuAS54",
      year: null, // TODO: add the year this was composed/premiered
    },
  ]

  return (
    <div className="text-white min-h-screen">
      <PageBackground page="compositions" />
      <div className="relative w-full h-32 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              <span className="text-white">Compositions</span>
            </h1>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-white/70">
              Original music written for other artists, theatre pieces, dance and film.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {/* Reel — excerpts for anyone weighing up using the music, or commissioning something new */}
        <div className="mb-16 md:mb-24 bg-white/5 border border-white/10 rounded-lg p-5 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white relative inline-block">
            Music for Your Vision
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent" />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl">
            I have been composing for choreographers, dancers and events since 2017. The biggest milestone so far is
            Soul Threads (Die Seele am Faden), created with Friedemann Vogel and performed at the Hamburger Staatsoper
            and on stages in Rome, Salzburg and many others. If you are making something that needs its own sound, and
            you resonate with my musical language, get in touch.
          </p>
          <div className="mt-6 max-w-2xl space-y-3">
            {/* Same video (and credits) as the Die Seele am Faden entry on /performance — the
                milestone named in the text above, so people can watch it without hunting for it.
                The max-w-md wrapper cancels the card's own mx-auto so it stays left-aligned here. */}
            <div className="max-w-md">
              <VideoPreviewCard
                title="Soul Threads (Die Seele am Faden)"
                thumbnail="https://img.youtube.com/vi/iM1_UlsykWw/0.jpg"
                url="https://www.youtube.com/watch?v=iM1_UlsykWw"
                videoId="iM1_UlsykWw"
                credits={`Concept and Choreography - Thomas Lempertz and Friedemann Vogel
Costumes and Stage Design - Thomas Lempertz
Composition and Live Music - Alisa Scetinina (GAISMA)
Digital Artist - Timo Kreitz
Light - Henry Winter`}
              />
            </div>
            <BandcampEmbed {...REEL} />
          </div>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-transparent border border-white text-white hover:bg-white/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(255,255,255,0.2)] inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Full album — chronological listen-through of released/credited work */}
        {FULL_ALBUM && (
          <div className="mb-12 md:mb-16 max-w-2xl">
            <BandcampEmbed {...FULL_ALBUM} />
          </div>
        )}

        <CompositionsByYear compositions={compositions} />
      </div>
    </div>
  )
}
