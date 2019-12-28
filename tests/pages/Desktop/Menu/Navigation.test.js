/* eslint-disable no-await-in-loop */
import puppeteer from 'puppeteer';

// create global variables to be used in the beforeAll function
let browser;
let page;

beforeAll(async () => {
  // launch browser
  browser = await puppeteer.launch({
    headless: false, // headless mode set to false so browser opens up with visual feedback
    slowMo: 50, // how slow actions should be
    // devtools: true,
    args: ['--start-fullscreen'],
  });
  // creates a new page in the opened browser
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 1920,
      height: 1080,
    },
    userAgent: '',
  });
});

// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  // browser.close();
});

describe.only('Navigate through all pages', () => {
  test('Page opens correctly', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('title');

    const title = await page.title();
    expect(title).toBe('Device Simulator');
  });

  test('Navtigate to Dashboard', async () => {
    await page.click('#dashboard');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/dashboard');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Dashboard');
  });

  test('Navtigate to MyDevice', async () => {
    await page.click('#myDevice');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/myDevice');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('My Device');
  });

  test('Navtigate to MyProfile', async () => {
    await page.click('#myProfile');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/myProfile');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('My Profile');
  });

  test('Navtigate to DeviceType', async () => {
    await page.click('#deviceType');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/deviceType');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type');
  });

  test('Navtigate to Widgets', async () => {
    await page.click('#widgets');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/widgets');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Widgets');
  });

  test('Navtigate to Automotive', async () => {
    await page.click('#automotive');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/automotive');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Automotive');
  });

  test('Navtigate to Users', async () => {
    await page.click('#users');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/users');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Users');
  });

  test('Navtigate to Settings', async () => {
    await page.click('#settings');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/settings');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Settings');
  });

  test('Navtigate to Home', async () => {
    await page.click('#home');
    await page.waitForSelector('.pageTitle');

    const url = page.url();
    expect(url).toBe('http://localhost:8080/home');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('IoT Device Simulator');
  });
});
