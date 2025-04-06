import Link from "next/link"

export default function UpcomingEvents() {
  // Sample data - would come from a CMS in a real implementation
  const events = [
    {
      id: 1,
      title: "Luminous Tour - Berlin",
      venue: "Berghain",
      location: "Berlin, Germany",
      date: "Dec 15, 2023",
      time: "20:00",
    },
    {
      id: 2,
      title: "Luminous Tour - London",
      venue: "Fabric",
      location: "London, UK",
      date: "Dec 22, 2023",
      time: "22:00",
    },
    {
      id: 3,
      title: "Luminous Tour - Amsterdam",
      venue: "De School",
      location: "Amsterdam, Netherlands",
      date: "Jan 5, 2024",
      time: "23:00",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
        <Link href="/performance" className="text-purple-400 hover:text-purple-300 flex items-center">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-900 rounded-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-gray-400">
                {event.venue}, {event.location}
              </p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center">
              <div className="text-right mr-4">
                <p className="text-purple-400">{event.date}</p>
                <p className="text-sm text-gray-400">{event.time}</p>
              </div>
              <Link
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition-colors"
              >
                Tickets
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

