import WebSocket from 'ws';
import http from 'http';

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

class TestClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
  }
  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.on('open', resolve);
      this.ws.on('error', reject);
      this.ws.on('message', (msg) => {
        const res = JSON.parse(msg.toString());
        if (res.id && this.callbacks.has(res.id)) {
          const cb = this.callbacks.get(res.id);
          this.callbacks.delete(res.id);
          if (res.error) cb.reject(res.error);
          else cb.resolve(res.result);
        }
      });
    });
  }
  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }
  close() {
    this.ws.close();
  }
}

async function runDetailedFunctionalTests() {
  const version = await getJson('http://127.0.0.1:9222/json/version');
  const browserWs = version.webSocketDebuggerUrl;
  const browserClient = new TestClient(browserWs);
  await browserClient.connect();

  const newTarget = await browserClient.send('Target.createTarget', { url: 'http://localhost:3002/' });
  const targetId = newTarget.targetId;
  const pageWs = `ws://127.0.0.1:9222/devtools/page/${targetId}`;

  const client = new TestClient(pageWs);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const results = {};

  // 1. Mobile Hamburger Drawer Test at 375px
  await client.send('Emulation.setDeviceMetricsOverride', { width: 375, height: 667, deviceScaleFactor: 2, mobile: true });
  await client.send('Page.navigate', { url: 'http://localhost:3002/' });
  await new Promise(r => setTimeout(r, 1200));

  const drawerTest = await client.send('Runtime.evaluate', {
    expression: `(async () => {
      // Find hamburger button
      const menuBtn = document.querySelector('header button[aria-label*="navigation"], header button[aria-label*="menu"], header button:has(svg.lucide-menu)');
      if (!menuBtn) return { pass: false, error: 'Hamburger button not found' };
      menuBtn.click();
      await new Promise(r => setTimeout(r, 400));

      const drawer = document.querySelector('div[role="dialog"], [data-headlessui-state*="open"], nav.fixed, aside.fixed');
      const bodyLocked = document.body.style.overflow === 'hidden' || document.documentElement.style.overflow === 'hidden';

      // Check expandable items (Services, Products)
      const accordions = Array.from(document.querySelectorAll('button')).filter(b => /services|products/i.test(b.innerText));
      let expandedCount = 0;
      for (const b of accordions) {
        b.click();
        await new Promise(r => setTimeout(r, 150));
        expandedCount++;
      }

      // Close drawer
      const closeBtn = document.querySelector('button[aria-label*="close"], button:has(svg.lucide-x)');
      let closed = false;
      if (closeBtn) {
        closeBtn.click();
        await new Promise(r => setTimeout(r, 300));
        closed = true;
      }

      return {
        pass: true,
        drawerFound: !!drawer,
        bodyLocked,
        accordionsFound: accordions.length,
        closed
      };
    })()`,
    awaitPromise: true,
    returnByValue: true
  });
  results.hamburgerDrawer = drawerTest.result.value;

  // 2. Quality & Safety Risk Formula Test (R = F x D)
  await client.send('Page.navigate', { url: 'http://localhost:3002/quality-safety' });
  await new Promise(r => setTimeout(r, 1200));

  const riskFormulaTest = await client.send('Runtime.evaluate', {
    expression: `(() => {
      const inputs = Array.from(document.querySelectorAll('input[type="range"]'));
      const text = document.body.innerText;
      const hasFormula = /R\s*=\s*F\s*x\s*D/i.test(text) || /Risk Matrix/i.test(text) || /Risk Score/i.test(text);
      return {
        hasSliders: inputs.length >= 2,
        sliderCount: inputs.length,
        hasFormula
      };
    })()`,
    returnByValue: true
  });
  results.riskFormula = riskFormulaTest.result.value;

  // 3. Products Page: Search, category filter, grid/list toggle
  await client.send('Page.navigate', { url: 'http://localhost:3002/products' });
  await new Promise(r => setTimeout(r, 1200));

  const productsTest = await client.send('Runtime.evaluate', {
    expression: `(async () => {
      const searchInput = document.querySelector('input[type="text"], input[type="search"], input[placeholder*="Search"]');
      const initialProductsCount = document.querySelectorAll('article, [data-product-id], .group:has(h3)').length;

      let searchWorked = false;
      if (searchInput) {
        searchInput.value = 'PCC';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        await new Promise(r => setTimeout(r, 300));
        const filteredCount = document.querySelectorAll('article, [data-product-id], .group:has(h3)').length;
        searchWorked = filteredCount > 0;
        // reset
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        await new Promise(r => setTimeout(r, 300));
      }

      // Check view toggle (grid/list)
      const toggleBtn = document.querySelector('button[aria-label*="grid"], button[aria-label*="list"], button:has(svg.lucide-layout-grid), button:has(svg.lucide-list)');

      return {
        hasSearchInput: !!searchInput,
        searchWorked,
        initialProductsCount,
        hasViewToggle: !!toggleBtn
      };
    })()`,
    awaitPromise: true,
    returnByValue: true
  });
  results.productsInteractions = productsTest.result.value;

  // 4. Contact Page Form Validation and Accessibility
  await client.send('Page.navigate', { url: 'http://localhost:3002/contact' });
  await new Promise(r => setTimeout(r, 1200));

  const contactTest = await client.send('Runtime.evaluate', {
    expression: `(() => {
      const form = document.querySelector('form');
      const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
      const fontSizes = inputs.map(i => ({
        tag: i.tagName,
        type: i.type,
        fontSize: window.getComputedStyle(i).fontSize
      }));
      const under16px = fontSizes.filter(f => parseFloat(f.fontSize) < 16);

      const submitBtn = document.querySelector('form button[type="submit"], button:has(svg.lucide-send)');
      const faqAccordion = document.querySelectorAll('[data-accordion-item], button[aria-expanded]').length;

      return {
        formFound: !!form,
        inputCount: inputs.length,
        inputsUnder16pxOnMobile: under16px,
        submitBtnFound: !!submitBtn,
        faqAccordions: faqAccordion
      };
    })()`,
    returnByValue: true
  });
  results.contactPage = contactTest.result.value;

  // 5. Check SEO Meta Tags across pages
  const seoCheck = await client.send('Runtime.evaluate', {
    expression: `(() => {
      const title = document.title;
      const metaDesc = document.querySelector('meta[name="description"]')?.content;
      const h1Count = document.querySelectorAll('h1').length;
      const h1Text = document.querySelector('h1')?.innerText;
      const lang = document.documentElement.lang;
      return {
        title,
        hasMetaDesc: !!metaDesc,
        metaDescLength: metaDesc ? metaDesc.length : 0,
        h1Count,
        h1Text,
        lang
      };
    })()`,
    returnByValue: true
  });
  results.seoCheck = seoCheck.result.value;

  console.log('\n================ FUNCTIONAL AUDIT REPORT ================');
  console.log(JSON.stringify(results, null, 2));

  await browserClient.send('Target.closeTarget', { targetId });
  client.close();
  browserClient.close();
}

runDetailedFunctionalTests().catch(err => {
  console.error('Error running functional tests:', err);
  process.exit(1);
});
