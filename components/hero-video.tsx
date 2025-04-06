"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle video playback
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle video mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Auto-play video when component mounts
  useEffect(() => {
    const video = videoRef.current

    if (video) {
      video.addEventListener("loadeddata", () => {
        setIsLoaded(true)
        // Auto-play is often blocked by browsers, so we don't set isPlaying here
      })

      return () => {
        video.removeEventListener("loadeddata", () => setIsLoaded(true))
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* Video container with responsive handling */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* This approach handles portrait video in a responsive way */}
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover md:object-contain"
          loop
          muted={isMuted}
          playsInline
          poster="/placeholder.svg?height=1920&width=1080"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none"></div>

      {/* Video controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <button
            onClick={togglePlay}
            className="text-white hover:text-purple-400 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          <button
            onClick={toggleMute}
            className="text-white hover:text-purple-400 transition-colors"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white opacity-70"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  )
}

