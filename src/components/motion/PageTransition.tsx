import React from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { EASINGS } from '../../lib/motion'

interface PageTransitionProps {
  children: React.ReactNode
  pathname: string
  className?: string
}

export function PageTransition({ children, pathname, className = '' }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.12,
          ease: EASINGS.easeOut,
        }}
        className={`w-full ${className}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
