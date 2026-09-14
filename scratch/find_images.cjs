const https = require('https');

async function getWikimediaImage(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url&format=json`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'SunnySolarApp/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const urls = pages.map(p => p.imageinfo?.[0]?.url).filter(Boolean);
          resolve(urls);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const q1 = await getWikimediaImage('solar panels rooftop residential');
  const q2 = await getWikimediaImage('solar inverter installation rooftop');
  const q3 = await getWikimediaImage('solar technician rooftop installation');
  const q4 = await getWikimediaImage('electric meter rooftop solar power');

  console.log('Q1:', q1[0]);
  console.log('Q2:', q2[0]);
  console.log('Q3:', q3[0]);
  console.log('Q4:', q4[0]);
}

run();
