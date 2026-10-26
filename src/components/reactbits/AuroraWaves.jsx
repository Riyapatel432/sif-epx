import { useEffect, useRef, useState } from 'react'

/**
 * AuroraWaves - React Bits WebGL/Canvas Aurora Wave Background.
 * Recoloured specifically to navy (#0B1F6B), royal blue (#1E40D8), and cyan (#22B8F0).
 * - Pauses automatically when off-screen via IntersectionObserver.
 * - Disables on mobile (<768px) and when prefers-reduced-motion is active.
 * - Underlaid with Creatica/BGJar SVG fallback.
 */
export default function AuroraWaves({
  className = '',
  speed = 0.008,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [isEligible, setIsEligible] = useState(false)
  const animFrameId = useRef(null)
  const isPaused = useRef(false)

  useEffect(() => {
    // Check viewport width and prefers-reduced-motion
    const isMobile = window.innerWidth < 768
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isMobile || prefersReduced) {
      setIsEligible(false)
      return
    }

    setIsEligible(true)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = canvas.parentElement.offsetWidth)
    let height = (canvas.height = canvas.parentElement.offsetHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.offsetWidth
      height = canvas.height = canvas.parentElement.offsetHeight
    }

    window.addEventListener('resize', handleResize)

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isPaused.current = !entry.isIntersecting
      },
      { threshold: 0.05 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    // Gentle Aurora wave oscillation
    let step = 0
    const render = () => {
      if (!isPaused.current && ctx) {
        step += speed
        ctx.clearRect(0, 0, width, height)

        // Draw 3 harmonic aurora ribbon waves
        const waves = [
          { color: 'rgba(34, 184, 240, 0.22)', freq: 0.002, amp: 45, phase: 0 },
          { color: 'rgba(30, 64, 216, 0.28)', freq: 0.0015, amp: 65, phase: 2 },
          { color: 'rgba(11, 31, 107, 0.35)', freq: 0.0025, amp: 35, phase: 4 },
        ]

        waves.forEach((w) => {
          ctx.beginPath()
          ctx.fillStyle = w.color
          ctx.moveTo(0, height)

          for (let x = 0; x <= width; x += 10) {
            const y =
              Math.sin(x * w.freq + step + w.phase) * w.amp +
              Math.cos(x * 0.001 + step * 0.5) * (w.amp * 0.5) +
              height * 0.65
            ctx.lineTo(x, y)
          }

          ctx.lineTo(width, height)
          ctx.closePath()
          ctx.fill()
        })
      }

      animFrameId.current = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [isEligible, speed])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {isEligible && (
        <canvas
          ref={canvasRef}
          className="w-full h-full block opacity-75 mix-blend-screen"
        />
      )}
    </div>
  )
}
