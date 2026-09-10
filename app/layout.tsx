import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SideNavigation from "@/components/side-navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GAISMA | Alisa Scetinina: Music and Performance Art Portfolio",
  description:
    "GAISMA Music Artist Page: Art resembles symbiosis of technology and human energy, that unifies in lucid dance.",
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
        
        {/* Main Content (top padding on mobile clears the fixed menu button; bottom padding clears the footer) */}
        <main className="ml-4 md:ml-20 pt-14 md:pt-0 pb-16">
          {children}
        </main>
        
        {/* Footer (full width) */}
        <Footer />
      </body>
    </html>
  )
}