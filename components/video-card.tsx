import Image from "next/image"
import { Play } from "lucide-react"
import Link from "next/link"

interface VideoProps {
  video: {
    id: number
    title: string
    thumbnail: string
    duration: string
    date: string
    description: string
    url: string
  }
}

export function VideoCard({ video }: VideoProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group">
      <div className="aspect-video relative">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-purple-600/80 flex items-center justify-center">
            <Play size={30} fill="white" className="ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">{video.duration}</div>
      </div>

      <div className="p-4">
        <Link href={video.url}>
          <h3 className="font-bold mb-1 line-clamp-1 group-hover:text-purple-400 transition-colors">{video.title}</h3>
        </Link>
        <p className="text-gray-400 text-sm mb-2">{video.date}</p>
        <p className="text-gray-300 text-sm line-clamp-2">{video.description}</p>
      </div>
    </div>
  )
}

