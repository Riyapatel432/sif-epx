import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

/**
 * MobileAccordion
 * Accessible accordion item built with @headlessui/react
 */
export function MobileAccordionItem({
  title,
  subtitle,
  icon: Icon,
  badge,
  children,
  defaultOpen = false,
  className = '',
  buttonClassName = '',
  panelClassName = '',
}) {
  return (
    <Disclosure defaultOpen={defaultOpen}>
      {({ open }) => (
        <div className={`rounded-2xl border border-sky-200/90 bg-white shadow-2xs overflow-hidden transition-all ${className}`}>
          <DisclosureButton
            className={`w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer min-h-[48px] hover:bg-sky-50/60 transition-colors ${buttonClassName}`}
          >
            <div className="flex items-center space-x-3 min-w-0">
              {Icon && (
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#001B79] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
              )}
              <div className="min-w-0">
                <span className="font-bold text-sm text-[#001B79] block truncate leading-snug">
                  {title}
                </span>
                {subtitle && (
                  <span className="text-[10px] font-mono text-slate-500 block truncate">
                    {subtitle}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              {badge && (
                <span className="px-2 py-0.5 rounded-md bg-sky-100 text-[#0284C7] font-mono text-[10px] font-bold">
                  {badge}
                </span>
              )}
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${
                  open ? 'bg-[#001B79] text-white rotate-180' : 'bg-sky-100 text-[#001B79]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </DisclosureButton>

          <DisclosurePanel className={`p-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-sky-100/80 bg-sky-50/30 ${panelClassName}`}>
            {children}
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
  )
}

export function MobileAccordionGroup({ children, className = 'space-y-3' }) {
  return <div className={className}>{children}</div>
}

export default MobileAccordionGroup
