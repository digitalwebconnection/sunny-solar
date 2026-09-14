const https = require('https');

async function searchGoogleImages(query) {
  return new Promise((resolve) => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch&asearch=ichunk&async=_id:rg_s,_pms:s,_fmt:pc`;
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[^"'\s\\]+/g);
        if (matches) {
          const clean = [...new Set(matches.map(m => m.replace(/&amp;/g, '&')))];
          resolve(clean);
        } else {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function main() {
  const q1 = await searchGoogleImages('Adani solar panels rooftop inverters');
  const q2 = await searchGoogleImages('1-box solar kit rooftop residential 25kw');
  const q3 = await searchGoogleImages('trained solar rooftop engineers workers safety helmet');
  const q4 = await searchGoogleImages('solar net metering bi-directional electric meter discom');

  console.log('Q1 matches:', q1.slice(0, 3));
  console.log('Q2 matches:', q2.slice(0, 3));
  console.log('Q3 matches:', q3.slice(0, 3));
  console.log('Q4 matches:', q4.slice(0, 3));
}

main();
