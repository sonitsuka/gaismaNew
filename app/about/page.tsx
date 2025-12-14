import PageBackground from "@/components/ui/pageBackground"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <div className="md:hidden">
        <PageBackground page="about" />
      </div>

      <div className="hidden md:block absolute inset-0 -z-10">
        <Image
          src="/profImg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top blur-2xl scale-110 opacity-60"
        />

        <div className="absolute inset-y-0 right-0 w-[60vw]">
          <Image
            src="/profImg.jpg"
            alt="GAISMA background"
            fill
            priority
            sizes="60vw"
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/70" />
      </div>

      <div className="relative w-full h-32 sm:h-40 md:h-56 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              <span>Alisa Scetinina</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative md:hidden">
            <div className="relative aspect-[3/4] bg-black/30 backdrop-blur-sm border border-white/10 overflow-hidden">
              <Image
                src="/profImg.jpg"
                alt="GAISMA profile pic"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            </div>

            <a
              href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 right-4 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-4 py-2 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)] text-center"
            >
              View My CV
            </a>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <div className="max-w-2xl lg:max-w-xl text-sm sm:text-base text-white/85 space-y-6 md:pr-10">
              <p>
                Born in Latvia, Alisa has been immersed in music and dance since childhood. From her very first visit to
                the theater, she was captivated by its atmosphere and set her sights on becoming a professional ballet
                dancer. After six years of dancing professionally, she made the difficult decision to leave the classical
                ballet world behind in pursuit of broader artistic passions. She began her studies at the Stuttgart Art
                Academy but ultimately chose to follow her creative path beyond institutional boundaries, guided by the
                richness of everyday experience. Alisa has since traveled the world, exploring and learning diverse
                methods for healing the body, mind, and soul, while delving deeply into the realm of analog music
                production.
              </p>

              <p>
                With her main project GAISMA, she has carved out a unique space in rap, hip-hop, and neo-soul—blending raw
                energy with emotional depth. She has collaborated with influential acts like Chicks On Speed and produced
                her most recent album alongside renowned German hip-hop producer Dexter. Currently, she plays synth in the
                wave-pop band Levin Goes Lightly, further expanding her sonic reach.
              </p>

              <p>
                Beyond GAISMA, Alisa explores multiple musical personas: Sceti channels synthwave, electronica, and
                disco-infused grooves, while Tumsi leans into a more technoid, experimental, and high-tempo realm. Each
                project reveals a distinct facet of her ever-evolving artistic identity—consistently bold, curious, and
                unmistakably her.
              </p>

              <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-white/80">
                "In times of unpredictability and chaos one thing that we can always be certain of is that the power and
                growth behind our personality lies in our own hands."
              </blockquote>

              <div className="hidden md:block pt-4">
                <a
                  href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-5 py-3 text-sm uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                >
                  View My CV
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  )
}
