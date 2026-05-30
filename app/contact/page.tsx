import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="h-[calc(100vh-50px)] w-full bg-black flex items-center justify-center overflow-hidden">

      {/* Desktop: full landscape design */}
      <div
        className="hidden md:block relative"
        style={{
          width: "min(100%, calc((100vh - 50px) * 16 / 9))",
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
          style={{ left: "15%", top: "61%", width: "55%", height: "11%" }}
          aria-label="Email GAISMA"
        />
      </div>

    </div>
  )
}
