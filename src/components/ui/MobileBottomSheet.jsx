import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'lucide-react'

/**
 * MobileBottomSheet
 * Accessible bottom sheet modal for mobile screens (< 1024px) using @headlessui/react.
 * Provides backdrop, drag-handle indicator, title, and smooth slide-up animation.
 */
export function MobileBottomSheet({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className = '',
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-full"
            >
              <Dialog.Panel className={`w-full max-w-lg transform overflow-hidden rounded-t-[28px] bg-white text-left align-middle shadow-2xl transition-all border-t border-sky-200 max-h-[85vh] flex flex-col pb-safe ${className}`}>
                {/* Drag Handle Bar */}
                <div className="w-full pt-3 pb-1 flex justify-center shrink-0">
                  <div className="w-12 h-1.5 rounded-full bg-slate-300" />
                </div>

                {/* Header */}
                <div className="px-5 py-3 border-b border-sky-100 flex items-center justify-between shrink-0">
                  <div className="min-w-0 pr-4">
                    {subtitle && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] block mb-0.5">
                        {subtitle}
                      </span>
                    )}
                    {title && (
                      <Dialog.Title as="h3" className="text-base font-black text-[#001B79] leading-tight truncate">
                        {title}
                      </Dialog.Title>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Body */}
                <div className="px-5 py-4 overflow-y-auto custom-scrollbar flex-1">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MobileBottomSheet
