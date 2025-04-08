"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { Play, ExternalLink } from "lucide-react"

interface VideoPreviewCardProps {
  title: string
  thumbnail: string
  url: string
  credits: string
  videoId?: string
}

export default function VideoPreviewCard({ title, thumbnail, url, credits, videoId }: VideoPreviewCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Determine if this is a YouTube video and extract the ID
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be")
  const youtubeId = videoId || extractYoutubeId(url)

  // Determine if this is a Vimeo video
  const isVimeo = url.includes("vimeo.com")
  const vimeoId = videoId || (isVimeo ? url.split("/").pop() : null)

  const handleMouseEnter = () => {
    setIsHovering(true)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Add a small delay before playing to avoid flickering on quick mouse movements
    timeoutRef.current = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          // Handle any autoplay restrictions
          console.log("Autoplay prevented:", err)
        })
      }
    }, 300)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-colors"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="relative aspect-video">
          {/* Thumbnail image (shown when not hovering) */}
          {!isHovering && (
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}

          {/* Video preview (shown when hovering) */}
          {isHovering && isYouTube && youtubeId && (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${youtubeId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full border-0"
              title={title}
            />
          )}

          {isHovering && isVimeo && vimeoId && (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&controls=0&loop=1&background=1`}
              allow="autoplay; fullscreen; picture-in-picture"
              className="absolute inset-0 w-full h-full border-0"
              title={title}
            />
          )}

          {/* For other video sources or fallback */}
          {isHovering && !isYouTube && !isVimeo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <p className="text-blue-500">Preview not available</p>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity"></div>

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/70 border border-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 fill-blue-500" />
            </div>
          </div>
        </div>
      </a>

      <div className="p-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="group/title">
          <h3 className="text-base sm:text-lg font-bold mb-2 group-hover/title:text-blue-400 flex items-center">
            {title}
            <ExternalLink className="ml-2 h-4 w-4 text-blue-400 opacity-70" />
          </h3>
        </a>
        <div className="text-xs sm:text-sm text-gray-400 whitespace-pre-line">{credits}</div>
      </div>
    </div>
  )
}

// Helper function to extract YouTube video ID from URL
function extractYoutubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}
