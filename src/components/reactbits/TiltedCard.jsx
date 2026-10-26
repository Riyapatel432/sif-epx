import { useRef, useState, useEffect } from 'react'

/**
 * TiltedCard - React Bits light 3D tilt component.
 * Constrained strictly to max 4-6° tilt on desktop only.
 * Disabled on touch/mobile and when prefers-reduced-motion is active.
 */
export default function TiltedCard({
  children,
  className = '',
  maxTilt = 5, // max 4-6° tilt as requested
  perspective = 1000,
  scale = 1.01,
  disabled = false,
  ...props
}) {
  const cardRef = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsMobileOrReduced(isMobile || prefersReduced || disabled)

    const handleResize = () => {
      setIsMobileOrReduced(
        window.innerWidth < 768 ||
          (window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) ||
          disabled
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [disabled])

  const handleMouseMove = (e) => {
    if (isMobileOrReduced || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rX = -(mouseY / (rect.height / 2)) * maxTilt
    const rY = (mouseX / (rect.width / 2)) * maxTilt

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseEnter = () => {
    if (!isMobileOrReduced) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        perspective: `${perspective}px`,
        transform:
          !isMobileOrReduced && isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, 1)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      }}
      {...props}
    >
      {children}
    </div>
  )
}
