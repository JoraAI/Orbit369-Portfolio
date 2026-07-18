'use client';

import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { coreServices } from '@/lib/data/services';
import { cn } from '@/lib/utils/cn';

/**
 * Bento grid preview of the six core services. Asymmetric card sizes,
 * hover reveal of deliverables, links to /services#anchor.
 */
export function ServicesPreview() {
  return (
    <Section id="services-preview" divided>
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Nine disciplines,{' '}
              <span className="text-gradient-gold">one quiet orbit.</span>
            </>
          }
          description="Full-service capability without the agency overhead. Pick one, or let us assemble the combination your brief actually needs."
          className="max-w-2xl"
        />
        <Link href="/services" className="btn-secondary shrink-0">
          All Services
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((service, i) => (
          <RevealItem key={service.slug}>
            <GlassCard
              interactive
              className={cn(
                'h-full',
                // Make the first card span 2 columns on large screens for bento asymmetry
                i === 0 && 'lg:col-span-2 lg:row-span-1',
              )}
            >
              <Link
                href={`/services#${service.slug}`}
                className="flex h-full flex-col"
              >
                {/* Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl border border-hairline transition-colors duration-300',
                      service.accent === 'ember'
                        ? 'text-ember-light group-hover:border-ember/40'
                        : 'text-gold-300 group-hover:border-gold-500/40',
                    )}
                  >
                    <ServiceIcon icon={service.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-xs text-ink-faint">
                    0{i + 1}
                  </span>
                </div>

                {/* Title + short */}
                <h3 className="text-h3 text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.short}
                </p>

                {/* Hover reveal deliverables */}
                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-orbit group-hover:max-h-48 group-hover:opacity-100">
                  <ul className="space-y-1.5 border-t border-hairline pt-4 text-xs text-ink-muted">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-gold-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-5">
                  <span className="link-underline text-xs font-medium">
                    Explore service
                  </span>
                </div>
              </Link>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Extra services note */}
      <RevealItem className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-sunken/40 p-6">
          <OrbitRing
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-20"
            rings={2}
            spin
          />
          <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-ink">
                We also handle{' '}
                <span className="text-gold-300">PR & Media Relations</span>,{' '}
                <span className="text-gold-300">App & Product Development</span>, and{' '}
                <span className="text-gold-300">SaaS & Payment Integration</span>{' '}
                when the brief calls for it.
              </p>
              <p className="mt-1 text-xs text-ink-faint">
                Discretion-first. NDA by default. Senior team throughout.
              </p>
            </div>
            <Link href="/services" className="btn-secondary shrink-0 text-xs">
              View all 9 services
            </Link>
          </div>
        </div>
      </RevealItem>
    </Section>
  );
}