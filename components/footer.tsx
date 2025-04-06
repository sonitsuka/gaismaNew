import Image from "next/image"

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-black/90 backdrop-blur-md border-t border-white/10 fixed bottom-0 left-0 w-full h-[50px]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Social Icons */}
          <div className="social flex flex-wrap items-center gap-2">
            <a href="mailto:gaisma@posteo.de" className="text-gray-300 hover:text-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/__gaisma__/"
              target="_blank"
              rel="noreferrer"
              className="text-pink-500 hover:text-pink-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/gaisma.lovin"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://soundcloud.com/gaisma"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 hover:text-orange-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 17.5H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z"></path>
                <path d="M2 13.5v-3a6 6 0 0 1 6-6 6 6 0 0 1 6 6v3"></path>
                <path d="M14 10.5v3"></path>
                <path d="M18 13.5v-3a10 10 0 0 0-10-10 10 10 0 0 0-2 19.5"></path>
                <path d="M22 13.5v-3a14 14 0 0 0-14-14"></path>
              </svg>
            </a>
            <a
              href="https://open.spotify.com/artist/01EmU1Segbe63mUG2eyJ58"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 16.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1.5-.86l6 3.5a1 1 0 0 1 0 1.72l-6 3.5a1 1 0 0 1-.5.14Z"></path>
              </svg>
            </a>
            <a
              href="https://gaisma.bandcamp.com/music"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18.5A6.5 6.5 0 0 1 12.5 12a6.5 6.5 0 0 1 6.5 6.5a6.5 6.5 0 0 1-13 0Z"></path>
                <path d="M12.5 12a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13Z"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UC4xlthzyUhxk7mI1pCV7W6w"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 hover:text-red-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>

          {/* School Logo and Copyright */}
          <div className="flex items-center gap-2">
            <p className="text-white/60 text-xs hidden md:block">Gaisma &copy; 2023</p>
            <span className="text-white/40 mx-1 hidden md:block">|</span>
            <div className="flex items-center gap-1">
              <p className="text-white/60 text-xs">Member of</p>
              <a
                href="https://www.produktionszentrum.de/mitglieder-portraets/alisa-scetinina/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/pz_tanz_logo.jpg"
                  alt="pz tanz logo"
                  width={70}
                  height={25}
                  className="border border-white/20 rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}