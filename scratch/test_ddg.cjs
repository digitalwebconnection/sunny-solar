const https = require('https');

async function getImages(query) {
  // Step 1: get vqd token
  const tokenUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`;
  const html = await new Promise((resolve) => {
    https.get(tokenUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });

  const m = html.match(/vqd=["']?([^&"'\s]+)/);
  if (!m) return [];
  const vqd = m[1];

  // Step 2: query i.js
  const searchUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
  const jsonStr = await new Promise((resolve) => {
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', () => resolve(''));
  });

  try {
    const data = JSON.parse(jsonStr);
    return (data.results || []).map(r => ({ image: r.image, thumbnail: r.thumbnail, title: r.title }));
  } catch (e) {
    return [];
  }
}

async function run() {
  const r1 = await getImages('Adani solar panels rooftop inverters');
  const r2 = await getImages('rooftop solar kit turnkey system');
  const r3 = await getImages('solar rooftop engineer inspection');
  const r4 = await getImages('solar net metering digital meter');

  console.log('R1:', r1[0]?.image || r1[0]?.thumbnail);
  console.log('R2:', r2[0]?.image || r2[0]?.thumbnail);
  console.log('R3:', r3[0]?.image || r3[0]?.thumbnail);
  console.log('R4:', r4[0]?.image || r4[0]?.thumbnail);
}

run();
