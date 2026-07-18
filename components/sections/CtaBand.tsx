'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { siteConfig } from '@/lib/data/site';

/**
 * Full-width closing CTA band with strong headline + primary button.
 */
export function CtaBand() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-hairline py-28 sm:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-ember opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-gold opacity-30 blur-3xl" />

      {/* Orbit motif */}
      <OrbitRing
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-10"
        rings={3}
        satellites
        spin
      />

      <div className="container-orbit relative z-10 text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-2xl flex-col items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/60" />
            <span className="eyebrow">Let's Begin</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          <h2 className="text-display text-balance glow-gold">
            Ready to put your brand in{' '}
            <span className="text-gradient-gold">orbit?</span>
          </h2>

          <p className="max-w-xl text-lg text-ink-muted text-pretty">
            Tell us what you are building. We will reply within 24 to 48 hours
            with honest thoughts on scope, timeline, and fit — no hard sell.
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Start a Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
              {siteConfig.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}