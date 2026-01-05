import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/profile-new.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top scale-110 opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <h1 className="text-3xl md:text-6xl font-bold mb-10">
          Alisa Scetinina
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/profile-new.jpg"
                alt="Alisa Scetinina portrait"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="max-w-xl text-sm sm:text-base text-white/85 space-y-6">
            <p>
              Born in Latvia, Alisa has been immersed in music and dance since childhood.
              From her very first visit to the theater, she was captivated by its atmosphere
              and set her sights on becoming a professional ballet dancer. After six years of
              dancing professionally, she made the difficult decision to leave the classical
              ballet world behind in pursuit of broader artistic passions.
            </p>

            <p>
              She began her studies at the Stuttgart Art Academy but ultimately chose to follow
              her creative path beyond institutional boundaries, guided by the richness of
              everyday experience. Alisa has since traveled the world, exploring and learning
              diverse methods for healing the body, mind, and soul, while delving deeply into
              the realm of analog music production.
            </p>

            <p>
              With her main project GAISMA, she has carved out a unique space in rap, hip-hop,
              and neo-soul—blending raw energy with emotional depth. She has collaborated with
              influential acts like Chicks On Speed and produced her most recent album alongside
              renowned German hip-hop producer Dexter.
            </p>

            <p>
              Beyond GAISMA, Alisa explores multiple musical personas: Sceti channels synthwave,
              electronica, and disco-infused grooves, while Tumsi leans into a more technoid,
              experimental, and high-tempo realm.
            </p>

            <blockquote className="border-l-4 border-orange-500 pl-4 py-2 italic text-white/80">
              "In times of unpredictability and chaos one thing that we can always be certain of
              is that the power and growth behind our personality lies in our own hands."
            </blockquote>

            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1kIYDlgAiEeDAK7c9NgAUKdYbKuUD8Ire/view"
                target="_blank"
                rel="noreferrer"
                className="inline-block border border-orange-500 text-orange-500 hover:bg-orange-500/10 px-5 py-3 text-sm uppercase tracking-wider transition-colors"
              >
                View My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
