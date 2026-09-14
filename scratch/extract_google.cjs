const { execSync } = require('child_process');

function getUrls(query) {
  try {
    const stdout = execSync(
      `curl.exe -s -A "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36" "https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch"`
    ).toString();
    const matches = stdout.match(/https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[a-zA-Z0-9_\-]+/g);
    return matches ? [...new Set(matches)] : [];
  } catch (e) {
    return [];
  }
}

const q1 = getUrls('solar panel polycab inverter adani solar rooftop');
const q2 = getUrls('1-box solar kit rooftop residential 25kw');
const q3 = getUrls('solar technician engineer rooftop installation');
const q4 = getUrls('solar net metering electric meter discom');

console.log('Q1:', q1.slice(0, 3));
console.log('Q2:', q2.slice(0, 3));
console.log('Q3:', q3.slice(0, 3));
console.log('Q4:', q4.slice(0, 3));
