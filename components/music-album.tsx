import Image from "next/image"
import { Music, AirplayIcon as Spotify, ExternalLink } from "lucide-react"

interface Track {
  title: string
  duration: string
}

interface StreamingLinks {
  spotify?: string
  soundcloud?: string
  bandcamp?: string
  apple?: string
}

interface AlbumProps {
  album: {
    id: number
    title: string
    year: string
    cover: string
    streamingLinks: StreamingLinks
    tracks: Track[]
  }
}

export function MusicAlbum({ album }: AlbumProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image src={album.cover || "/placeholder.svg"} alt={album.title} fill className="object-cover" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {album.streamingLinks.spotify && (
            <a
              href={album.streamingLinks.spotify}
              className="flex items-center gap-1 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Spotify size={16} />
              Spotify
            </a>
          )}
          {album.streamingLinks.soundcloud && (
            <a
              href={album.streamingLinks.soundcloud}
              className="flex items-center gap-1 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music size={16} />
              SoundCloud
            </a>
          )}
          {album.streamingLinks.bandcamp && (
            <a
              href={album.streamingLinks.bandcamp}
              className="flex items-center gap-1 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Bandcamp
            </a>
          )}
          {album.streamingLinks.apple && (
            <a
              href={album.streamingLinks.apple}
              className="flex items-center gap-1 text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music size={16} />
              Apple Music
            </a>
          )}
        </div>
      </div>

      <div className="md:col-span-2">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{album.title}</h2>
            <p className="text-gray-400">{album.year}</p>
          </div>
        </div>

        <div className="space-y-2">
          {album.tracks.map((track, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-gray-500 w-6 text-right">{index + 1}</span>
                <span>{track.title}</span>
              </div>
              <span className="text-gray-400">{track.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

