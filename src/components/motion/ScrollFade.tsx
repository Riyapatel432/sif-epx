import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  scaleEffect?: boolean
  yOffset?: number
}

export function ScrollFade({
  children,
  className = '',
  scaleEffect = false,
  yOffset = 24,
}: ScrollFadeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Enter: 0 -> 0.25 (opacity 0 -> 1), Mid: 0.25 -> 0.75 (opacity 1), Exit: 0.75 -> 1 (opacity 1 -> 0)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [yOffset, 0, 0, -yOffset])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [scaleEffect ? 0.96 : 1, 1, 1, scaleEffect ? 0.98 : 1])

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y, scale }}
      className={`will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default ScrollFade
