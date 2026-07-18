'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp, reducedMotion, viewportOnce } from '@/lib/utils/motion';
import type { ReactNode } from 'react';

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: ReactNode;
  /** Delay in seconds before the reveal begins */
  delay?: number;
  /** Disable the rise, fade only (use to avoid layout shift) */
  fadeOnly?: boolean;
  as?: 'div' | 'section' | 'li' | 'span';
}

/**
 * Scroll-triggered reveal: fade + slight rise, with reduced-motion fallback.
 */
export function Reveal({
  children,
  delay = 0,
  fadeOnly: fadeOnlyProp = false,
  className,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = fadeOnlyProp
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay } },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay } },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — wrap multiple <RevealItem> children to sequence reveals.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child of <RevealGroup> — inherits stagger timing.
 */
export function RevealItem({
  children,
  className,
  fadeOnly: fadeOnlyProp = false,
}: {
  children: ReactNode;
  className?: string;
  fadeOnly?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion
    ? reducedMotion
    : fadeOnlyProp
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }
    : fadeUp;

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}