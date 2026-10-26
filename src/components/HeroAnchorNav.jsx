import { useRef } from 'react'

/**
 * HeroAnchorNav
 * Reusable anchor "quick-link" pill navigation component for hero banners.
 *
 * Implements Option A (Glass Style) with high-contrast accessibility:
 * - Container: flex flex-wrap gap-3
 * - Button Base: bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-sm
 * - Number badge: bg-white text-[#1E3A8A] rounded-full px-2 py-0.5 font-bold text-xs
 * - Hover: bg-white text-[#1E3A8A] -translate-y-0.5 shadow-lg transition-all duration-200
 * - Active: bg-white text-[#1E3A8A] shadow-md with a small accent dot
 * - Focus: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900
 * - Touch: min-h-[44px] py-2.5 px-4
 */
export function HeroAnchorNav({
  items = [],
  activeId,
  onSelect,
  className = '',
  ariaLabel = 'Hero section quick links',
}) {
  return (
    <nav aria-label={ariaLabel} className={`w-full ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        {items.map((item, idx) => {
          const id = item.id ?? idx
          const isActive = activeId !== undefined && activeId === id

          // Separate numbering prefix (e.g. "01", "02") from label if present
          const rawLabel = item.label ?? item.name ?? String(item)
          const numberMatch = rawLabel.match(/^(\d{2}|\d)\.?\s*(.+)$/)
          const prefix = item.prefix ?? (numberMatch ? numberMatch[1] : null)
          const displayText = numberMatch ? numberMatch[2] : rawLabel

          return (
            <button
              key={id}
              data-anchor-id={id}
              type="button"
              onClick={() => onSelect?.(id, item)}
              className={`group inline-flex items-center gap-2.5 py-2.5 px-4 rounded-full text-sm font-semibold min-h-[44px] cursor-pointer transition-all duration-200 transform-gpu active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 ${
                isActive
                  ? 'bg-white text-[#1E3A8A] shadow-lg -translate-y-0.5 border border-white'
                  : 'bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#1E3A8A] hover:-translate-y-0.5 hover:shadow-lg'
              }`}
            >
              {prefix && (
                <span
                  className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-bold transition-colors ${
                    isActive
                      ? 'bg-[#1E3A8A] text-white'
                      : 'bg-white text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white'
                  }`}
                >
                  {prefix}
                </span>
              )}

              {isActive && (
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"
                  aria-hidden="true"
                />
              )}

              <span className="whitespace-nowrap">{displayText}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default HeroAnchorNav
