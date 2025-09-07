"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TickerItem = { date?: string; title: string; tag?: string };

type Props = {
  releaseTitle: string;
  releaseDateISO: string; // e.g. "2025-09-19T00:00:00+02:00"
  coverSrc: string;       // release cover image (Next/Image compatible path)
  preSaveHref?: string;   // external pre-save URL
  listenHref?: string;    // optional "Listen / Watch" URL
  height?: "full" | "tall" | "comfortable"; // visual height preset
  focal?: string;         // Tailwind object-position e.g. "object-[center_20%]"
  tickerItems?: TickerItem[]; // pass your LATEST_NEWS here for the bottom marquee
  scrollToId?: string;    // anchor id for "Scroll to releases" helper link
  locale?: string;  
};

/** 1s ticking countdown hook */
function useCountdown(iso: string) {
  const target = useMemo(() => new Date(iso).getTime(), [iso]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return { d, h, m, s, isPast: diff === 0 };
}

export default function ReleaseHeroTeaser({
  releaseTitle,
  releaseDateISO,
  coverSrc,
  preSaveHref,
  listenHref,
  focal = "object-center",
  tickerItems,
  scrollToId = "latestReleases",
  locale = "en-GB",
}: Props) {
  const { d, h, m, s, isPast } = useCountdown(releaseDateISO);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      className={`relative isolate overflow-hidden bg-black text-white border-b border-white/10
      lg:pt-16 lg:pb-28 xl:pt-20 xl:pb-32`}
      aria-label="New release hero"
    >
      {/* ===== Y2K Futuristic Background Elements ===== */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-fuchsia-900/30 to-purple-900/30"></div>

        {/* Holographic Grid Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-1/4 animate-pulse"></div>
          <div className="w-full h-px bg-gradient-to-r from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute top-2/4 animate-pulse"></div>
          <div className="w-full h-px bg-gradient-to-r from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute top-3/4 animate-pulse"></div>

          <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-1/4 animate-pulse"></div>
          <div className="h-full w-px bg-gradient-to-b from-cyan-500/70 via-fuchsia-500/70 to-cyan-500/70 absolute left-2/4 animate-pulse"></div>
          <div className="h-full w-px bg-gradient-to-b from-fuchsia-500/70 via-cyan-500/70 to-fuchsia-500/70 absolute left-3/4 animate-pulse"></div>
        </div>

        {/* Prismatic Light Effects */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-full blur-3xl animate-slow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full blur-3xl animate-slow-pulse [animation-delay:1000ms]"></div>
      </div>
      
      {/* ===== Foreground content grid ===== */}
      <div className="relative z-10 mx-auto grid h-full w-full max-w-7xl grid-cols-1 items-center px-6 py-10 md:grid-cols-12 md:gap-6 md:py-10 lg:px-16 lg:py-16 xl:px-24">
        {/* Left: cover card */}
        <div className="mx-auto md:mx-0 md:col-span-5 lg:col-span-5 w-full max-w-sm lg:max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/15 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]">            <Image
              src={coverSrc}
              alt="Release cover"
              fill
              priority
              sizes="(max-width: 680px) 80vw, 400px"
              className={`object-cover ${focal}`}
            />
            {/* Subtle fade to ensure type legibility when overlaying text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Right: copy, countdown, and CTAs */}
        <div className="mt-8 md:mt-0 md:col-span-7 lg:col-span-7">
          {/* Chips */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs">
              New Release
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs">
              <time dateTime={new Date(releaseDateISO).toISOString()}>
                {new Date(releaseDateISO).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {releaseTitle}
          </h1>

          {/* Subcopy (kept verbatim from the first proposal) */}
          <p className="mt-3 max-w-prose text-sm text-white/90 md:text-base">
            The new single arrives on the date above. Pre-save now to get it in your library the moment it drops.
          </p>

          {/* Countdown */}
          <div
            className="mt-4 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur"
            aria-live="polite"
          >
            {isPast ? (
              <span className="text-sm md:text-base">Out now</span>
            ) : (
              <div className="flex items-center gap-4 text-center">
                {[
                  { l: "D", v: d },
                  { l: "H", v: h },
                  { l: "M", v: m },
                  { l: "S", v: s },
                ].map(({ l, v }) => (
                  <div key={l} className="min-w-12">
                    {/* Render stable placeholders on SSR to avoid hydration mismatch */}
                    <div className="text-2xl font-bold tabular-nums md:text-3xl">
                      {mounted ? String(v).padStart(2, "0") : "––"}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-300">{l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTAs (kept verbatim from the first proposal) */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {preSaveHref && (
              <Link
                href={preSaveHref}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm transition hover:-translate-y-0.5"
              >
                Pre-save
              </Link>
            )}
            {listenHref && (
              <Link
                href={listenHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white/95 backdrop-blur transition hover:-translate-y-0.5"
              >
                Listen / Watch
              </Link>
            )}
            
          </div>
        </div>
      </div>

      {/* Bottom marquee ticker (Upcoming) */}
      {tickerItems && tickerItems.length > 0 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="from-black/70 via-black/20 to-transparent bg-gradient-to-t h-16" />
          <div className="relative h-10 overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur">
            <div
              className="whitespace-nowrap will-change-transform absolute inset-y-0 flex items-center"
              style={{ animation: "marquee 50s linear infinite",  animationPlayState: "running" }}
            >
              {[...tickerItems, ...tickerItems].map((it, i) => (
                <span key={i} className="mx-6 text-xs text-white/85">
                  {it.date ? `${it.date} — ${it.title}` : it.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Local keyframes (no Tailwind config required) */}
      <style jsx global>{`
        @keyframes slow-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-slow-pulse {
          animation: slow-pulse 6s ease-in-out infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
