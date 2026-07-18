'use client';

import Link from 'next/link';
import { OrbitRing } from '@/components/ui/OrbitRing';
import { cn } from '@/lib/utils/cn';

interface LogoProps {
  /** compact = icon + wordmark; icon = just the orbit mark */
  variant?: 'compact' | 'icon';
  className?: string;
  onClick?: () => void;
}

/**
 * Brand lockup. Uses the SVG orbit mark (crisp at any size) plus a
 * serif wordmark + small-caps sublabel, mirroring the supplied logo
 * without relying on the raster asset at small sizes.
 */
export function Logo({ variant = 'compact', className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Orbit 369 Media — home"
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
        <OrbitRing
          className="h-full w-full transition-transform duration-700 ease-orbit group-hover:rotate-45"
          rings={3}
          satellites
          spin={false}
        />
      </span>
      {variant === 'compact' && (
        <span className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-[0.12em] text-ink">
            <span className="text-gradient-gold">O</span>RBIT <span className="text-gradient-gold">369</span>
          </span>
          <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.4em] text-ink-faint">
            Media Pvt Ltd
          </span>
        </span>
      )}
    </Link>
  );
}