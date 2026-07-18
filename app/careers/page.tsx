import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { roles } from '@/lib/data/careers';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Orbit 369 Media — a remote-first, senior boutique digital agency. Explore open roles in design, engineering, and growth, or send a general application.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: `Careers · ${siteConfig.name}`,
    description: 'Remote-first roles in design, engineering, and growth.',
    url: `${siteConfig.url}/careers`,
  },
};

const culturePillars = [
  {
    title: 'Remote-first',
    description: 'Work from anywhere. We hire across regions and manage around outcomes, not hours logged.',
  },
  {
    title: 'Senior by default',
    description: 'Small team, high trust. You will own meaningful work end-to-end from day one.',
  },
  {
    title: 'Craft over noise',
    description: 'We protect deep work. Fewer meetings, better output, calmer weeks.',
  },
  {
    title: 'Growth, steadily',
    description: 'We invest in your craft — tools, learning budget, and real responsibility.',
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+5rem)] pb-16">
        <OrbitRing
          className="pointer-events-none absolute -left-32 top-0 h-[40rem] w-[40rem] opacity-10"
          rings={3}
          spin
        />
        <div className="container-orbit relative">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Careers', path: '/careers' },
            ]}
            className="mb-8"
          />
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
              <span className="eyebrow">Careers</span>
            </div>
            <h1 className="text-display text-balance glow-gold">
              Build quietly ambitious work{' '}
              <span className="text-gradient-gold">with us.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
              We are a small, senior team that values craft, clear
              communication, and calm execution. If you are tired of agency
              theatre and want to do your best work, we should talk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <Section divided>
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              A studio built for{' '}
              <span className="text-gradient-gold">focused makers.</span>
            </>
          }
          className="mb-14"
        />
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {culturePillars.map((p, i) => (
            <RevealItem key={p.title}>
              <GlassCard interactive className="h-full">
                <span className="mb-4 block font-serif text-2xl text-gold-500/40">
                  0{i + 1}
                </span>
                <h3 className="text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.description}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Open roles */}
      <Section divided>
        <SectionHeading
          eyebrow="Open Roles"
          title={
            <>
              Current{' '}
              <span className="text-gradient-gold">openings.</span>
            </>
          }
          description="Placeholder roles — replace with real openings before launch. Each is remote-friendly with a genuine path to ownership."
          className="mb-12"
        />

        <RevealGroup className="flex flex-col gap-4">
          {roles.map((role) => (
            <RevealItem key={role.slug}>
              <GlassCard interactive className="group">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-ink-faint">
                      <span className="rounded-full border border-hairline px-2.5 py-1">
                        {role.team}
                      </span>
                      <span className="rounded-full border border-hairline px-2.5 py-1">
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-gold-500" />
                        {role.location}
                      </span>
                    </div>
                    <h3 className="text-xl text-ink">{role.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                      {role.summary}
                    </p>
                  </div>
                  <a
                    href={`${siteConfig.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary shrink-0 text-sm"
                  >
                    Apply
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* General application */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-sunken/40 p-8">
            <OrbitRing
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 opacity-15"
              rings={2}
              spin
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <h3 className="text-xl">No role that fits?</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  We are always interested in thoughtful people. Send a short
                  note about what you do well and the kind of work you are
                  looking for — we read every message.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}?subject=General application`}
                className="btn-primary shrink-0"
              >
                Send a general application
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}