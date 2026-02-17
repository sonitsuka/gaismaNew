"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Play, Pause, Maximize } from "lucide-react"

interface VideoPlayerProps {
  videoSrc: string
}

/** Returns null until measured on client, then true/false */
function useIsMobile(breakpoint = 768): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [breakpoint])
  return isMobile
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [srcLoaded, setSrcLoaded] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const progressContainerRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const isMobile = useIsMobile()

  // ── Event listeners (once) ──────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleContextMenu = (e: Event) => e.preventDefault()
    const handleTimeUpdate = () => {
      if (video.duration) setProgress((video.currentTime / video.duration) * 100)
    }
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("contextmenu", handleContextMenu)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    if ("disablePictureInPicture" in video) video.disablePictureInPicture = true
    video.crossOrigin = "anonymous"

    return () => {
      video.removeEventListener("contextmenu", handleContextMenu)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  // ── Desktop autoplay: load src once we know it's not mobile ─────────
  useEffect(() => {
    if (isMobile === null || isMobile) return // wait / skip on mobile
    const video = videoRef.current
    if (!video || srcLoaded) return

    video.src = videoSrc
    video.muted = true
    video.load()
    video.play().catch(() => {})
    setSrcLoaded(true)
    setIsPlaying(true)
  }, [isMobile, videoSrc, srcLoaded])

  // ── Load + play (called on first tap on mobile, or play btn desktop) ─
  const loadAndPlay = () => {
    const video = videoRef.current
    if (!video) return

    if (!srcLoaded) {
      video.src = videoSrc
      video.muted = true
      video.load()
      setSrcLoaded(true)
    }

    video.play().then(() => setIsPlaying(true)).catch(() => {})
  }

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (!srcLoaded) {
      loadAndPlay()
      return
    }

    if (video.paused) {
      video.play().then(() => setIsPlaying(true))
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const toggleFullscreen = () => {
    const container = videoContainerRef.current
    if (!container) return
    if (!document.fullscreenElement) {
      if (container.requestFullscreen) container.requestFullscreen()
      else if ((container as any).webkitRequestFullscreen) (container as any).webkitRequestFullscreen()
    } else {
      if (document.exitFullscreen) document.exitFullscreen()
      else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen()
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = progressContainerRef.current
    const video = videoRef.current
    if (!container || !video) return
    const rect = container.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    video.currentTime = pos * video.duration
  }

  return (
    <div ref={videoContainerRef} className="relative w-full h-full">
      {/* video element – src is set dynamically, never via <source> */}
      <video
        ref={videoRef}
        preload="none"
        className="w-full h-full object-cover"
        playsInline
        muted
      />

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Mobile tap-to-load overlay – shown until the user taps play */}
      {isMobile && !srcLoaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 cursor-pointer z-20"
          onClick={loadAndPlay}
        >
          <div className="w-16 h-16 rounded-full bg-black/40 border-2 border-fuchsia-500 flex items-center justify-center shadow-[0_0_20px_rgba(219,39,119,0.5)]">
            <Play className="w-8 h-8 text-fuchsia-500 ml-1" />
          </div>
          <p className="text-white/60 text-xs mt-3 tracking-wider uppercase">Tap to play</p>
        </div>
      )}

      {/* Video Controls */}
      <div className="absolute bottom-4 left-4 right-4 z-40">
        {/* Progress Bar */}
        <div
          ref={progressContainerRef}
          onClick={handleProgressClick}
          className="w-full h-2 bg-white/10 rounded-full mb-4 overflow-hidden cursor-pointer backdrop-blur-sm"
        >
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-md border border-fuchsia-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(219,39,119,0.4)] hover:shadow-[0_0_20px_rgba(219,39,119,0.6)] transition-all"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-fuchsia-500" />
            ) : (
              <Play className="w-6 h-6 text-fuchsia-500 ml-1" />
            )}
          </button>

          <div className="flex space-x-3">
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.4)] hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-5 h-5 text-purple-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
