import type { ReactNode, ComponentProps } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  fadeUpVariants,
  EASINGS,
  motionVariants,
  type MotionVariantType,
} from '../../lib/motion'

interface RevealStaggerProps extends Omit<ComponentProps<typeof motion.div>, 'children'> {
  children: ReactNode
  staggerChildren?: number
  delayChildren?: number
  once?: boolean
  amount?: number
  margin?: string
  className?: string
}

export function RevealStagger({
  children,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  once = true,
  amount = 0.2,
  margin = '-80px',
  className = '',
  ...props
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion()

  const customContainer = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin }}
      variants={customContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface RevealItemProps extends Omit<ComponentProps<typeof motion.div>, 'children'> {
  children: ReactNode
  variant?: MotionVariantType
  className?: string
}

export function RevealItem({
  children,
  variant = 'fadeUp',
  className = '',
  ...props
}: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion()
  const selectedVariant = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : motionVariants[variant] || fadeUpVariants

  return (
    <motion.div
      variants={selectedVariant}
      transition={{ ease: EASINGS.easeOut }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
