import WebSocket from 'ws';
import http from 'http';

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function findExactOffenders(route, width) {
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

  const t = await send('Target.createTarget', { url: `http://localhost:3002${route}` });
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

  await psend('Emulation.setDeviceMetricsOverride', { width, height: 800, deviceScaleFactor: 1, mobile: width < 1024 });
  await new Promise(r => setTimeout(r, 300));

  const res = await psend('Runtime.evaluate', {
    expression: `(() => {
      const clientW = document.documentElement.clientWidth;
      const offenders = [];
      const s3 = document.querySelector('#client-roster') || document.querySelector('section:nth-of-type(4)');
      if (s3) {
        s3.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > clientW + 1) {
            offenders.push({
              tag: el.tagName,
              id: el.id,
              cls: el.className,
              rectRight: Math.round(r.right),
              rectWidth: Math.round(r.width),
              text: (el.innerText || '').slice(0, 30)
            });
          }
        });
      }
      return { clientW, s3ScrollW: s3 ? s3.scrollWidth : null, offenders: offenders.slice(0, 10) };
    })()`,
    returnByValue: true
  });

  console.log(`Exact offenders in ${route} section at ${width}px:`, JSON.stringify(res.result.value, null, 2));

  await send('Target.closeTarget', { targetId: t.targetId });
  pws.close();
  ws.close();
}

findExactOffenders('/clients', 1024);
