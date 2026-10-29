import type { ReactNode, ComponentProps } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  motionVariants,
  EASINGS,
  type MotionVariantType,
} from '../../lib/motion'

interface RevealProps extends Omit<ComponentProps<typeof motion.div>, 'children'> {
  children: ReactNode
  variant?: MotionVariantType
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  margin?: string
  className?: string
}

export function Reveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration,
  once = true,
  amount = 0.2,
  margin = '-80px',
  className = '',
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  const selectedVariant = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
      }
    : motionVariants[variant] || motionVariants.fadeUp

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={selectedVariant}
      transition={{
        delay: shouldReduceMotion ? 0 : delay,
        ...(duration ? { duration } : {}),
        ease: EASINGS.easeOut,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
