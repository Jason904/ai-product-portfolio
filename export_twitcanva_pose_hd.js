const { chromium } = require('/Users/jiangsheng/.npm-global/lib/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  });
  
  const page = await browser.newPage({ 
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  
  await page.goto('http://localhost:3000/#twitcanva-pose-r1', { waitUntil: 'networkidle' });
  
  await page.evaluate(async () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible', 'active'));
    const imgs = Array.from(document.querySelectorAll('#twitcanva-pose-r1 img'));
    await Promise.all(imgs.map(img => {
      if (img.complete) return img.decode ? img.decode() : Promise.resolve();
      return new Promise((resolve) => {
        img.onload = () => (img.decode ? img.decode().then(resolve).catch(resolve) : resolve());
        img.onerror = resolve;
      });
    }));
  });
  
  await page.evaluate(async () => {
    const el = document.querySelector('#twitcanva-pose-r1');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);

  const poseSec = await page.$('#twitcanva-pose-r1');
  if (poseSec) {
    const outPath = '/Users/jiangsheng/VibeCoding/ai-product-portfolio/twitcanva_p4_r1_full_preview.png';
    await poseSec.screenshot({ path: outPath });
    console.log('Saved 2x Retina preview to:', outPath);
  }

  // Also capture Act 04 Dark Section
  const darkSec = await page.$('.tc-pose-r1__dark-section');
  if (darkSec) {
    const darkPath = '/Users/jiangsheng/VibeCoding/ai-product-portfolio/twitcanva_p4_r1_dark_preview.png';
    await darkSec.screenshot({ path: darkPath });
    console.log('Saved Dark Section preview to:', darkPath);
  }

  // Mobile viewport
  const pageM = await browser.newPage({ 
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2
  });
  await pageM.goto('http://localhost:3000/#twitcanva-pose-r1', { waitUntil: 'networkidle' });
  await pageM.evaluate(async () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible', 'active'));
  });
  await pageM.waitForTimeout(600);
  const poseSecM = await pageM.$('#twitcanva-pose-r1');
  if (poseSecM) {
    const mPath = '/Users/jiangsheng/VibeCoding/ai-product-portfolio/twitcanva_p4_r1_mobile_preview.png';
    await poseSecM.screenshot({ path: mPath });
    console.log('Saved Mobile preview to:', mPath);
  }

  await browser.close();
})();
