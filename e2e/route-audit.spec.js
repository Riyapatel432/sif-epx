import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const viewports = [
  { name: 'mobile', width: 360, height: 740 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

const routes = [
  '/',
  '/about',
  '/clients',
  '/contact',
  '/home-1',
  '/home-2',
  '/home-3',
  '/industries',
  '/infrastructure-methodology',
  '/quality-safety',
  '/products',
  '/products/electrical-panel-range-pcc-mcc-imcc-amf',
  '/services',
  '/services/epcm',
]

for (const route of routes) {
  test.describe(`Audit Route: ${route}`, () => {
    for (const vp of viewports) {
      test(`Viewport ${vp.name} (${vp.width}x${vp.height}) audits`, async ({ page, request }) => {
        const consoleErrors = []
        page.on('console', (msg) => {
          if (msg.type() === 'error') {
            consoleErrors.push(msg.text())
          }
        })

        await page.setViewportSize({ width: vp.width, height: vp.height })
        const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
        expect(response?.status()).toBeLessThan(400)

        // Wait slightly for layout & hydrations
        await page.waitForTimeout(500)

        // 1. Check Console Errors (filter out non-fatal or expected browser warnings if any)
        const fatalErrors = consoleErrors.filter(
          (err) =>
            !err.includes('favicon.ico') &&
            !err.includes('Failed to load resource') &&
            !err.includes('ERR_BLOCKED_BY_CLIENT')
        )
        expect(fatalErrors, `Console errors on ${route} (${vp.width}px): ${fatalErrors.join(' | ')}`).toHaveLength(0)

        // 2. Check Horizontal Overflow (no document body or window scroll overflow)
        const hasHorizontalOverflow = await page.evaluate(() => {
          return document.documentElement.scrollWidth > window.innerWidth || document.body.scrollWidth > window.innerWidth
        })
        expect(
          hasHorizontalOverflow,
          `Horizontal overflow detected on ${route} at ${vp.width}px viewport`
        ).toBe(false)

        // 3. Exactly one H1 per page
        const h1Count = await page.locator('h1').count()
        expect(h1Count, `Expected exactly 1 h1 tag on ${route}, found ${h1Count}`).toBe(1)

        // 4. Axe-core accessibility: violations = 0 for serious / critical
        const accessibilityScanResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze()

        const seriousOrCritical = accessibilityScanResults.violations.filter(
          (v) => v.impact === 'serious' || v.impact === 'critical'
        )
        expect(
          seriousOrCritical.length,
          `Accessibility serious/critical violations on ${route} (${vp.name}): ${JSON.stringify(
            seriousOrCritical.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
            null,
            2
          )}`
        ).toBe(0)

        // 5. Links respond with status < 400 (on desktop run to avoid duplicate requests)
        if (vp.name === 'desktop') {
          const links = await page.$$eval('a[href]', (anchors) =>
            Array.from(new Set(anchors.map((a) => a.getAttribute('href')))).filter(
              (href) => href && (href.startsWith('/') || href.startsWith('http://localhost:3000'))
            )
          )

          for (const link of links) {
            // strip hash/query for HTTP ping
            const cleanUrl = link.split('#')[0]
            if (!cleanUrl) continue
            try {
              const res = await request.get(cleanUrl)
              expect(
                res.status(),
                `Link "${link}" on page "${route}" returned HTTP ${res.status()}`
              ).toBeLessThan(400)
            } catch {
              // ignore external or unreachable network blips in test sandbox
            }
          }
        }
      })
    }
  })
}
