import Link from "next/link"
import PageBackground from "@/components/ui/pageBackground"
import CompositionsByYear, { type Composition } from "@/components/compositions-by-year"

// Swap this for the real Bandcamp "Share / Embed" <iframe> once the album is live.
function BandcampEmbedPlaceholder({ label, height = "120px" }: { label: string; height?: string }) {
  return (
    <div
      style={{ height }}
      className="w-full border border-dashed border-white/25 rounded-lg flex items-center justify-center text-center px-4"
    >
      <p className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">{label}</p>
    </div>
  )
}

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
      year: 2017,
    },
    {
      title: "Die Seele am Faden",
      project: "Dance theatre piece with Friedemann Vogel, after Heinrich von Kleist",
      role: "Composition and Live Music",
      description:
        "Original score composed and performed live for the touring dance-theatre production, staged in Stuttgart, Hamburg and Rome.",
      link: "https://www.youtube.com/watch?v=iM1_UlsykWw",
      year: null, // TODO: add the year this was composed/premiered
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
        {/* Reel — short unreleased excerpts aimed at choreographers/collaborators deciding whether to work with you */}
        <div className="mb-16 md:mb-24 bg-white/5 border border-white/10 rounded-lg p-5 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white relative inline-block">
            For Choreographers & Collaborators
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-white/50 to-transparent" />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl">
            Short, unreleased excerpts — a quick way to hear the range of what I write. Get in touch for full versions
            or a custom piece for your project.
          </p>
          <div className="mt-6">
            <BandcampEmbedPlaceholder label="Bandcamp reel embed goes here" height="120px" />
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
        <div className="mb-12 md:mb-16">
          <BandcampEmbedPlaceholder label="Bandcamp full album embed goes here" height="120px" />
        </div>

        <CompositionsByYear compositions={compositions} />
      </div>
    </div>
  )
}
