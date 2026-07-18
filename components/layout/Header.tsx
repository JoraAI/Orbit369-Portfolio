'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/data/site';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Transparent → solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-orbit',
          scrolled
            ? 'border-b border-hairline bg-void/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
        style={{ height: 'var(--header-h)' }}
      >
        <nav
          className="container-orbit flex h-full items-center justify-between"
          aria-label="Primary"
        >
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-9 md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-active={isActive(item.href)}
                  className="link-underline text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary text-sm">
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                'h-px w-6 bg-ink transition-all duration-300 ease-orbit',
                mobileOpen && 'translate-y-[3.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'h-px w-6 bg-ink transition-all duration-300 ease-orbit',
                mobileOpen && '-translate-y-[3.5px] -rotate-45',
              )}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile nav overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col bg-void/95 backdrop-blur-xl md:hidden"
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'font-serif text-3xl tracking-wide transition-colors',
                      isActive(item.href) ? 'text-gradient-gold' : 'text-ink hover:text-gold-200',
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * siteConfig.nav.length + 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <Link href="/contact" className="btn-primary">
                  Start a Project
                </Link>
              </motion.div>
            </div>
            <div className="border-t border-hairline py-6 text-center text-xs text-ink-faint">
              {siteConfig.email}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}