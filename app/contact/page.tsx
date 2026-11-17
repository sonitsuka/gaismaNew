import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GAISMA — Alisa Scetinina — for bookings, collaborations and commissions.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | GAISMA", description: "Get in touch with GAISMA — Alisa Scetinina — for bookings, collaborations and commissions.", url: "/contact" },
}

export default function ContactPage() {
  return (
    <div className="h-[calc(100vh-50px)] w-full bg-black flex items-center justify-center overflow-hidden">
      {/* The address is painted into the artwork, so it is invisible to a search
          engine and to a screen reader. This states it as real text without
          altering the design. */}
      <h1 className="sr-only">Contact GAISMA - Alisa Scetinina</h1>
      <p className="sr-only">
        Email <a href="mailto:gaisma@posteo.de">gaisma@posteo.de</a> for bookings,
        collaborations and commissions.
      </p>

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
          loading="lazy"
        />
        {/* Transparent link over GAISMA@POSTEO.DE */}
        <a
          href="mailto:gaisma@posteo.de"
          className="absolute cursor-pointer"
          style={{ left: "33%", top: "63%", width: "34%", height: "11%" }}
          aria-label="Email GAISMA"
        />
      </div>

      {/* Mobile: full portrait design, no side cropping */}
      <div
        className="md:hidden relative"
        style={{
          width: "min(100%, calc((100vh - 50px) * 1114 / 1920))",
          aspectRatio: "1114 / 1920",
        }}
      >
        <Image
          src="/contact-page-mobile.webp"
          alt="Contact GAISMA"
          fill
          className="object-contain"
          loading="lazy"
        />
        {/* Transparent link over GAISMA@POSTEO.DE on mobile */}
        <a
          href="mailto:gaisma@posteo.de"
          className="absolute cursor-pointer"
          style={{ left: "31%", top: "63%", width: "36%", height: "7%" }}
          aria-label="Email GAISMA"
        />
      </div>

    </div>
  )
}
