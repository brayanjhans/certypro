const https = require('https');
https.get('https://edupro360.pe/assets/index-CV-VQDJx.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const pos = data.indexOf('Aprende. Certifica. Avanza.');
    console.log('--- SLIDES CONTEXT ---');
    console.log(data.slice(pos - 100, pos + 1500));

    // Look for features / pillars
    const posPillars = data.indexOf('Contenidos relevantes');
    console.log('--- PILLARS CONTEXT ---');
    console.log(data.slice(posPillars - 100, posPillars + 1500));

    // Look for courses
    const posCursos = data.indexOf('Power BI');
    console.log('--- POWER BI CONTEXT ---');
    if (posCursos !== -1) {
      console.log(data.slice(posCursos - 300, posCursos + 1000));
    }

    // Look for wheel / ruleta
    const posWheel = data.indexOf('Gira la ruleta') !== -1 ? data.indexOf('Gira la ruleta') : data.indexOf('Ruleta');
    console.log('--- WHEEL CONTEXT ---');
    if (posWheel !== -1) {
      console.log(data.slice(posWheel - 200, posWheel + 800));
    }
  });
});
