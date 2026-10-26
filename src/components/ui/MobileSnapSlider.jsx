import { useState, useRef, useEffect, Children } from 'react'

/**
 * MobileSnapSlider
 * Mobile-first horizontal scroll-snap slider.
 * Shows ~85% width cards on mobile so the next card peeks.
 * On desktop (lg+), reverts to the standard grid passed via `desktopClassName`.
 */
export function MobileSnapSlider({
  children,
  className = '',
  desktopClassName = 'lg:grid lg:grid-cols-3 lg:gap-8',
  itemClassName = '',
  itemWidth = 'w-[85vw] max-w-[340px]',
  showDots = true,
  ariaLabel = 'Content slider',
}) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  
  // React.Children.toArray automatically flattens arrays returned by .map() and assigns unique keys
  const items = Children.toArray(children).flat()

  const handleScroll = () => {
    if (!containerRef.current) return
    const { scrollLeft, clientWidth } = containerRef.current
    if (clientWidth === 0) return
    const idx = Math.round(scrollLeft / (clientWidth * 0.85))
    setActiveIndex(Math.min(items.length - 1, Math.max(0, idx)))
  }

  const scrollToIndex = (index) => {
    if (!containerRef.current) return
    const item = containerRef.current.children[index]
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
      setActiveIndex(index)
    }
  }

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      {/* Scroll Snap Carousel on Mobile, Grid on Desktop */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        className={`flex flex-row flex-nowrap lg:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 px-4 py-3 focus:outline-hidden focus:ring-1 focus:ring-sky-400/50 w-full`}
      >
        {items.map((child, idx) => (
          <div
            key={idx}
            className={`shrink-0 snap-center ${itemWidth} ${itemClassName}`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Desktop Layout View */}
      <div className={`hidden ${desktopClassName}`}>
        {items.map((child, idx) => (
          <div key={idx} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>

      {/* Mobile Dot Indicators */}
      {showDots && items.length > 1 && (
        <div className="flex lg:hidden items-center justify-center gap-1.5 pt-3">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-6 bg-[#001B79]'
                  : 'w-1.5 bg-sky-200 hover:bg-sky-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileSnapSlider
