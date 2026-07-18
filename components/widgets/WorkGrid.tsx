'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  caseStudies,
  caseStudyIndustries,
  caseStudyServiceLabels,
  type CaseStudy,
} from '@/lib/data/caseStudies';
import { cn } from '@/lib/utils/cn';

const coverGradients: Record<string, string> = {
  'gold-ember': 'from-gold-700/40 via-ember/20 to-gold-500/30',
  'deep-gold': 'from-gold-900/60 via-gold-700/30 to-surface-raised',
  'ember-core': 'from-ember-deep/30 via-ember/15 to-gold-800/30',
  'twilight-gold': 'from-surface-raised via-gold-900/40 to-gold-600/20',
};

export function WorkGrid() {
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? caseStudies
        : caseStudies.filter((c) => c.industry === filter),
    [filter],
  );

  return (
    <>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="mr-2 text-xs uppercase tracking-[0.2em] text-ink-faint">
          Filter
        </span>
        {['All', ...caseStudyIndustries].map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setFilter(label)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-xs transition-all duration-300',
              filter === label
                ? 'border-gold-500/50 bg-gold-500/10 text-gold-200'
                : 'border-hairline text-ink-muted hover:border-gold-500/30 hover:text-ink',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((cs) => (
            <motion.button
              key={cs.slug}
              layout
              type="button"
              onClick={() => setSelected(cs)}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card flex flex-col overflow-hidden p-0 text-left transition-all duration-300 ease-orbit hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-card-lift"
              aria-label={`View case study: ${cs.client}`}
            >
              {/* Thumbnail */}
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
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
                <h3 className="mt-2 text-xl text-ink">{cs.client}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {cs.summary}
                </p>
                <span className="mt-4 link-underline text-xs font-medium">
                  Read case study
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-ink-muted">
          No case studies match this filter yet.
        </p>
      )}

      {/* Modal */}
      <CaseStudyModal data={selected} onClose={() => setSelected(null)} />
    </>
  );
}

function CaseStudyModal({
  data,
  onClose,
}: {
  data: CaseStudy | null;
  onClose: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Case study: ${data.client}`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-void-deep/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            className="glass-card relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 shadow-card-lift sm:p-8"
            initial={prefersReducedMotion ? false : { y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-muted transition-colors hover:border-gold-500/40 hover:text-gold-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
              <span>{data.industry}</span>
              <span className="h-1 w-1 rounded-full bg-gold-500/50" />
              <span>{data.region}</span>
            </div>
            <h2 className="text-h2 pr-10">{data.client}</h2>

            {/* Result highlight */}
            <div className="my-6 flex items-center gap-6 rounded-xl border border-hairline bg-surface-sunken/40 p-5">
              <div>
                <span className="block font-serif text-4xl text-gradient-gold">
                  {data.resultStat}
                </span>
              </div>
              <p className="text-sm text-ink-muted">{data.resultLabel}</p>
            </div>

            {/* Narrative */}
            <div className="space-y-5 text-sm leading-relaxed text-ink-muted">
              <div>
                <h3 className="mb-1.5 text-xs uppercase tracking-[0.2em] text-gold-400">
                  Situation
                </h3>
                <p>{data.situation}</p>
              </div>
              <div>
                <h3 className="mb-1.5 text-xs uppercase tracking-[0.2em] text-gold-400">
                  Approach
                </h3>
                <p>{data.approach}</p>
              </div>
              <div>
                <h3 className="mb-1.5 text-xs uppercase tracking-[0.2em] text-gold-400">
                  Result
                </h3>
                <p>{data.result}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-6">
              {data.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-hairline px-3 py-1 text-[0.7rem] text-ink-muted"
                >
                  {caseStudyServiceLabels[s] ?? s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}