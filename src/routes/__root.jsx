import { useEffect } from 'react'
import { HeadContent, Scripts, Outlet, createRootRoute, useRouterState } from '@tanstack/react-router'
import { MotionConfig } from 'motion/react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MobileStickyBar } from '../components/ui/MobileStickyBar'
import { ScrollProgress } from '../components/motion/ScrollProgress'
import appCss from '../styles.css?url'
import '../styles.css'

import { initScrollObserver } from '../utils/scrollObserver'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'SIF Systems | SIF-EPX Group - Enlighten Process Excellence | EPCM Engineering',
      },
      {
        name: 'description',
        content:
          'SIF Systems (SIF-EPX Group) - ISO 9001:2015 Certified Turnkey EPCM, Process Automation, Switchboards, and Solar EPC Provider across India.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/logo_sif_mark.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
  errorComponent: ({ error }) => (
    <div className="min-h-[70vh] flex items-center justify-center p-6 text-center bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE]">
      <div className="card-sky max-w-md p-8 space-y-4">
        <span className="eyebrow-pill">ERROR // APPLICATION EXCEPTION</span>
        <h2 className="text-2xl font-black text-[#001B79]">System Notice</h2>
        <p className="text-xs text-rose-600 font-mono bg-rose-50 p-3 rounded-xl border border-rose-200">
          {error?.message || 'A routing or rendering error occurred.'}
        </p>
        <a
          href="/"
          className="btn-pill-primary inline-flex text-xs uppercase tracking-wider"
        >
          Return to Home Sheet
        </a>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-[70vh] flex items-center justify-center p-6 text-center bg-gradient-to-b from-[#F0F9FF] via-white to-[#E0F2FE]">
      <div className="card-sky max-w-md p-8 space-y-4">
        <span className="eyebrow-pill">404 // DRAWING NOT FOUND</span>
        <h2 className="text-2xl font-black text-[#001B79]">Sheet Not Found</h2>
        <p className="text-xs text-slate-600 leading-relaxed">
          The requested engineering drawing, route sheet, or document could not be located in our plant directory.
        </p>
        <a
          href="/"
          className="btn-pill-primary inline-flex text-xs uppercase tracking-wider"
        >
          Return to Home Sheet
        </a>
      </div>
    </div>
  ),
})

function RootDocument({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-[#0284C7] selection:text-white">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  })

  // Ensure every route transition resets scroll to top (0, 0)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  // Initialize universal scroll reveal observer
  useEffect(() => {
    const cleanup = initScrollObserver()
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-white text-slate-900 relative">
        <ScrollProgress />
        <Header />
        <main className="flex-1 pb-mobile-nav">
          <Outlet />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </MotionConfig>
  )
}
