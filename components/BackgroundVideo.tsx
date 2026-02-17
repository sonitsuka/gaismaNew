"use client"

import { useState, useEffect, useRef } from "react"

/**
 * Background video that is completely skipped on mobile.
 * - Desktop: autoplay loop, muted, opacity-40 (same as before)
 * - Mobile: renders nothing → zero bytes downloaded
 */
export default function BackgroundVideo({ src }: { src: string }) {
  // null = not yet measured (avoid SSR mismatch)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Once we know it's desktop, set src and play
  useEffect(() => {
    if (isMobile === null || isMobile) return
    const video = videoRef.current
    if (!video) return
    video.src = src
    video.load()
    video.play().catch(() => {})
  }, [isMobile, src])

  // On mobile: render nothing (no video element = no network request)
  if (isMobile === true) return null

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className="w-full h-full object-cover opacity-40"
    />
  )
}
