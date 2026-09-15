import Image from "next/image"

export default function ContactPage() {
  // Fills exactly what's left after layout.tsx's chrome around <main>: the 50px
  // fixed footer, plus main's own pb-16 (64px) and, on mobile only, pt-14 (56px)
  // that clears the fixed menu button. Mobile: 50+64+56=170px. Desktop: 50+64=114px.
  return (
    <div className="h-[calc(100vh-170px)] md:h-[calc(100vh-114px)] w-full bg-black flex items-center justify-center overflow-hidden">

      {/* Desktop: full landscape design */}
      <div
        className="hidden md:block relative"
        style={{
          width: "min(100%, calc((100vh - 114px) * 16 / 9))",
          aspectRatio: "16 / 9",
        }}
      >
        <Image
          src="/contact-page.webp"
          alt="Contact GAISMA"
          fill
          className="object-cover"
          priority
        />
        {/* Transparent link over GAISMA@POSTEO.DE */}
        <a
          href="mailto:gaisma@posteo.de"
          className="absolute cursor-pointer"
          style={{ left: "33%", top: "63%", width: "34%", height: "11%" }}
          aria-label="Email GAISMA"
        />
      </div>

      {/* Mobile: portrait crop — face + all text visible */}
      <div className="md:hidden relative w-full h-full">
        <Image
          src="/contact-page-mobile.webp"
          alt="Contact GAISMA"
          fill
          className="object-cover"
          priority
        />
        {/* Transparent link over GAISMA@POSTEO.DE on mobile */}
        <a
          href="mailto:gaisma@posteo.de"
          className="absolute cursor-pointer"
          style={{ left: "36%", top: "63%", width: "48%", height: "5%" }}
          aria-label="Email GAISMA"
        />
      </div>

    </div>
  )
}
