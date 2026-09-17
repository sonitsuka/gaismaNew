import Link from 'next/link';
import Image from 'next/image';

export default function VideoHero({
  description = "In times of unpredictability and chaos one thing that we can always be certain of is that the power and growth behind our personality lies in our own hands.",
  buttonText = "Explore",
  buttonLink = "#latestReleases",
  showTitleOverlay = true,
  balloonHref = ""
}) {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/hero-tree.jpg"
          alt="GAISMA"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Balloon. Horizontally it tracks her: object-cover crops the photo differently per
          viewport, so this box reproduces the covered image's width and the balloon is placed in
          photo coordinates within it, keeping it on her knee line at every screen size.
          Vertically it is measured from the hero instead, so the top of the float clears the
          frame by a fixed 2mm — the keyframes run from the low point to translateY(0), which is
          what makes that clearance exact. The extra 1px offsets the sway: rotating about the
          bottom grows the bounding box upward by about that much.
          From md up the layout drops its pt-14, so the hero runs underneath the fixed
          AnnouncementBar (33px) and the clearance is measured from the bar instead. */}
      <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full"
          style={{ width: "max(100%, calc(90vh * 2000 / 1126))" }}
        >
          <div
            className="absolute animate-balloon-float top-[calc(2mm_+_1px)] md:top-[calc(33px_+_2mm_+_1px)]"
            style={{ left: "43.68%", width: "10.0%" }}
          >
            {/* Hit area over the balloon body only — the rest of the asset is the thread's
                transparent strip, which would otherwise be an invisible click target. */}
            {balloonHref && (
              <a
                href={balloonHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Watch the video"
                className="balloon-hit absolute inset-x-0 top-0 h-[47%] rounded-[50%] z-10 cursor-pointer pointer-events-auto"
              />
            )}
            <img
              src="/balloon-gaisma.webp"
              alt="GAISMA x Sweetback Sessions"
              className="balloon-img w-full block"
            />
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
            className="inline-block bg-transparent backdrop-blur-sm border border-white text-white hover:bg-white/10 px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </div>
  );
}
