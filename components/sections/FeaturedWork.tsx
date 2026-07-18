'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Section, SectionHeading } from '@/components/ui/Section';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { featuredWork } from '@/lib/data/caseStudies';
import { caseStudyServiceLabels } from '@/lib/data/caseStudies';
import { cn } from '@/lib/utils/cn';

/** Gradient thumbnail backgrounds keyed by the case study `cover` token. */
const coverGradients: Record<string, string> = {
  'gold-ember': 'from-gold-700/40 via-ember/20 to-gold-500/30',
  'deep-gold': 'from-gold-900/60 via-gold-700/30 to-surface-raised',
  'ember-core': 'from-ember-deep/30 via-ember/15 to-gold-800/30',
  'twilight-gold': 'from-surface-raised via-gold-900/40 to-gold-600/20',
};

/**
 * Three featured case-study preview cards with gradient thumbnails,
 * industry tags, and a one-line result stat.
 */
export function FeaturedWork() {
  return (
    <Section id="featured-work" divided>
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Quiet work,{' '}
              <span className="text-gradient-gold">loud results.</span>
            </>
          }
          description="A small, honest selection of recent collaborations. Every engagement starts with a real problem and ends with a measurable outcome."
          className="max-w-2xl"
        />
        <Link href="/work" className="btn-secondary shrink-0">
          View All Work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredWork.map((cs) => (
          <RevealItem key={cs.slug}>
            <Link href="/work" className="group block h-full">
              <article className="glass-card flex h-full flex-col overflow-hidden transition-all duration-300 ease-orbit hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-card-lift">
                {/* Thumbnail with real image */}
                <div
                  className={cn(
                    'relative aspect-[16/10] overflow-hidden bg-gradient-to-br',
                    coverGradients[cs.cover] ?? coverGradients['gold-ember'],
                  )}
                >
                  <Image
                    src={cs.image}
                    alt={cs.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-75 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  {/* Dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void-deep/90 via-void/30 to-transparent" />
                  <div className="absolute right-4 top-4 flex flex-wrap gap-1.5">
                    {cs.services.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[0.6rem] uppercase tracking-wide text-ink-muted backdrop-blur-sm"
                      >
                        {caseStudyServiceLabels[s] ?? s}
                      </span>
                    ))}
                  </div>
                  {/* Result stat overlay */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-3xl text-gradient-gold drop-shadow-lg">
                      {cs.resultStat}
                    </span>
                    <p className="text-[0.7rem] text-ink-muted">{cs.resultLabel}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-ink-faint">
                    <span>{cs.industry}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-500/50" />
                    <span>{cs.region}</span>
                  </div>
                  <h3 className="mt-2 text-h3 text-ink">{cs.client}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {cs.summary}
                  </p>
                  <span className="mt-4 link-underline text-xs font-medium">
                    Read case study
                  </span>
                </div>
              </article>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}