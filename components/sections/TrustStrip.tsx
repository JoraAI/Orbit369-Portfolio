'use client';

import { Marquee } from '@/components/ui/Marquee';
import { Reveal } from '@/components/ui/Reveal';
import { clients } from '@/lib/data/clients';
import { siteConfig } from '@/lib/data/site';

/**
 * Modest, honest logo cloud — fictional client wordmarks in a marquee,
 * captioned so it does not read as an inflated claim.
 */
export function TrustStrip() {
  return (
    <section className="relative border-y border-hairline bg-void-deep/40 py-12">
      <div className="container-orbit">
        <Reveal className="mb-8 text-center">
          <p className="text-sm text-ink-muted">
            Selected collaborations across{' '}
            <span className="text-gold-300">
              {siteConfig.regionsServed.slice(0, 4).join(', ')}
            </span>{' '}
            and beyond
          </p>
        </Reveal>
      </div>

      <Marquee>
        {clients.map((c) => (
          <div
            key={c.name}
            className="mx-8 flex flex-col items-center gap-1 text-center"
          >
            <span className="font-serif text-xl tracking-wide text-ink-muted transition-colors duration-300 hover:text-ink">
              {c.name}
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-ink-faint">
              {c.industry}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}