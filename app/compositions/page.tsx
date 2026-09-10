import PageBackground from "@/components/ui/pageBackground"
import CompositionsByYear, { type Composition } from "@/components/compositions-by-year"

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
        <CompositionsByYear compositions={compositions} />
      </div>
    </div>
  )
}
