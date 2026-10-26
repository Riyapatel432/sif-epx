import { useRef, useEffect, useState } from 'react'

/**
 * BlurText - React Bits text reveal animation component.
 * Immediately initializes with initial state and reveals smoothly,
 * ensuring high visibility with strong contrast.
 */
export default function BlurText({
  text = '',
  delay = 40,
  className = '',
  animateBy = 'words', // 'words' | 'letters'
  direction = 'top',
  onAnimationComplete,
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // If prefers-reduced-motion, immediately show text without transitions
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true)
      return
    }

    // Trigger reveal immediately on mount with small requestAnimationFrame
    const frameId = requestAnimationFrame(() => {
      setInView(true)
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  const elements = animateBy === 'words' ? text.split(' ') : text.split('')

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-700 ease-out will-change-[filter,transform,opacity]"
          style={{
            filter: inView ? 'blur(0px)' : 'blur(6px)',
            opacity: inView ? 1 : 0.05,
            transform: inView
              ? 'translateY(0)'
              : direction === 'top'
              ? 'translateY(-10px)'
              : 'translateY(10px)',
            transitionDelay: `${i * delay}ms`,
            marginRight: animateBy === 'words' ? '0.28em' : '0',
          }}
          onTransitionEnd={
            i === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {el}
        </span>
      ))}
    </span>
  )
}
