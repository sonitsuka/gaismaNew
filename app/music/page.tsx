import Image from "next/image"
import { Play } from "lucide-react"
import PageBackground from "@/components/ui/pageBackground"
import MusicCard from "@/components/music-card"

export default function MusicPage() {
  const musicSections = [
    {
      category: "Album & EP",
      name: "GAISMA",
      items: [
        {
          title: "Verpiss Dich",
          image: "/verpissDich.jpg",
          href: "https://artists.landr.com/057829708549",
          alt: "Verpiss Dich",
        },
        {
          title: "Ca$hback",
          image: "/Cashback.jpeg",
          href: "https://artists.landr.com/057829514119",
          alt: "Ca$hback",
        },
        {
          title: "Motherland",
          image: "/gaisma_dexterEP.jpg",
          href: "https://artists.landr.com/055855682215",
          alt: "Motherland (prod. by Dexter)",
        },
        {
          title: "Mirrors Of The Cosmic Cinema",
          image: "/mirrorsOfCosmic.jpg",
          href: "https://open.spotify.com/intl-de/album/47S3HkEBEkwxPv6vQup7zB",
          alt: "Mirrors Of The Cosmic Cinema",
        },
        {
          title: "Not My Cup Of Tea",
          image: "notMyCupOfTea.jpeg",
          href: "https://open.spotify.com/intl-de/album/0c3Bd93SHLw5vlVhrHN26P",
          alt: "Not My Cup Of Tea",
        },
        {
          title: "Empathy",
          image: "/empathy.jpg",
          href: "https://open.spotify.com/intl-de/album/2bOnhokrEQOnHuvl8H6oZn",
          alt: "Empathy",
        },
        {
          title: "Monarchy",
          image: "/monarchy.jpg",
          href: "https://open.spotify.com/intl-de/album/0ZLCVkecn8E0h0RXuPbgpi",
          alt: "Monarchy",
        },
      ],
    },
    {
      category: "EP",
      name: "Sceti",
      items: [
        {
          title: "Feel Alive",
          image: "/sceti.png",
          href: "https://open.spotify.com/intl-de/artist/7LmgNFt2L76bFO3f27IsC4",
          alt: "Feel Alive",
        },
      ],
    },
    {
      category: "DJ Sets",
      items: [
        {
          title: "Mutant Radio 13.12.2022",
          image: "https://i1.sndcdn.com/artworks-zCmzohVQkIyQ25zK-ALphPQ-t500x500.jpg",
          href: "https://soundcloud.com/mutantradio/gaisma-13122022",
          alt: "Mutant Radio 13.12.2022",
        },
        {
          title: "Umbau/ Stuttgart21/House",
          image: "https://i1.sndcdn.com/artworks-000634171918-fbk03p-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/umbaustuttgart21house?ref=clipboard&p=a&c=1",
          alt: "Umbau/ Stuttgart21/House",
        },
        {
          title: "House Party",
          image: "https://i1.sndcdn.com/artworks-000678411697-sm98iw-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/house-party-2?ref=clipboard&p=a&c=1",
          alt: "House Party",
        },
        {
          title: "Fruit Salad - Brombeere",
          image: "https://i1.sndcdn.com/artworks-000380865012-ucttl1-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/fruit-salad-brombeere?ref=clipboard&p=a&c=1",
          alt: "Fruit Salad - Brombeere",
        },
      ],
    },
    {
      category: "Radio Show",
      items: [
        {
          title: "Viola {Klang Parfüm}",
          image: "https://i1.sndcdn.com/artworks-7GTYzvqqVXi50Nqz-YhW2ag-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/klang-parfum-viola?si=6f9125d763594aa49fd5ed212dcdd003",
          alt: "Viola {Klang Parfüm}",
        },
        {
          title: "Löwenzahn {Klang Parfüm}",
          image: "https://i1.sndcdn.com/artworks-higItXLEX9aWs7yN-1vctxw-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/lowenzahn?si=a0b5e4a4ed034af38a0590ba02741f1c",
          alt: "Löwenzahn {Klang Parfüm}",
        },
        {
          title: "Winter Blues {Klang Parfüm}",
          image: "https://i1.sndcdn.com/artworks-ySt4VSmhirshKoW4-XY4Hkg-t500x500.jpg",
          href: "https://soundcloud.com/gaisma/klang-parfum-winter-blues?si=d992466869854eb2b737741869d0184c",
          alt: "Winter Blues {Klang Parfüm}",
        },
      ],
    },
  ]  
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <PageBackground page="music" />

      {/* Hero section */}
      <div className="relative w-full h-48 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              <span className="text-yellow-500">Music</span>
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-white/70 text-sm md:text-base">
              {musicSections.map((section) => (
                <a
                  key={section.category}
                  href={`#${section.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-yellow-400 underline underline-offset-2"
                >
                  {section.category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        {musicSections.map((section, i) => (
          <div
            key={i}
            id={section.category.toLowerCase().replace(/\s+/g, "-")}
            className="mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block">
              <span className="font-[Helvetica,Arial,sans-serif]">{section.name}</span>              <span className="text-yellow-500 ml-3">{section.category}</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-500 to-transparent" />
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {section.items.map((item, j) => (
                <MusicCard key={j} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

