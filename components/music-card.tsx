import Image from "next/image"
import { Play } from "lucide-react"

type MusicCardProps = {
  title: string
  image: string
  href: string
  alt: string
}

export default function MusicCard({ title, image, href, alt }: MusicCardProps) {
  return (
    <a href={href} target="_blank" className="group" rel="noreferrer">
      <div className="relative aspect-square bg-black border border-white/10 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className="object-cover h-full w-full transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 border border-yellow-500/0 group-hover:border-yellow-500/100 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-end px-2 pt-1 pb-2 sm:px-4 sm:pb-4 sm:pt-2">
          <h3 className="text-[0.9rem] sm:text-base font-normal sm:font-semibold text-white group-hover:text-yellow-400 transition-colors leading-snug break-normal">
            {title}
          </h3>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-black/70 border border-yellow-500 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.5)]">
            <Play className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      </div>
    </a>
  )
}