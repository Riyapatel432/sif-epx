import { useRef, useEffect, useState } from 'react'

/**
 * AnimatedContent - React Bits fade-in and vertical reveal.
 * Applied selectively to section headings and group rows, never scattering everywhere.
 */
export default function AnimatedContent({
  children,
  distance = 24,
  direction = 'vertical',
  reverse = false,
  duration = 0.6,
  delay = 0,
  className = '',
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const translateVal = reverse ? -distance : distance
  const transform = inView
    ? 'translate3d(0, 0, 0)'
    : direction === 'vertical'
    ? `translate3d(0, ${translateVal}px, 0)`
    : `translate3d(${translateVal}px, 0, 0)`

  return (
    <div
      ref={ref}
      className={`transition-all ease-out will-change-[transform,opacity] ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform,
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
