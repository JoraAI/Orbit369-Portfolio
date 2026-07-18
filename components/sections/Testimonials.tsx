'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Section, SectionHeading } from '@/components/ui/Section';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { testimonials } from '@/lib/data/testimonials';
import { cn } from '@/lib/utils/cn';

/**
 * Fictional-but-realistic testimonial carousel.
 * Single-card slider with prev/next + dot indicators.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const active = testimonials[index];
  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" divided>
      <SectionHeading
        align="center"
        eyebrow="In Their Words"
        title={
          <>
            What clients say{' '}
            <span className="text-gradient-gold">when no one is watching.</span>
          </>
        }
        description="Representative reflections from people we have worked with. Details changed to protect confidentiality."
        className="mx-auto mb-14"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Orbit backdrop */}
        <OrbitRing
          className="pointer-events-none absolute -left-16 top-1/2 hidden h-64 w-64 -translate-y-1/2 opacity-20 md:block"
          rings={2}
          spin
        />

        <div className="relative min-h-[16rem] sm:min-h-[14rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              className="glass-card flex flex-col gap-6 p-8 sm:p-10"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Quote mark */}
              <span className="font-serif text-5xl leading-none text-gold-500/40">
                &ldquo;
              </span>
              <blockquote className="-mt-4 text-lg leading-relaxed text-ink text-pretty sm:text-xl">
                {active.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-hairline pt-5">
                {/* Gradient silhouette avatar */}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-500 to-gold-700 font-serif text-sm text-void">
                  {active.name[0]}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{active.name}</p>
                  <p className="text-xs text-ink-faint">
                    {active.role}, {active.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:text-gold-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-6 bg-gold-gradient'
                    : 'w-1.5 bg-ink-faint/40 hover:bg-ink-muted',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:text-gold-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}