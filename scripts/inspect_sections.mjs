import WebSocket from 'ws';
import http from 'http';

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function inspectComputed() {
  const v = await getJson('http://127.0.0.1:9222/json/version');
  const ws = new WebSocket(v.webSocketDebuggerUrl);
  await new Promise(r => ws.on('open', r));

  let id = 1;
  const cbs = new Map();
  ws.on('message', m => {
    const res = JSON.parse(m);
    if (res.id && cbs.has(res.id)) {
      cbs.get(res.id)(res.result);
      cbs.delete(res.id);
    }
  });

  function send(m, p = {}) {
    return new Promise(r => {
      const i = id++;
      cbs.set(i, r);
      ws.send(JSON.stringify({ id: i, method: m, params: p }));
    });
  }

  const t = await send('Target.createTarget', { url: 'http://localhost:3002/clients' });
  const pws = new WebSocket('ws://127.0.0.1:9222/devtools/page/' + t.targetId);
  await new Promise(r => pws.on('open', r));

  let pid = 1;
  const pcbs = new Map();
  pws.on('message', m => {
    const res = JSON.parse(m);
    if (res.id && pcbs.has(res.id)) {
      pcbs.get(res.id)(res.result);
      pcbs.delete(res.id);
    }
  });

  function psend(m, p = {}) {
    return new Promise(r => {
      const i = pid++;
      pcbs.set(i, r);
      pws.send(JSON.stringify({ id: i, method: m, params: p }));
    });
  }

  await psend('Page.enable');
  await psend('Runtime.enable');
  await new Promise(r => setTimeout(r, 1200));

  await psend('Emulation.setDeviceMetricsOverride', { width: 1024, height: 800, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 300));

  const res = await psend('Runtime.evaluate', {
    expression: `(() => {
      const sections = Array.from(document.querySelectorAll('section')).map((s, idx) => ({
        idx,
        tag: s.tagName,
        cls: s.className,
        computedOverflow: window.getComputedStyle(s).overflow,
        computedOverflowX: window.getComputedStyle(s).overflowX,
        scrollW: s.scrollWidth,
        clientW: s.clientWidth
      }));
      const clientW = document.documentElement.clientWidth;
      const scrollW = document.documentElement.scrollWidth;
      return { clientW, scrollW, sections };
    })()`,
    returnByValue: true
  });

  console.log('Result:', JSON.stringify(res.result.value, null, 2));

  await send('Target.closeTarget', { targetId: t.targetId });
  pws.close();
  ws.close();
}

inspectComputed();
