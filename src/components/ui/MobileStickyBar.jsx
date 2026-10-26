import { useState, useEffect } from 'react'
import { Phone, FileText, ArrowUp } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router'
import { companyInfo } from '../../data/companyData'

/**
 * MobileStickyBar
 * 2 key actions in the natural thumb zone: "Call" and "Request Proposal"
 * Includes floating "Back to top" button visible after scrolling 1.5 screen heights.
 * On /contact, Request Proposal is hidden as the form is already on page.
 */
export function MobileStickyBar() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const primaryPhone = companyInfo.contact?.phones?.[0] || '+91-95601-77522'
  const routerState = useRouterState()
  const currentPath = routerState?.location?.pathname || ''
  const isContactPage = currentPath === '/contact'

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after ~1.5 screen heights (approx 900px)
      if (window.scrollY > 900) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Back to Top Button on Mobile & Desktop */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#1E3AAE] text-white shadow-2xl hover:bg-[#001B79] hover:scale-110 active:scale-95 transition-all cursor-pointer border border-sky-300/40 animate-in fade-in slide-in-from-bottom-2"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Bottom Thumb Action Bar on Mobile (< 1024px) */}
      <aside
        aria-label="Mobile primary action bar"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-sky-200/90 bg-white/95 backdrop-blur-md shadow-[0_-4px_24px_rgba(3,26,93,0.14)]"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className={`grid ${isContactPage ? 'grid-cols-1' : 'grid-cols-2'} gap-2 h-14 px-3 max-w-md mx-auto items-center`}>
          {/* Action 1: Direct Call */}
          <a
            href={`tel:${primaryPhone}`}
            className="flex items-center justify-center gap-2 h-11 rounded-xl bg-sky-100 hover:bg-sky-200 text-[#001B79] active:scale-95 transition-all font-mono text-xs font-bold touch-target-min"
          >
            <Phone className="w-4 h-4 text-[#1E3AAE]" />
            <span>Call Now</span>
          </a>

          {/* Action 2: Request Proposal (Hidden on /contact page) */}
          {!isContactPage && (
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-[#001B79] to-[#1E40D8] text-white active:scale-95 transition-all font-mono text-xs font-bold shadow-md shadow-blue-900/20 touch-target-min"
            >
              <FileText className="w-4 h-4" />
              <span>Request Proposal</span>
            </Link>
          )}
        </div>
      </aside>
    </>
  )
}

export default MobileStickyBar
