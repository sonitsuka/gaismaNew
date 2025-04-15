import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function PressPage() {
  // Press articles data
  const pressArticles = [
    {
      title: "4 Minuten mit Gaisma",
      date: "November 11, 2024",
      url: "https://www.das-ticket-magazin.de/2024/10/11/4-minuten-mit-gaisma/",
    },
    {
      title: "LIFT STUTTGARTMAGAZIN Playtime mit Gaisma Interview",
      date: "September 28, 2023",
      url: "https://www.lift-online.de/lift-aktuell/playtime-mit-gaisma/",
    },
    {
      title: "Al-Tiba9 Contemporary Art - Alisa Scetinina Performace music body",
      date: "April 12, 2023",
      url: "https://www.altiba9.com/artist-interviews/alisa-scetinina-performace-music-body",
    },
    {
      title: "LKZ - Vor dem Literaturmuseum in Marbach: Ein Klangspielplatz unter Strom",
      date: "September 26, 2022",
      url: "https://www.lkz.de/lokales_artikel,-vor-dem-literaturmuseum-in-marbach-ein-klangspielplatz-unter-strom-_arid,703510.html",
    },
    {
      title: "dmcworld magazine - BACK TO MINE WITH SCETI",
      date: "August 27, 2021",
      url: "http://www.dmcworld.net/back-to-mine/back-to-mine-with-sceti/",
    },
    {
      title:
        "como las grecas - An interview with SCETI: their debut on the Exlove label with a fantastic four-track synthesized disco EP",
      date: "August 2, 2021",
      url: "https://www.comolasgrecas.com/en/an-interview-with-sceti/",
    },
    {
      title: "WOMAN OF MUSIC - ALISA SCETININA",
      date: "May, 2019",
      url: "https://womenofmusic.de/member_reader/alisa-pgeboren-in-lettland-hat-sich-alisa-scetinina-seit-ihrer-kindheit-mit-musik-und-lettischem-tanz-besch%C3%A4ftigt-w%C3%A4hrend-ihres-.html",
    },
  ]

  return (
    <div className="bg-[url('/bg-press.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen">
      <div className="relative w-full h-40 sm:h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0">


          
        </div>

        {/* Title - better positioned and sized for mobile */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              <span className="text-gray-100">Interviews & Press</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-12">
        <div className="space-y-4 md:space-y-6">
          {pressArticles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-4 sm:p-6 transition-colors border border-gray-800 hover:border-pink-500/30"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-white group-hover:text-fuchsia-500 flex items-center">
                    {article.title}
                    <ExternalLink className="ml-2 h-4 w-4 text-fuchsia-500 opacity-70" />
                  </h3>
                </div>
                <div className="text-sm text-fuchsia-500">{article.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}