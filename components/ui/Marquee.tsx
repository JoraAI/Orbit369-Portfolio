'use client';

import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Pause animation on hover */
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal marquee via CSS keyframes (defined inline for the
 * translate distance since Tailwind can't express content-aware loops).
 * Pauses under reduced motion.
 */
export function Marquee({ children, className, pauseOnHover = true }: MarqueeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden mask-fade-x',
        className,
      )}
    >
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className={cn(
          'flex w-max shrink-0 items-center',
          !prefersReducedMotion && 'animate-[marquee-scroll_40s_linear_infinite]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]',
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}