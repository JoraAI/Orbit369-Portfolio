import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Orbit 369 Media is a boutique digital agency built on discretion, precision, momentum, and partnership. Learn why we exist and how we work differently.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: `About · ${siteConfig.name}`,
    description: 'A boutique agency built on discretion, precision, and partnership.',
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: 'Discretion',
    description:
      'We work on confidential launches and sensitive briefs. NDA-first, always. Your trust is the asset we protect most carefully.',
  },
  {
    title: 'Precision',
    description:
      'Every pixel, line of copy, and line of code is deliberate. We sweat the craft so the outcome feels effortless.',
  },
  {
    title: 'Momentum',
    description:
      'Steady, not frantic. We keep projects moving in tight loops so nothing stalls and nothing surprises you.',
  },
  {
    title: 'Partnership',
    description:
      'We act like an extension of your team, not a vendor you have to manage. Senior attention throughout, no hand-offs.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+5rem)] pb-16">
        <OrbitRing
          className="pointer-events-none absolute -right-32 top-0 h-[40rem] w-[40rem] opacity-10"
          rings={3}
          spin
        />
        <div className="container-orbit relative">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
            ]}
            className="mb-8"
          />
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
              <span className="eyebrow">Our Story</span>
            </div>
            <h1 className="text-display text-balance glow-gold">
              The agency that works in the shadows so{' '}
              <span className="text-gradient-gold">your brand can shine.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
              Orbit 369 Media exists for founders and teams who value craft over
              noise. We built a studio around a simple idea: the best creative
              partner is the one you trust completely and rarely have to chase.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Orbit metaphor */}
      <Section divided>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative flex aspect-square max-w-md items-center justify-center">
              <OrbitRing
                className="h-full w-full opacity-70"
                rings={3}
                satellites
                spin
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="max-w-[14rem] text-center font-serif text-2xl leading-snug text-ink">
                  Gravity, momentum, and a steady return to what matters.
                </p>
              </div>
            </div>
          </Reveal>
          <SectionHeading
            eyebrow="The Orbit Metaphor"
            title={
              <>
                Why we named ourselves after{' '}
                <span className="text-gradient-gold">an orbit.</span>
              </>
            }
            description={
              <>
                An orbit is the most reliable pattern in nature — a steady,
                gravitational loop that holds things together without ever
                standing still. That is how we work with clients: present without
                being intrusive, dependable without being slow, always returning
                to deliver on the work we began. You stay at the center. We keep
                everything in motion around you.
              </>
            }
          />
        </div>
      </Section>

      {/* Founder */}
      <Section divided>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] max-w-sm">
              {/* Gradient silhouette placeholder (no real photo per brief) */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-surface-raised via-gold-900/30 to-void-deep">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,160,92,0.15),transparent_60%)]" />
                <div className="absolute bottom-0 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-t-full bg-gradient-to-t from-gold-700/20 to-transparent" />
              </div>
              <OrbitRing
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 opacity-40"
                rings={2}
                spin
              />
            </div>
          </Reveal>
          <SectionHeading
            eyebrow="Founder"
            title={
              <>
                Built by a maker who got tired of{' '}
                <span className="text-gradient-gold">loud agencies.</span>
              </>
            }
            description={
              <>
                <p className="mb-4">
                  {/* Placeholder founder — replace name/role/photo before launch */}
                  [Founder Name] started Orbit 369 Media after years of seeing
                  talented teams underserved by agencies that over-promised,
                  under-delivered, and treated clients as line items.
                </p>
                <p>
                  The studio is deliberately small and senior. No layers of
                  account managers between you and the people doing the work —
                  just a focused team that ships with care and keeps its
                  promises.
                </p>
              </>
            }
          />
        </div>
      </Section>

      {/* Values */}
      <Section divided>
        <SectionHeading
          eyebrow="What We Value"
          title={
            <>
              Four principles that shape{' '}
              <span className="text-gradient-gold">every engagement.</span>
            </>
          }
          className="mb-14"
        />
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <RevealItem key={v.title}>
              <GlassCard interactive className="h-full">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-serif text-2xl text-gold-500/40">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl">{v.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* How we're different */}
      <Section divided>
        <SectionHeading
          eyebrow="How We're Different"
          title={
            <>
              Quiet but effective, versus{' '}
              <span className="text-gradient-gold">loud but exhausting.</span>
            </>
          }
          description="The agency stereotype is loud decks, bigger teams, and slower outcomes. We are the opposite on purpose."
          className="mb-12"
        />
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          <RevealItem>
            <div className="rounded-2xl border border-hairline bg-surface-sunken/40 p-6">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-ink-faint">
                The typical agency
              </h3>
              <ul className="space-y-3 text-sm text-ink-muted">
                <li className="flex gap-2.5">
                  <span className="text-ember">✕</span> Junior staff doing the work
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember">✕</span> Layers of account managers
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember">✕</span> Over-promised scopes
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember">✕</span> Slow, opaque timelines
                </li>
                <li className="flex gap-2.5">
                  <span className="text-ember">✕</span> Noise over substance
                </li>
              </ul>
            </div>
          </RevealItem>
          <RevealItem>
            <GlassCard glow="gold" className="h-full">
              <h3 className="mb-4 text-sm uppercase tracking-wider text-gold-400">
                Orbit 369 Media
              </h3>
              <ul className="space-y-3 text-sm text-ink">
                <li className="flex gap-2.5">
                  <span className="text-gold-300">✓</span> Senior team throughout
                </li>
                <li className="flex gap-2.5">
                  <span className="text-gold-300">✓</span> Direct access to makers
                </li>
                <li className="flex gap-2.5">
                  <span className="text-gold-300">✓</span> Honest, itemised scopes
                </li>
                <li className="flex gap-2.5">
                  <span className="text-gold-300">✓</span> Realistic timelines we hold
                </li>
                <li className="flex gap-2.5">
                  <span className="text-gold-300">✓</span> Substance over spectacle
                </li>
              </ul>
            </GlassCard>
          </RevealItem>
        </RevealGroup>

        <div className="mt-12">
          <Link href="/contact" className="btn-primary">
            Work with us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}