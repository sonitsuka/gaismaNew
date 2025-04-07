"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoPlayerProps {
  videoSrc: string
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressContainerRef = useRef<HTMLDivElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Prevent right-click on videos
    const handleContextMenu = (e: Event) => {
      e.preventDefault()
    }

    // Update progress bar
    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    // Handle video end
    const handleEnded = () => {
      setIsPlaying(false)
    }

    // Add event listeners
    video.addEventListener("contextmenu", handleContextMenu)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    // Disable picture-in-picture
    if ("disablePictureInPicture" in video) {
      video.disablePictureInPicture = true
    }

    // Set crossorigin to anonymous to prevent CORS issues
    video.crossOrigin = "anonymous"

    // Try to autoplay the video
    video.play().catch((error) => {
      console.log("Autoplay prevented:", error)
    })

    // Cleanup
    return () => {
      video.removeEventListener("contextmenu", handleContextMenu)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Play/Pause functionality
  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  // Mute/Unmute functionality
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  // Fullscreen functionality
  const toggleFullscreen = () => {
    const container = videoContainerRef.current
    if (!container) return

    if (!document.fullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen()
      } else if ((container as any).webkitRequestFullscreen) {
        ;(container as any).webkitRequestFullscreen()
      } else if ((container as any).msRequestFullscreen) {
        ;(container as any).msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        ;(document as any).webkitExitFullscreen()
      } else if ((document as any).msExitFullscreen) {
        ;(document as any).msExitFullscreen()
      }
    }
  }

  // Seek functionality
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
      <video ref={videoRef} className="w-full h-full object-cover" playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/holographic-texture.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

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
          ></div>
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
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-cyan-500" /> : <Volume2 className="w-5 h-5 text-cyan-500" />}
            </button>
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

