import { cn } from '@/lib/utils/cn';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Add a gold-tinted shadow + lift on hover */
  interactive?: boolean;
  /** Highlight border glow */
  glow?: 'gold' | 'ember' | 'none';
}

/**
 * Glassmorphism surface — blurred translucent panel with a warm gold hairline border.
 * Use sparingly per the brief: service cards, testimonials, stat cards.
 */
export function GlassCard({
  children,
  className,
  interactive = false,
  glow = 'none',
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card group relative overflow-hidden p-6 sm:p-8',
        interactive &&
          'transition-all duration-300 ease-orbit hover:-translate-y-1 hover:border-gold-500/30 hover:shadow-card-lift',
        glow === 'gold' && 'shadow-gold-glow',
        glow === 'ember' && 'shadow-ember-glow',
        className,
      )}
    >
      {/* Corner accent — top-left gold tick */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l border-t border-gold-500/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </div>
  );
}