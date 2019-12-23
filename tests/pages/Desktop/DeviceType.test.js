import faker from 'faker';
import puppeteer from 'puppeteer';

// const person = {
//   name: faker.name.firstName() + ' ' + faker.name.lastName(),
//   email: faker.internet.email(),
//   phone: faker.phone.phoneNumber(),
//   message: faker.random.words()
// };

// create global variables to be used in the beforeAll function
let browser;
let page;

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch(
    {
      headless: false, // headless mode set to false so browser opens up with visual feedback
      slowMo: 100, // how slow actions should be
    },
  );
  // creates a new page in the opened browser
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 1920,
      height: 1440,
    },
    userAgent: '',
  });
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  browser.close();
});

describe('Device Type workflow', () => {
  test('Page opens correctly', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('title');

    const title = await page.title();
    expect(title).toBe('Device Simulator');
  }, 16000);

  test('Navtigate to Device Type management', async () => {
    await page.click('#deviceType');
    await page.waitForSelector('.pageTitle');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Types');
  }, 16000);
});
