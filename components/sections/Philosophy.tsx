'use client';

import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { StatBadge } from '@/components/ui/StatBadge';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { stats } from '@/lib/data/clients';

/**
 * Philosophy teaser + stat row. Explains the "orbit" metaphor and
 * frames modest, plausible numbers in orbit-ring badges.
 */
export function Philosophy() {
  return (
    <Section id="philosophy" divided>
      {/* Orbit divider */}
      <div className="mb-16 flex justify-center">
        <div className="relative h-20 w-20">
          <OrbitRing className="h-full w-full opacity-60" rings={2} satellites spin />
        </div>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="Why Orbit 369"
          title={
            <>
              Steady, gravitational,{' '}
              <span className="text-gradient-gold">always circling back.</span>
            </>
          }
          description={
            <>
              The best partnerships don't feel like work — they feel like
              orbit. A quiet, reliable presence that keeps everything in motion
              without ever demanding the spotlight. That's how we operate:
              discreet enough to trust, precise enough to depend on, and always
              returning to deliver on what we started.
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-6">
          {stats.map((s, i) => (
            <StatBadge
              key={s.label}
              value={s.value}
              label={s.label}
              sub={s.sub}
              index={i}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link href="/about" className="link-underline text-sm">
          Read our story →
        </Link>
      </div>
    </Section>
  );
}