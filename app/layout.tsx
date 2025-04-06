import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gaisma | Alisa Scetinina: Music and Performance Art Portfolio",
  description:
    "Gaisma Music Artist Page: Art resembles symbiosis of technology and human energy, that unifies in lucid dance.",
  generator: 'v0.dev'
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
        
        {/* Main Content (with padding at the bottom for the footer) */}
        <main className="ml-16 md:ml-20 pb-16">
          {children}
        </main>
        
        {/* Footer (full width) */}
        <Footer />
      </body>
    </html>
  )
}