import Link from "next/link"
import { ExternalLink } from "lucide-react"
import PageBackground from "@/components/ui/pageBackground"
import BandcampEmbed from "@/components/bandcamp-embed"
import CompositionsByYear, { CompositionCard, type Composition } from "@/components/compositions-by-year"

// The two Bandcamp releases this page can show. Each one needs `albumId` — the digits
// after `album=` in the album's "Share / Embed" code on Bandcamp — to show a player.
// While `albumId` is null the section shows a "Listen on Bandcamp" link card instead.
// Set a release to null entirely to hide its section until there's something to put there.
const REEL = {
  title: "Compositions",
  url: "https://gaisma.bandcamp.com/album/compositions",
  albumId: null as string | null,
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
      title: "Die Seele am Faden",
      project: "Dance theatre piece with Friedemann Vogel, after Heinrich von Kleist",
      role: "Composition and Live Music",
      description:
        "Original score composed and performed live for the touring dance-theatre production, staged in Stuttgart, Hamburg and Rome.",
      link: "https://www.youtube.com/watch?v=iM1_UlsykWw",
      year: null, // TODO: add the year this was composed/premiered
      featured: true,
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
              Original music written for other artists' and companies' projects — theatre, dance and film.
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
            and on stages in Rome, Salzburg and many others. If you are making something that needs its own sound, get
            in touch — about using one of these pieces, or about a score written for you.
          </p>
          <div className="mt-6 max-w-2xl space-y-3">
            {/* Same video as the Die Seele am Faden entry on /performance — the milestone
                named in the text above, so people can watch it without hunting for it. */}
            <a
              href="https://www.youtube.com/watch?v=iM1_UlsykWw"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 hover:border-white/40 rounded-lg px-5 py-4 transition-colors duration-300"
            >
              <span className="min-w-0">
                <span className="block text-sm sm:text-base font-semibold text-white">
                  Soul Threads (Die Seele am Faden)
                </span>
                <span className="block mt-1 text-xs uppercase tracking-wider text-white/50">Watch on YouTube</span>
              </span>
              <ExternalLink size={18} className="shrink-0 text-white/50 group-hover:text-white transition-colors" />
            </a>
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

        {/* Pinned above the year timeline — independent of date, so it stays put as new pieces get added */}
        {compositions.some((c) => c.featured) && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white relative inline-block">
              Grateful to Be Part of This
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {compositions
                .filter((c) => c.featured)
                .map((piece) => (
                  <CompositionCard key={piece.title} piece={piece} />
                ))}
            </div>
          </div>
        )}

        <CompositionsByYear compositions={compositions.filter((c) => !c.featured)} />
      </div>
    </div>
  )
}
