import type { Variants, Transition } from 'framer-motion';

/**
 * Shared easing curve matching the Tailwind `orbit` timing function.
 */
export const easeOrbit = [0.22, 1, 0.36, 1] as const;

export const baseTransition: Transition = {
  duration: 0.6,
  ease: easeOrbit,
};

/**
 * Fade + rise reveal — used by <Reveal /> and whileInView sections.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

/**
 * Stagger container — reveals children sequentially.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

/**
 * Stagger child — pairs with staggerContainer.
 */
export const staggerChild: Variants = fadeUp;

/**
 * Fade only (no movement) — for elements where movement would cause layout shift.
 */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

/**
 * Scale-in — for orbit rings / badges.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { ...baseTransition, duration: 0.8 } },
};

/**
 * Reduced-motion variants — everything snaps to final state instantly.
 * Use via prefersReducedMotion conditional in components.
 */
export const reducedMotion: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

/**
 * Standard whileInView viewport config.
 */
export const viewportOnce = { once: true, amount: 0.2 } as const;