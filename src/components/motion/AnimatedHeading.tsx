import { useReducedMotion } from 'motion/react'
import { EASINGS } from '../../lib/motion'

interface AnimatedHeadingProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  delay?: number
}

export function AnimatedHeading({
  text,
  className = '',
  as = 'h2',
  delay = 0,
}: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(' ')
  const Tag = as

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASINGS.easeOut,
      },
    },
  }

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="inline-block"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}

import { motion } from 'motion/react'
export default AnimatedHeading
