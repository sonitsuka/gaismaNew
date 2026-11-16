import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import Footer from "@/components/footer"
import VideoLightbox from "@/components/video-lightbox"

const inter = Inter({ subsets: ["latin"] })

const TITLE = "GAISMA | Alisa Scetinina: Music and Performance Art Portfolio"
const DESCRIPTION =
  "GAISMA Music Artist Page: Art resembles symbiosis of technology and human energy, that unifies in lucid dance."

export const metadata: Metadata = {
  // Needed for the share image below to resolve to an absolute URL - the
  // scrapers behind link previews cannot follow a relative path.
  metadataBase: new URL("https://gaisma.space"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "GAISMA",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GAISMA - Alisa Scetinina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
      </body>
    </html>
  )
}