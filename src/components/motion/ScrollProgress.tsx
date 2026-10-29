import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress({ className = '' }: { className?: string }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#031A5D] via-[#1E3AAE] to-[#22B8F0] origin-left z-50 pointer-events-none ${className}`}
    />
  )
}

export default ScrollProgress
