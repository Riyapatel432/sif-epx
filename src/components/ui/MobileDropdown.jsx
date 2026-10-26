import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronDown, Check } from 'lucide-react'

/**
 * MobileDropdown
 * Sleek, touch-friendly dropdown/picker for mobile screens (< lg / 1024px).
 * Replaces clipped horizontal chip scrollers with an app-like dropdown selector.
 *
 * Supports Portaling to document.body so menus NEVER get clipped by parent
 * `overflow-hidden` containers (such as Hero Aurora waves or Card containers).
 *
 * Props:
 * - label: Optional eyebrow label (e.g., "SELECT SECTOR TO INSPECT")
 * - items: Array of { id, label, icon: Component, count?: number|string, badge?: string }
 * - activeId: Currently selected item ID
 * - onSelect: (id, item) => void
 * - placeholder: Default text when nothing selected
 * - theme: 'dark' (for hero banners with dark/blue bg) | 'light' (for white/gray page sections)
 * - className: Extra container styles
 */
export function MobileDropdown({
  label,
  items = [],
  activeId,
  onSelect,
  placeholder = 'Select an option...',
  theme = 'dark',
  className = '',
  buttonClassName = '',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [internalActiveId, setInternalActiveId] = useState(activeId ?? items[0]?.id)
  const [menuStyle, setMenuStyle] = useState({})
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

  // Keep internalActiveId in sync with prop if controlled
  useEffect(() => {
    if (activeId !== undefined) {
      setInternalActiveId(activeId)
    }
  }, [activeId])

  const selectedItem = items.find((item) => item.id === internalActiveId) || items[0]

  // Calculate coordinates for portal positioning
  const updateMenuPosition = () => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    
    // Check if dropdown fits below or should flip upward
    const spaceBelow = window.innerHeight - rect.bottom
    const estimatedHeight = Math.min(items.length * 44 + 16, 280)
    
    if (spaceBelow < estimatedHeight && rect.top > estimatedHeight) {
      // Position above
      setMenuStyle({
        position: 'fixed',
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        bottom: `${window.innerHeight - rect.top + 6}px`,
        zIndex: 9999,
      })
    } else {
      // Position below
      setMenuStyle({
        position: 'fixed',
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        top: `${rect.bottom + 6}px`,
        zIndex: 9999,
      })
    }
  }

  const toggleDropdown = () => {
    if (!isOpen) {
      updateMenuPosition()
    }
    setIsOpen(!isOpen)
  }

  // Handle outside click, scroll, and escape
  useEffect(() => {
    if (!isOpen) return

    const handleOutsideInteraction = (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    const handleScrollOrResize = () => {
      if (isOpen) {
        updateMenuPosition()
      }
    }

    document.addEventListener('mousedown', handleOutsideInteraction)
    document.addEventListener('touchstart', handleOutsideInteraction)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScrollOrResize, true)
    window.addEventListener('resize', handleScrollOrResize)

    return () => {
      document.removeEventListener('mousedown', handleOutsideInteraction)
      document.removeEventListener('touchstart', handleOutsideInteraction)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScrollOrResize, true)
      window.removeEventListener('resize', handleScrollOrResize)
    }
  }, [isOpen])

  const isDark = theme === 'dark'

  return (
    <div className={`relative w-full ${className}`}>
      {label && (
        <label className={`block text-[10px] font-mono uppercase tracking-wider font-bold mb-1.5 ${
          isDark ? 'text-sky-300' : 'text-[#0284C7]'
        }`}>
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all min-h-[44px] cursor-pointer shadow-xs ${
          isDark
            ? 'bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/30'
            : 'bg-white hover:bg-sky-50/50 border border-sky-200 text-[#0B1F6B] focus:border-[#1E40D8] focus:ring-2 focus:ring-[#1E40D8]/20'
        } ${buttonClassName}`}
      >
        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
          {selectedItem?.icon && (
            <selectedItem.icon
              className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#22B8F0]' : 'text-[#1E40D8]'}`}
            />
          )}
          <span className="truncate">
            {selectedItem?.label || placeholder}
          </span>
          {selectedItem?.count !== undefined && (
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${
                isDark
                  ? 'bg-white/20 text-white'
                  : 'bg-sky-100 text-[#0B1F6B] font-bold'
              }`}
            >
              {selectedItem.count}
            </span>
          )}
          {selectedItem?.badge && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono shrink-0">
              {selectedItem.badge}
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isDark ? 'text-sky-200' : 'text-slate-500'}`}
        />
      </button>

      {/* Portaled Dropdown Menu (immune to parent overflow:hidden and z-index issues) */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <>
          {/* Invisible backdrop to dismiss easily on touch */}
          <div
            className="fixed inset-0 z-[9998] bg-black/10 backdrop-blur-[0.5px]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            ref={menuRef}
            role="listbox"
            style={menuStyle}
            className="rounded-2xl bg-white border border-sky-200 shadow-2xl py-1.5 max-h-72 overflow-y-auto no-scrollbar animate-in fade-in zoom-in-95 text-left divide-y divide-sky-50"
          >
            {items.map((item) => {
              const isSelected = item.id === (selectedItem?.id ?? internalActiveId)
              const Icon = item.icon

              return (
                <button
                  key={item.id}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => {
                    setInternalActiveId(item.id)
                    onSelect?.(item.id, item)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 text-xs font-mono font-bold text-left cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-[#0B1F6B] text-white'
                      : 'text-slate-700 hover:bg-sky-50 active:bg-sky-100'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                    {Icon && (
                      <Icon
                        className={`w-4 h-4 shrink-0 ${
                          isSelected ? 'text-[#22B8F0]' : 'text-[#1E40D8]'
                        }`}
                      />
                    )}
                    <span className="truncate">{item.label}</span>
                    {item.count !== undefined && (
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-sky-100 text-[#0B1F6B]'
                        }`}
                      >
                        {item.count}
                      </span>
                    )}
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-[#22B8F0] shrink-0 ml-1" />
                  )}
                </button>
              )
            })}
          </div>
        </>,
        document.body
      )}
    </div>
  )
}

export default MobileDropdown
