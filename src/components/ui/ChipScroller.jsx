import { useRef, useEffect } from 'react'

/**
 * ChipScroller
 * One-row horizontal scrollable chip row with snap affordance.
 * Supports auto-scrolling active chip into view, custom item rendering, and touch targets >= 44px.
 */
export function ChipScroller({
  items = [],
  activeId,
  onSelect,
  renderItem,
  className = '',
  itemClassName = '',
  activeClassName = 'bg-[#0B1F6B] text-white shadow-xs',
  inactiveClassName = 'bg-white/90 text-slate-700 border-sky-200/90 hover:bg-sky-50',
  ariaLabel = 'Navigation chips',
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !activeId) return
    const activeEl = containerRef.current.querySelector(`[data-chip-id="${activeId}"]`)
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeId])

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label={ariaLabel}
      className={`w-full max-w-full min-w-0 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar py-1 px-1 -mx-1 scroll-smooth ${className}`}
    >
      {items.map((item, idx) => {
        const id = item.id ?? idx
        const isActive = activeId !== undefined && activeId === id

        if (renderItem) {
          return (
            <div key={id} data-chip-id={id} className="shrink-0 snap-start">
              {renderItem(item, isActive, idx)}
            </div>
          )
        }

        const Icon = item.icon
        const label = item.label ?? item.name ?? String(item)

        return (
          <button
            key={id}
            data-chip-id={id}
            type="button"
            onClick={() => onSelect?.(id, item)}
            className={`shrink-0 snap-start inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all whitespace-nowrap cursor-pointer min-h-[44px] ${
              isActive ? activeClassName : inactiveClassName
            } ${itemClassName}`}
          >
            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
            <span>{label}</span>
            {item.badge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-sky-100 text-[#001B79] font-mono font-bold">
                {item.badge}
              </span>
            )}
            {item.count !== undefined && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 text-current font-mono">
                {item.count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default ChipScroller
