import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { WorkGrid } from '@/components/widgets/WorkGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected case studies from Orbit 369 Media — brand, web, content, and growth work for ambitious companies across regions. Quiet work, loud results.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: `Work · ${siteConfig.name}`,
    description: 'Selected case studies — quiet work, loud results.',
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+5rem)] pb-12">
        <OrbitRing
          className="pointer-events-none absolute -left-32 top-0 h-[40rem] w-[40rem] opacity-10"
          rings={3}
          spin
        />
        <div className="container-orbit relative">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Work', path: '/work' },
            ]}
            className="mb-8"
          />
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
              <span className="eyebrow">Selected Work</span>
            </div>
            <h1 className="text-display text-balance glow-gold">
              Quiet work,{' '}
              <span className="text-gradient-gold">loud results.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
              A small, honest portfolio. We are a new studio, so each engagement
              here is one we handled personally — not handed off to a junior
              team. Filter by industry to explore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20">
        <div className="container-orbit">
          <WorkGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}