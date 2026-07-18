'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { cn } from '@/lib/utils/cn';

/**
 * Full-viewport hero. The orbit motif is a large softly-animated SVG
 * positioned to one side — not the raster logo, so it scales crisply.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-h)]"
      aria-label="Introduction"
    >
      {/* Large orbit motif anchored to the right (decorative) */}
      <div className="pointer-events-none absolute right-[-15%] top-1/2 hidden h-[120vh] w-[120vh] -translate-y-1/2 opacity-50 md:block lg:right-[-8%]">
        <div className={cn(!prefersReducedMotion && 'animate-float')}>
          <OrbitRing
            className="h-full w-full"
            rings={3}
            satellites
            spin
          />
        </div>
      </div>

      {/* Soft radial wash to deepen the right-side glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[60vh] w-[60vh] rounded-full bg-radial-ember opacity-40 blur-3xl" />

      <div className="container-orbit relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
            <span className="eyebrow">Digital Media, Done Quietly Well</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-hero text-ink text-balance glow-gold"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            We work in the shadows.
            <br />
            <span className="text-gradient-gold">Your brand</span> takes the spotlight.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted text-pretty"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            A boutique digital media agency — steady, gravitational, always
            circling back to deliver. Brand, web, content, and growth, handled
            with the discretion of a partner you never have to chase.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          >
            <Link href="/contact" className="btn-primary">
              Start a Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/work" className="btn-secondary">
              See Our Work
            </Link>
          </motion.div>

          {/* Trust micro-line */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-faint"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold-500" />
              NDA-first engagements
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold-500" />
              Remote, globally available
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold-500" />
              Senior team, no hand-offs
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-ink-faint">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <div className="flex h-10 w-6 justify-center rounded-full border border-hairline pt-2">
            <motion.span
              className="h-2 w-1 rounded-full bg-gold-500"
              animate={prefersReducedMotion ? undefined : { y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}