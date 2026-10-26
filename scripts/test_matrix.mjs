import WebSocket from 'ws';
import http from 'http';

const WIDTHS = [320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1440, 1920];
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/products',
  '/infrastructure-methodology',
  '/quality-safety',
  '/industries',
  '/clients',
  '/contact'
];

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

class CDPClient {
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

async function run() {
  const version = await getJson('http://127.0.0.1:9222/json/version');
  const browserWs = version.webSocketDebuggerUrl;
  const browserClient = new CDPClient(browserWs);
  await browserClient.connect();

  const newTarget = await browserClient.send('Target.createTarget', { url: 'http://localhost:3002/' });
  const targetId = newTarget.targetId;
  const pageWs = `ws://127.0.0.1:9222/devtools/page/${targetId}`;

  const client = new CDPClient(pageWs);
  await client.connect();

  await client.send('Page.enable');
  await client.send('Runtime.enable');

  const matrixResults = {};

  for (const route of ROUTES) {
    matrixResults[route] = {};
    const fullUrl = `http://localhost:3002${route}`;
    await client.send('Page.navigate', { url: fullUrl });
    await new Promise(r => setTimeout(r, 1200));

    for (const width of WIDTHS) {
      await client.send('Emulation.setDeviceMetricsOverride', {
        width,
        height: 800,
        deviceScaleFactor: 1,
        mobile: width < 1024
      });
      await new Promise(r => setTimeout(r, 200));

      const evalRes = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollW = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientW = docEl.clientWidth;
          const hasOverflow = scrollW > clientW;
          let overflowingElements = [];
          if (hasOverflow) {
            const all = document.querySelectorAll('*');
            for (const el of all) {
              const rect = el.getBoundingClientRect();
              if (rect.right > clientW + 1 || rect.left < -1) {
                const tag = el.tagName.toLowerCase();
                const cls = (el.className || '').toString().slice(0, 60);
                const id = el.id ? '#' + el.id : '';
                overflowingElements.push(\`\${tag}\${id}[\${cls}] (right: \${Math.round(rect.right)}, clientW: \${clientW})\`);
                if (overflowingElements.length >= 3) break;
              }
            }
          }
          return {
            scrollW,
            clientW,
            hasOverflow,
            overflowingElements
          };
        })()`,
        returnByValue: true
      });

      const data = evalRes.result.value;
      matrixResults[route][width] = {
        pass: !data.hasOverflow,
        scrollW: data.scrollW,
        clientW: data.clientW,
        overflowingElements: data.overflowingElements
      };
    }
    console.log(`Finished checking ${route}: ${Object.entries(matrixResults[route]).map(([w, r]) => `${w}px:${r.pass ? 'PASS' : 'FAIL'}`).join(' ')}`);
  }

  console.log('\n--- DETAILED SUMMARY ---');
  for (const [route, widths] of Object.entries(matrixResults)) {
    const fails = Object.entries(widths).filter(([_, r]) => !r.pass);
    if (fails.length === 0) {
      console.log(`[PASS] ${route} clean at all 13 widths!`);
    } else {
      console.log(`[FAIL] ${route} failed at: ${fails.map(([w, r]) => `${w}px (scroll: ${r.scrollW} > ${r.clientW}, items: ${r.overflowingElements.join('; ')})`).join(' | ')}`);
    }
  }

  await browserClient.send('Target.closeTarget', { targetId });
  client.close();
  browserClient.close();
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
