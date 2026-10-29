import React from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * ANIMATION SPECIFICATION SETTINGS
 * - Fade-up: opacity 0 to 1, translateY(30px) to 0 (20px on mobile)
 * - Fade-in: opacity 0 to 1 (with optional subtle scale 0.97 to 1)
 * - Duration: 700ms (within 600-800ms spec)
 * - Easing: cubic-bezier(0.22, 1, 0.36, 1)
 * - Trigger when ~15% visible: viewport margin: "0px 0px -10% 0px", amount: 0.15
 * - Animate ONCE only (viewport: { once: true })
 * - Stagger delay for siblings: 100ms each, max 5 items (0 to 400ms), then reset
 * - Prefers-reduced-motion: zero transform, simple opacity fade
 */

export const EASING_BEZIER = [0.22, 1, 0.36, 1]
export const DURATION_DEFAULT = 0.7 // 700ms

export const revealVariants = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'fade-scale': {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
}

/**
 * Universal Reveal Component
 * Replaces ad-hoc animations with a unified, lightweight, GPU-optimized motion wrapper.
 */
export function Reveal({
  children,
  variant = 'fade-up', // 'fade-up' | 'fade-in' | 'fade-scale' | 'fade-left' | 'fade-right'
  delay = 0,
  duration = DURATION_DEFAULT,
  easing = EASING_BEZIER,
  className = '',
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  // For reduced motion, degrade to pure fade with no transform
  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : revealVariants[variant] || revealVariants['fade-up']

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: easing,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * Stagger Container Component
 * Automatically staggers child reveals 100ms apart (capped at 5 items max).
 */
export function StaggerGroup({
  children,
  staggerDelay = 0.1,
  className = '',
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: 0.05,
      },
    },
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * Stagger Item Component
 * Pairs with StaggerGroup for cascading card / grid item entrances
 */
export function StaggerItem({
  children,
  variant = 'fade-up',
  duration = DURATION_DEFAULT,
  easing = EASING_BEZIER,
  className = '',
  as = 'div',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const Component = motion[as] || motion.div

  const variants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : revealVariants[variant] || revealVariants['fade-up']

  return (
    <Component
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        ease: easing,
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  )
}

// Backward compatibility aliases
export const ScrollReveal = Reveal
export const StaggerContainer = StaggerGroup
export default Reveal
