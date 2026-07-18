'use client';

import { OrbitRing } from './OrbitRing';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils/cn';

interface StatBadgeProps {
  value: string;
  label: string;
  sub?: string;
  className?: string;
  index?: number;
}

/**
 * A statistic framed inside a slowly-rotating orbit ring.
 */
export function StatBadge({ value, label, sub, className, index = 0 }: StatBadgeProps) {
  return (
    <Reveal
      delay={index * 0.1}
      className={cn(
        'group relative flex flex-col items-center text-center',
        className,
      )}
    >
      {/* Orbit ring backdrop */}
      <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
        <OrbitRing
          className="absolute inset-0 h-full w-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          rings={2}
          satellites
          spin
        />
        <div className="relative z-10">
          <span className="block font-serif text-3xl text-gradient-gold sm:text-4xl">
            {value}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-ink">{label}</p>
        {sub && <p className="mt-1 text-xs text-ink-faint">{sub}</p>}
      </div>
    </Reveal>
  );
}