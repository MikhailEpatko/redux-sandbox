const puppeteer = require('puppeteer');

const isDebugging = () => {
  const debuggingMode = {
    headles: false,
    slowMo: 250,
    devtools: true
    // executablePath: string,
    // timeout: number,
    // ignoreHTTPSErrors: bool
  };
  return process.env.NODE_ENV === 'debug' ? debuggingMode : {};
};

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  page.setViewport({width: 500, height: 500});
});


describe('on page load', () => {

  test('h2 loads correctly', async () => {
    const html = await page.$eval('.jumbotron h2', e => e.innerHTML);
    expect(html).toBe('0');
  }, 16000);

  test('buttons load correctly', async () => {
    const buttons = await page.$eval('.btn', el => !!el);
    const listButtons = await page.$$('.btn');

    expect(buttons).toBe(true);
    expect(listButtons.length).toBe(3);
  });

});

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});