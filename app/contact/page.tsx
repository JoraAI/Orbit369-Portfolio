import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd, breadcrumbSchema } from '@/components/seo/JsonLd';
import { ContactForm } from '@/components/widgets/ContactForm';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start a project with Orbit 369 Media. Tell us what you are building and we will reply within 24 to 48 hours with honest thoughts on scope, timeline, and fit.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `Contact · ${siteConfig.name}`,
    description: 'Start a project — we reply within 24 to 48 hours.',
    url: `${siteConfig.url}/contact`,
  },
};

const contactDetails = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Studio',
    value: siteConfig.headquarters,
    href: undefined,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-[calc(var(--header-h)+5rem)] pb-12">
        <OrbitRing
          className="pointer-events-none absolute -right-32 top-0 h-[40rem] w-[40rem] opacity-10"
          rings={3}
          spin
        />
        <div className="container-orbit relative">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Contact', path: '/contact' },
            ]}
            className="mb-8"
          />
          <Reveal className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-500/70" />
              <span className="eyebrow">Start a Project</span>
            </div>
            <h1 className="text-display text-balance glow-gold">
              Let's put your brand{' '}
              <span className="text-gradient-gold">in orbit.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
              Tell us what you are building. We reply within 24 to 48 hours with
              honest thoughts on scope, timeline, and fit — no hard sell, no
              templates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + details */}
      <section className="pb-24">
        <div className="container-orbit">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* Details sidebar */}
            <Reveal delay={0.1} className="flex flex-col gap-6">
              {/* Contact details */}
              <div className="glass-card flex flex-col gap-5 p-6 sm:p-8">
                <h2 className="text-sm uppercase tracking-[0.2em] text-gold-400">
                  Direct contact
                </h2>
                <ul className="flex flex-col gap-4">
                  {contactDetails.map((d) => (
                    <li key={d.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-gold-300">
                        {d.icon}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-ink-faint">
                          {d.label}
                        </p>
                        {d.href ? (
                          <a
                            href={d.href}
                            className="link-underline w-fit text-sm text-ink"
                          >
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm text-ink">{d.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-hairline pt-4 text-xs text-ink-muted">
                  {siteConfig.servingNote}
                </p>
              </div>

              {/* Styled map block */}
              <div className="relative overflow-hidden rounded-2xl border border-hairline">
                <div className="relative h-48 bg-gradient-to-br from-surface-raised via-void-raised to-surface-sunken">
                  {/* Faux grid lines */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(201,160,92,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,92,0.15) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  />
                  {/* Pin */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <OrbitRing
                        className="h-16 w-16 opacity-80"
                        rings={2}
                        satellites
                        spin
                      />
                      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-gradient shadow-gold-glow" />
                    </div>
                  </div>
                </div>
                <div className="border-t border-hairline p-4">
                  <p className="text-sm font-medium text-ink">
                    {siteConfig.headquarters}
                  </p>
                  <p className="text-xs text-ink-faint">
                    Remote-friendly — serving clients globally
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="glass-card p-6 sm:p-8">
                <h2 className="mb-4 text-sm uppercase tracking-[0.2em] text-gold-400">
                  Follow along
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(siteConfig.social).map(([key, href]) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-hairline px-3.5 py-1.5 text-xs capitalize text-ink-muted transition-colors hover:border-gold-500/40 hover:text-gold-200"
                    >
                      {key}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}