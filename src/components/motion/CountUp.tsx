import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  className?: string
  padZero?: boolean
}

export function CountUp({
  to,
  from = 0,
  duration = 1.4,
  className = '',
  padZero = false,
}: CountUpProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(to)
      return
    }

    if (!isInView) return

    let startTime: number | null = null
    let animationFrameId: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // easeOutExpo for natural smooth finish
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.floor(from + (to - from) * easeProgress)

      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount)
      } else {
        setCount(to)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, to, from, duration, shouldReduceMotion])

  const formatted = padZero && count < 10 ? `0${count}` : count

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  )
}

export default CountUp
