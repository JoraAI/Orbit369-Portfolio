import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Section';
import { GlassCard } from '@/components/ui/GlassCard';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { Accordion } from '@/components/ui/Accordion';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { services } from '@/lib/data/services';
import { faq } from '@/lib/data/faq';
import { siteConfig } from '@/lib/data/site';
import { cn } from '@/lib/utils/cn';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Brand identity, web design and development, social media, paid media, SEO, video production, PR, product development, and SaaS platforms with payment integration — nine disciplines under one quiet orbit.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `Services · ${siteConfig.name}`,
    description:
      'Nine disciplines under one quiet orbit — brand, web, content, growth, SaaS and payments, and more.',
    url: `${siteConfig.url}/services`,
  },
};

// Service schema for the page
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Media Agency Services',
  provider: {
    '@type': 'Organization',
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: siteConfig.regionsServed.map((r) => ({ '@type': 'Place', name: r })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.short },
    })),
  },
};

// FAQ schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema,
          faqSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
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
              { name: 'Services', path: '/services' },
            ]}
            className="mb-8"
          />
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
              <span className="eyebrow">What We Do</span>
            </div>
            <h1 className="text-display text-balance glow-gold">
              Nine disciplines,{' '}
              <span className="text-gradient-gold">one quiet orbit.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
              Full-service capability without the agency overhead. Engage us for
              a single project or let us assemble the combination your brief
              actually needs — every engagement senior-led, NDA-first.
            </p>
          </Reveal>

          {/* Quick nav chips */}
          <Reveal fadeOnly className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-hairline px-3.5 py-1.5 text-xs text-ink-muted transition-colors hover:border-gold-500/40 hover:text-gold-200"
              >
                {s.title.split(' & ')[0]}
              </a>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Service detail grid — compact 2-column cards */}
      <section className="pb-12">
        <div className="container-orbit">
          <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {services.map((service, i) => (
              <div key={service.slug} id={service.slug} className="scroll-mt-28">
              <RevealItem className="h-full">
                <GlassCard interactive className="flex h-full flex-col">
                  {/* Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-xl border border-hairline',
                          service.accent === 'ember' ? 'text-ember-light' : 'text-gold-300',
                        )}
                      >
                        <ServiceIcon icon={service.icon} className="h-6 w-6" />
                      </span>
                      <span className="font-serif text-2xl text-gold-500/30">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl text-ink">{service.title}</h2>
                  <p className="mt-1.5 text-sm text-ink-muted text-pretty">
                    {service.short}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted text-pretty">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-5">
                    <h3 className="mb-3 text-[0.65rem] uppercase tracking-[0.2em] text-gold-400">
                      What's included
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-xs text-ink"
                        >
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-gold-500" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for + CTA */}
                  <div className="mt-auto pt-5">
                    <p className="mb-4 rounded-lg border border-hairline bg-surface-sunken/40 px-4 py-3 text-xs text-ink-muted">
                      <span className="text-[0.6rem] uppercase tracking-wider text-gold-400">
                        Ideal for
                      </span>
                      <br />
                      {service.idealFor}
                    </p>
                    <Link
                      href="/contact"
                      className="link-underline text-xs font-medium"
                    >
                      Discuss this service →
                    </Link>
                  </div>
                </GlassCard>
              </RevealItem>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq" divided>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions,{' '}
                <span className="text-gradient-gold">answered honestly.</span>
              </>
            }
            description="The things founders and teams most often ask before working with us. If something is missing, just ask."
          />
          <div className="self-start">
            <Accordion items={faq} />
            <p className="mt-6 text-sm text-ink-muted">
              Still have questions?{' '}
              <Link href="/contact" className="link-underline font-medium">
                Get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}