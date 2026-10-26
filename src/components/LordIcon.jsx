import { useEffect, useRef, useState } from 'react'

let isLordIconDefined = false
let lordIconPromise = null

/**
 * Lazy loads and registers the @lordicon/element custom element.
 * Respects prefers-reduced-motion by keeping animations static.
 */
export function initLordIcon() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (isLordIconDefined || (typeof customElements !== 'undefined' && customElements.get('lord-icon'))) {
    isLordIconDefined = true
    return Promise.resolve()
  }

  if (!lordIconPromise) {
    lordIconPromise = Promise.all([
      import('@lordicon/element'),
      import('lottie-web')
    ]).then(([{ defineElement }, lottieModule]) => {
      const lottie = lottieModule.default || lottieModule
      defineElement(lottie.loadAnimation)
      isLordIconDefined = true
    }).catch((err) => {
      console.warn('Lordicon initialization deferred or failed:', err)
    })
  }

  return lordIconPromise
}

/**
 * LordIcon React Wrapper
 * @param {string} src - URL or path to the Lordicon JSON animation
 * @param {string} trigger - 'hover' | 'in' | 'click' | 'morph' | 'loop'
 * @param {string} primaryColor - Brand primary color (default #1E40D8)
 * @param {string} secondaryColor - Brand secondary/accent color (default #22B8F0)
 * @param {number} stroke - Consistent stroke width (e.g. 50 or 60)
 * @param {number} size - Icon size in px
 * @param {React.ReactNode} fallback - Static inline SVG fallback rendered before script loads
 * @param {string} className - Additional CSS classes
 */
export function LordIcon({
  src,
  trigger = 'hover',
  primaryColor = '#1E40D8',
  secondaryColor = '#22B8F0',
  stroke = 60,
  size = 32,
  fallback = null,
  className = '',
  target = null,
  style = {},
  ...props
}) {
  const iconRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    initLordIcon().then(() => {
      setMounted(true)
    })
  }, [])

  // If user prefers reduced motion, disable animated triggers
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const activeTrigger = prefersReduced ? 'none' : trigger

  return (
    <span
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      {/* Static Fallback (shown underneath or when custom element is still registering) */}
      {fallback && (
        <span
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          style={{ opacity: mounted ? 0 : 1 }}
          aria-hidden="true"
        >
          {fallback}
        </span>
      )}

      {/* LordIcon Custom Element */}
      <lord-icon
        ref={iconRef}
        src={src}
        trigger={activeTrigger}
        target={target || undefined}
        stroke={stroke}
        colors={`primary:${primaryColor},secondary:${secondaryColor}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'block',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.2s ease-in-out'
        }}
        aria-hidden={props['aria-label'] ? undefined : 'true'}
      />
    </span>
  )
}

export default LordIcon
