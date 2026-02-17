import Link from 'next/link';
import VideoPlayer from "@/components/video-player"
import BackgroundVideo from "@/components/BackgroundVideo"

export default function VideoHero({ 
  backgroundVideoSrc = "/gaisma-Matze-short.mp4",
  mainVideoSrc = "/gaisma-Matze-short.mp4",
  description = "In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands.",
  buttonText = "Explore",
  buttonLink = "#latestReleases",
  showTitleOverlay = true
}) {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Y2K Futuristic Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-fuchsia-900/30 to-purple-900/30"></div>

        {/* Holographic Grid Lines */}
        <div className="absolute inset-0 z-20">
          <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-1/4 animate-pulse"></div>
          <div className="w-full h-px bg-gradient-to-r from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute top-2/4 animate-pulse"></div>
          <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-3/4 animate-pulse"></div>

          <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-1/4 animate-pulse"></div>
          <div className="h-full w-px bg-gradient-to-b from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute left-2/4 animate-pulse"></div>
          <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-3/4 animate-pulse"></div>
        </div>

        {/* Prismatic Light Effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-3xl animate-slow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full blur-3xl animate-slow-pulse delay-1000"></div>

        <BackgroundVideo src={backgroundVideoSrc} />
      </div>

      {/* Video Player (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[9/16] max-h-[90vh]">
          <div className="absolute inset-0 rounded-lg overflow-hidden border border-fuchsia-500/50 shadow-[0_0_25px_rgba(219,39,119,0.4)] bg-black/20 backdrop-blur-sm">
            <VideoPlayer videoSrc={mainVideoSrc} />
          </div>
        </div>
      </div>

      {/* Title Overlay */}
      {showTitleOverlay && (
        <div className="hidden md:block absolute top-1/4 left-8 md:left-16 z-30 max-w-md">          
          <p className="text-lg text-white mb-6 max-w-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {description}
          </p>
          
          <Link
            href={buttonLink}
            className="inline-block bg-transparent backdrop-blur-sm border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}