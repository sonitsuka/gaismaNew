interface AnnouncementBarProps {
  message: string;
  releaseDate: string;
  preSaveHref?: string;
  showPreSave?: boolean;
}

const AnnouncementBar = ({ 
  message,
  releaseDate,
  preSaveHref,
  showPreSave = true
}: AnnouncementBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <div className="relative flex items-center">
          {/* Left gradient rail */}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />
          
          {/* Announcement text */}
          <p className="mx-3 text-[11px] sm:text-xs text-white/90 whitespace-nowrap">
            {message} {releaseDate}
            {showPreSave && preSaveHref && (
              <>
                {' — '}
                <a 
                  href={preSaveHref} 
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  listen now
                </a>
              </>
            )}
          </p>
          
          {/* Right gradient rail */}
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;