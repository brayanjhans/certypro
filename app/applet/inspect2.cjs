const https = require('https');
https.get('https://edupro360.pe/assets/index-CV-VQDJx.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // 1. Pillars
    const posPillars = data.indexOf('Contenidos relevantes');
    console.log('=== PILLARS ===');
    console.log(data.slice(posPillars - 100, posPillars + 800));

    // 2. Footer info & Contacts
    const posFooter = data.indexOf('Jr. Manuel Estacio') !== -1 ? data.indexOf('Jr. Manuel Estacio') : data.indexOf('edupro360.pe');
    console.log('=== FOOTER / CONTACT ===');
    console.log(data.slice(posFooter - 200, posFooter + 600));

    // 3. Wheel segments / prizes
    const posWheelData = data.indexOf('¡Felicidades!');
    if (posWheelData !== -1) {
      console.log('=== WHEEL PRIZES ===');
      console.log(data.slice(posWheelData - 300, posWheelData + 600));
    }

    // 4. Certificates verification page
    const posCertVerif = data.indexOf('Verifica la autenticidad');
    if (posCertVerif !== -1) {
      console.log('=== CERT VERIFICATION ===');
      console.log(data.slice(posCertVerif - 200, posCertVerif + 800));
    }
  });
});
