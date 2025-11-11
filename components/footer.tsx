import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="bg-black/90 backdrop-blur-md border-t border-white/10 fixed bottom-0 left-0 w-full min-h-[50px] flex items-center"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4  h-full">

          {/* Social Icons */}
          <div className="social flex flex-wrap items-center gap-2">
            {/* Email (Gray) */}
            <a
              href="mailto:gaisma@posteo.de"
              className="text-gray-300 hover:text-gray-100 transition-colors"
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>

            {/* YouTube (Red) */}
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

            {/* SoundCloud (Orange) */}
            <a
              href="https://soundcloud.com/gaisma"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 hover:text-orange-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 md:w-5 md:h-5 fill-current"
              >
                <path d="M17.3 10.4c-.5 0-1 .1-1.5.3-.2-2.4-2.2-4.3-4.6-4.3-.5 0-1 .1-1.5.2-.2 0-.3.2-.3.4v8.4c0 .2.1.3.3.4.5.1 1 .2 1.5.2h6.1c1.8 0 3.2-1.4 3.2-3.2-.1-1.8-1.5-3.2-3.2-3.2zM3.7 11.3c-.2 0-.3.1-.3.3v3.6c0 .2.1.3.3.3s.3-.1.3-.3v-3.6c0-.1-.1-.3-.3-.3zm1.6-.7c-.2 0-.3.1-.3.3v4.9c0 .2.1.3.3.3s.3-.1.3-.3v-4.9c0-.2-.1-.3-.3-.3zm1.6-.7c-.2 0-.3.1-.3.3v6.3c0 .2.1.3.3.3s.3-.1.3-.3v-6.3c0-.2-.1-.3-.3-.3zm1.6-.7c-.2 0-.3.1-.3.3v7.8c0 .2.1.3.3.3s.3-.1.3-.3V9.5c0-.2-.1-.3-.3-.3z" />
              </svg>
            </a>

            {/* Radio (Amber) */}
            <a
              href="https://soundcloud.com/gaisma/sets/klang-parfuem-lobby-radio?si=83873f0cdb5e473db623ddd8f9a89203&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="16" width="52" height="32" rx="4" ry="4" />
                <circle cx="22" cy="32" r="6" />
                <line x1="42" y1="26" x2="42" y2="30" />
                <line x1="42" y1="34" x2="42" y2="38" />
                <line x1="42" y1="42" x2="42" y2="46" />
                <line x1="10" y1="10" x2="50" y2="2" />
              </svg>
            </a>

            {/* Spotify (Green) */}
            <a
              href="https://open.spotify.com/artist/01EmU1Segbe63mUG2eyJ58"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 168 168"
                className="w-4 h-4 md:w-5 md:h-5 fill-current"
              >
                <path d="M84 0a84 84 0 1 0 0 168 84 84 0 0 0 0-168zm38.5 120.3a5.25 5.25 0 0 1-7.2 1.7c-19.7-12-44.5-14.7-73.8-8.1a5.25 5.25 0 0 1-2.4-10.3c32-7.5 59-4.3 81.5 9.6a5.25 5.25 0 0 1 1.9 7.1zm10.3-20.8a6.56 6.56 0 0 1-9 2.1c-22.6-13.8-57.1-17.9-83.8-9.8a6.56 6.56 0 0 1-3.8-12.6c30.3-9.1 68.7-4.4 94.5 11.3a6.56 6.56 0 0 1 2.1 9zm1.2-21.7C113.3 62.6 66.2 60 40.9 67.6a7.88 7.88 0 1 1-4.4-15c29-8.3 81.6-5.3 113.3 14.4a7.88 7.88 0 0 1-8.8 13.2z" />
              </svg>
            </a>

            {/* Bandcamp (Blue) */}
            <a
              href="https://gaisma.bandcamp.com/music"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 md:w-5 md:h-5 fill-current"
              >
                <path d="M0 384h192l128-256H128zM320 128h192v256H320z" />
              </svg>
            </a>

            {/* Facebook (Dark Blue) */}
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

            {/* Instagram (Pink) */}
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
            <p className="text-xs">Member of</p>
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

          {/* Copyright, Links and Logo */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-2 gap-y-1 text-xs text-white/60 w-full md:w-auto">
          <p>Gaisma &copy; 2025</p>    
            <span className="text-white/40">|</span>
            <Link href="/imprint" className="hover:text-white transition-colors">
              Imprint
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>


        </div>
      </div>
    </footer>
  )
}
