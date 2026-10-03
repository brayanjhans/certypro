const https = require('https');
https.get('https://edupro360.pe/assets/index-CV-VQDJx.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // Look for courses
    const pos = data.indexOf('Aprende. Certifica. Avanza.');
    console.log('--- SLIDES CONTEXT ---');
    console.log(data.slice(pos - 200, pos + 1200));

    const posCert = data.indexOf('/certificados');
    console.log('--- CERT CONTEXT ---');
    console.log(data.slice(posCert - 100, posCert + 400));
  });
});
