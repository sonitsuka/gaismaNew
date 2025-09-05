import PageBackground from "@/components/ui/pageBackground"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <PageBackground page="about" />

      <div className="relative w-full h-32 sm:h-40 md:h-56 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About <span className="text-orange-500">Me</span>
          </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm border border-white/10 overflow-hidden">
              <Image src="aboutMe.jpg" alt="Gaisma profile pic" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            </div>

            <a
              href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
              target="_blank"
              className="absolute bottom-4 left-4 right-4 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] text-center"
              rel="noreferrer"
            >
              View My CV
            </a>
          </div>

          <div className="space-y-6">
            <p className="text-white/80">
            Born in Latvia, Alisa has been immersed in music and dance since childhood. From her very first visit to the theater, she was captivated by its atmosphere and set her sights on becoming a professional ballet dancer.
After six years of dancing professionally, she made the difficult decision to leave the classical ballet world behind in pursuit of broader artistic passions. She began her studies at the Stuttgart Art Academy but ultimately chose to follow her creative path beyond institutional boundaries, guided by the richness of everyday experience.
Alisa has since traveled the world, exploring and learning diverse methods for healing the body, mind, and soul, while delving deeply into the realm of analog music production.
            </p>

            <p className="text-white/80">
            With her main project Gaisma, she has carved out a unique space in rap, hip-hop, and neo-soul—blending raw energy with emotional depth. She has collaborated with influential acts like Chicks On Speed and produced her most recent album alongside renowned German hip-hop producer Dexter. Currently, she plays synth in the wave-pop band Levin Goes Lightly, further expanding her sonic reach.
            </p>

            <p className="text-white/80">
            Beyond Gaisma, Alisa explores multiple musical personas: Sceti channels synthwave, electronica, and disco-infused grooves, while Tumsi leans into a more technoid, experimental, and high-tempo realm. Each project reveals a distinct facet of her ever-evolving artistic identity—consistently bold, curious, and unmistakably her.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}