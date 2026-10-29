import { type Variants } from 'motion/react'

/**
 * Shared Motion System Configuration
 * Easing: [0.22, 1, 0.36, 1]
 * Durations: fast 0.3s, base 0.6s, slow 0.9s
 */
export const EASINGS = {
  easeOut: [0.22, 1, 0.36, 1] as const,
  easeInOut: [0.42, 0, 0.58, 1] as const,
}

export const DURATIONS = {
  fast: 0.3,
  base: 0.6,
  slow: 0.9,
}

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: '-80px',
} as const

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATIONS.base, ease: EASINGS.easeOut },
  },
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const motionVariants = {
  fadeIn: fadeInVariants,
  fadeUp: fadeUpVariants,
  fadeDown: fadeDownVariants,
  fadeLeft: fadeLeftVariants,
  fadeRight: fadeRightVariants,
  scaleIn: scaleInVariants,
  blurIn: blurInVariants,
  staggerContainer: staggerContainerVariants,
}

export type MotionVariantType = keyof typeof motionVariants
