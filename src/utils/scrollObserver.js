/**
 * Universal Scroll Reveal Observer
 * Automatically watches all elements with .fade-up, .fade-in, and .fade-scale.
 * 
 * Technical Implementation:
 * - IntersectionObserver with rootMargin: '0px 0px -10% 0px' (approx 15% visibility trigger)
 * - Once-only animation (unobserves upon entry)
 * - Progressive enhancement: adds 'js-animations' class to <html> so SSR/non-JS fallback stays fully visible
 * - Automatic sibling stagger indexing (100ms apart, capped at 5 items then resets)
 * - MutationObserver to auto-bind dynamically rendered components / client-side route transitions
 */

export function initScrollObserver() {
  if (typeof window === 'undefined') return

  // Mark HTML element to activate animation styles (progressive enhancement)
  document.documentElement.classList.add('js-animations')

  const isReducedMotion =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15,
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        obs.unobserve(entry.target)
      }
    })
  }, observerOptions)

  function bindElements() {
    const selector = '.reveal-fade-up, .reveal-fade-in, .reveal-fade-scale, .fade-up, .fade-scale'
    const elements = document.querySelectorAll(selector)

    elements.forEach((el) => {
      // Avoid re-observing already revealed elements
      if (el.classList.contains('is-revealed')) return

      // If data-delay is not already set manually, check sibling index for automatic stagger
      if (!el.hasAttribute('data-delay') && el.parentElement) {
        const siblings = Array.from(el.parentElement.querySelectorAll(selector))
        if (siblings.length > 1) {
          const index = siblings.indexOf(el)
          // Stagger 100ms apart, max 5 items (0 to 400ms), then reset
          const staggerIndex = (index % 5)
          const delay = staggerIndex * 100
          if (delay > 0) {
            el.setAttribute('data-delay', `${delay}`)
          }
        }
      }

      if (isReducedMotion) {
        el.classList.add('is-revealed')
      } else {
        observer.observe(el)
      }
    })
  }

  // Initial binding
  bindElements()

  // Watch DOM mutations for route changes or dynamically inserted content
  const mutationObserver = new MutationObserver(() => {
    bindElements()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  })

  return () => {
    observer.disconnect()
    mutationObserver.disconnect()
  }
}
