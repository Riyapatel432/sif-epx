import { useState, useEffect, useRef } from 'react'

/**
 * CountUp - React Bits number animation component.
 * Animates counting up only to real numbers that already exist in content.
 * Pads with leading zeros when specified (e.g. "05", "01").
 */
export default function CountUp({
  to = 0,
  from = 0,
  duration = 1.2,
  padZero = true,
  className = '',
  suffix = '',
  prefix = '',
}) {
  const [count, setCount] = useState(to)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCount(to)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp = null
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
            const currentVal = Math.floor(progress * (to - from) + from)
            setCount(currentVal)
            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(to)
            }
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.05 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [from, to, duration, hasAnimated])

  const formattedNumber =
    padZero && count < 10 && count >= 0 ? `0${count}` : `${count}`

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  )
}
