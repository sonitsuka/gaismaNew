import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import Footer from "@/components/footer"
import VideoLightbox from "@/components/video-lightbox"
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  ARTIST_NAME,
  PROFILES,
} from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

/**
 * Tells Google this site belongs to the artist GAISMA, and that the same artist
 * is behind the Spotify, Bandcamp, SoundCloud, YouTube and Instagram profiles.
 * Without this a search engine has only the word "gaisma" to go on, which is an
 * ordinary word in several languages.
 */
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#artist` },
    },
    {
      "@type": "MusicGroup",
      "@id": `${SITE_URL}/#artist`,
      name: SITE_NAME,
      alternateName: ARTIST_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      description: SITE_DESCRIPTION,
      sameAs: PROFILES,
    },
  ],
}

export const metadata: Metadata = {
  // Needed for the share image and the canonical links to resolve to absolute
  // URLs - the scrapers behind link previews cannot follow a relative path.
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Every other page sets its own title and gets " | GAISMA" appended, so no
    // two pages claim to be the same thing in a search result.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  // Proves to Google Search Console that we control this domain. It is meant to
  // be public - it appears in the page source by design - and can be removed
  // once Search Console reports the site as verified, though leaving it costs
  // nothing and avoids losing verification later.
  verification: { google: "ozI8_qSmiuwe-Mc79kjgosqR3RSwRjNFfaGqpVD0QQE" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${ARTIST_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        {/* Side Navigation (ends above the footer) */}
        <SideNavigation />
        
        {/* Main Content (top padding on mobile clears the fixed menu button; bottom padding clears the footer) */}
        <main className="ml-4 md:ml-20 pt-14 md:pt-0 pb-16">
          {children}
        </main>
        
        {/* Footer (full width) */}
        <Footer />

        {/* Plays YouTube links in an overlay instead of navigating away. Costs nothing
            until a link is clicked, and the links still work with JavaScript off. */}
        <VideoLightbox />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </body>
    </html>
  )
}