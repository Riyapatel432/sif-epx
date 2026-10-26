import { useRef, useState, useEffect } from 'react'

/**
 * Magnet - React Bits cursor attraction micro-interaction.
 * Slightly displaces the button/chip toward the mouse cursor on hover.
 * Auto-disabled on mobile and when prefers-reduced-motion is detected.
 */
export default function Magnet({
  children,
  className = '',
  padding = 40,
  disabled = false,
  magnetStrength = 0.25,
  ...props
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsMobileOrReduced(isMobile || prefersReduced || disabled)
  }, [disabled])

  const handleMouseMove = (e) => {
    if (isMobileOrReduced || !ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distX = Math.abs(centerX - e.clientX)
    const distY = Math.abs(centerY - e.clientY)

    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setPosition({
        x: (e.clientX - centerX) * magnetStrength,
        y: (e.clientY - centerY) * magnetStrength,
      })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
