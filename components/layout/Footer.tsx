'use client';

import Link from 'next/link';
import { Logo } from './Logo';
import { NewsletterCapture } from '@/components/widgets/NewsletterCapture';
import { siteConfig } from '@/lib/data/site';
import { services } from '@/lib/data/services';
import { OrbitRing } from '@/components/ui/OrbitRing';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.17-2.46 4.46-2.46C21.4 7.74 24 9.9 24 14.6V24h-5v-8.2c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.18-3.2 4.4V24h-5V8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: siteConfig.social.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: siteConfig.social.behance,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-hairline bg-void-deep/60 backdrop-blur-sm">
      {/* Orbit accent */}
      <div className="pointer-events-none absolute -top-px left-1/2 h-px w-40 -translate-x-1/2 bg-gold-gradient" />
      <OrbitRing
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 opacity-[0.08]"
        rings={3}
        spin
      />

      <div className="container-orbit relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.4fr]">
          {/* Brand + blurb */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              A boutique digital media agency working quietly and precisely so its
              clients shine in front of theirs.
            </p>
            <div className="mt-2 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/40 hover:text-gold-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <nav aria-label="Site" className="flex flex-col gap-3">
            <h3 className="eyebrow">Explore</h3>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline w-fit text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="flex flex-col gap-3">
            <h3 className="eyebrow">Services</h3>
            {services.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="link-underline w-fit text-sm"
              >
                {s.title.split(' & ')[0]}
              </Link>
            ))}
          </nav>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="eyebrow">Stay in orbit</h3>
            <p className="text-sm text-ink-muted">
              Occasional notes on craft, growth, and what we are building. No noise.
            </p>
            <NewsletterCapture />
            <div className="mt-2 text-xs text-ink-faint">
              {siteConfig.email}
              <br />
              {siteConfig.headquartersShort}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-xs text-ink-faint sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="link-underline">
              Privacy
            </Link>
            <Link href="/contact" className="link-underline">
              Terms
            </Link>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-glow" />
              Serving {siteConfig.regionsServed.join(', ')}
            </span>
          </div>
        </div>

        {/* Powered by Jora AI */}
        <div className="mt-4 flex justify-center sm:justify-end">
          <a
            href="https://jora.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[0.7rem] text-ink-faint transition-colors hover:text-gold-300"
          >
            Powered by
            <span className="font-medium tracking-wide text-gradient-gold">
              Jora AI
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path d="M7 17 17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}