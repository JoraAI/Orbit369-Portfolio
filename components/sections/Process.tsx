'use client';

import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { processSteps } from '@/lib/data/process';
import { cn } from '@/lib/utils/cn';

/**
 * Horizontal (desktop) / vertical (mobile) process timeline connected
 * by a thin orbit-line. Final step is "Orbit" — the thematic tie-in.
 */
export function Process() {
  return (
    <Section id="process" divided>
      <SectionHeading
        align="center"
        eyebrow="How We Work"
        title={
          <>
            A calm path from{' '}
            <span className="text-gradient-gold">first call to launch.</span>
          </>
        }
        description="No black boxes. You will always know which phase we are in and what happens next."
        className="mx-auto mb-16"
      />

      <RevealGroup className="relative">
        {/* Connecting orbit line — horizontal on desktop */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent lg:block"
          aria-hidden
        />

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {processSteps.map((step, i) => (
            <RevealItem key={step.num}>
              <li className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Node */}
                <div className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/30 bg-void">
                  <span className="font-serif text-lg text-gradient-gold">
                    {step.num}
                  </span>
                  {/* Orbit ring around node */}
                  <span className="pointer-events-none absolute inset-0 rounded-full border border-gold-500/10 [animation:orbit-spin_30s_linear_infinite]">
                    <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-400/60" />
                  </span>
                  {i === processSteps.length - 1 && (
                    <span className="absolute inset-0 rounded-full bg-radial-ember opacity-40 blur-md" />
                  )}
                </div>

                <h3
                  className={cn(
                    'text-lg',
                    i === processSteps.length - 1 && 'text-gradient-gold',
                  )}
                >
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>

                {/* Mobile vertical connector */}
                {i < processSteps.length - 1 && (
                  <span
                    className="mt-6 h-8 w-px bg-gradient-to-b from-gold-500/30 to-transparent sm:hidden"
                    aria-hidden
                  />
                )}
              </li>
            </RevealItem>
          ))}
        </ol>
      </RevealGroup>
    </Section>
  );
}