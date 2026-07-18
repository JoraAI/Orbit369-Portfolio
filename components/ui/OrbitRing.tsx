'use client';

import { cn } from '@/lib/utils/cn';

interface OrbitRingProps {
  className?: string;
  /** Number of orbit rings */
  rings?: number;
  /** Show the central "sunrise core" glow */
  core?: boolean;
  /** Show small satellite dots traveling on the rings */
  satellites?: boolean;
  spin?: boolean;
  reverse?: boolean;
}

/**
 * A crisp, scalable SVG recreation of the logo's orbit motif —
 * thin gold-gradient rings around a warm sunrise-core glow.
 * Used as section dividers, frame accents, and behind stat numbers.
 */
export function OrbitRing({
  className,
  rings = 3,
  core = true,
  satellites = true,
  spin = true,
  reverse = false,
}: OrbitRingProps) {
  const ringDefs = [
    { r: 42, dur: 'orbit-spin-slow', tilt: -18 },
    { r: 32, dur: 'orbit-spin', tilt: 12 },
    { r: 22, dur: 'orbit-spin-reverse', tilt: -32 },
  ].slice(0, rings);

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('pointer-events-none', className)}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orbit-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9A05C" />
          <stop offset="50%" stopColor="#E8C077" />
          <stop offset="100%" stopColor="#B0884A" />
        </linearGradient>
        <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB25C" />
          <stop offset="45%" stopColor="#FF7A33" />
          <stop offset="100%" stopColor="rgba(255,122,51,0)" />
        </radialGradient>
      </defs>

      {/* Central sunrise core */}
      {core && (
        <circle
          cx="50"
          cy="50"
          r="10"
          fill="url(#orbit-core)"
          opacity="0.85"
          className={spin ? 'animate-pulse-glow' : undefined}
        />
      )}

      {/* Orbit rings */}
      {ringDefs.map((ring, i) => (
        <g
          key={i}
          transform={`rotate(${ring.tilt} 50 50)`}
          className={spin ? (i % 2 === 0 ? (reverse ? 'animate-orbit-spin-reverse' : 'animate-orbit-spin') : 'animate-orbit-spin-slow') : undefined}
        >
          <ellipse
            cx="50"
            cy="50"
            rx={ring.r}
            ry={ring.r * 0.42}
            stroke="url(#orbit-gold)"
            strokeWidth="0.6"
            opacity="0.6"
          />
          {/* Satellite dot */}
          {satellites && (
            <circle
              cx={50 + ring.r}
              cy="50"
              r="1.4"
              fill="#E8C077"
              opacity="0.9"
            />
          )}
        </g>
      ))}
    </svg>
  );
}