/* eslint-disable no-await-in-loop */
import puppeteer from 'puppeteer';

import { inputHelper } from '../../../utils';
import { fakeDeviceType } from './CreateDeviceType.data';

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
  browser.close();
});

describe('Device Type workflow', () => {
  test('Page opens correctly', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('title');

    const title = await page.title();
    expect(title).toBe('Device Simulator');
  });

  test('Navtigate to Device Type management', async () => {
    await page.click('#deviceType');
    await page.waitForSelector('.pageTitle');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Types');
  });

  test('Navtigate to Add Device Type', async () => {
    await page.click('.btnAddDeviceType');
    await page.waitForSelector('#lableEditorTitle');

    const html = await page.$eval('#lableEditorTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');
  });

  test('Create New Device Type', async () => {
    await page.waitForSelector('[class*=form]');

    await inputHelper.inputDeviceType(page, fakeDeviceType);

    await page.click('.btnSaveDeviceType');

    const finalResponse = await page.waitForResponse((res) => res.url() === 'http://localhost:8080/api/deviceTypes/' && res.status() === 200);

    const response = await finalResponse.json();

    await page.waitForSelector('[id^=labelName]');

    const labelName = await page.$eval('#labelName-0', (e) => e.innerText);
    expect(labelName).toBe(fakeDeviceType.name);

    const labelTypeId = await page.$eval('#labelTypeId-0', (e) => e.innerText);
    expect(labelTypeId).toBe(response.typeId);

    const labelVisibility = await page.$eval('#labelVisibility-0', (e) => e.innerText);
    expect(labelVisibility).toBe(fakeDeviceType.visibility);
  }, 180000);

  test('Device Type data displayed correctly', async () => {
    await page.waitForSelector('[id^=labelName]');

    await page.click('#btnEditDeviceType-0');

    await page.waitForResponse((res) => res.url().match(/http:\/\/localhost:8080\/api\/deviceTypes\/.+/) && res.status() === 200);

    const nameValue = await page.$eval('input[name=name]', (e) => e.value);
    expect(nameValue).toBe(fakeDeviceType.name);

    const visibilityValue = await page.$eval('#mui-component-select-visibility', (e) => e.innerText);
    expect(visibilityValue).toBe(fakeDeviceType.visibility);

    const topicValue = await page.$eval('input[name="spec.topic"]', (e) => e.value);
    expect(topicValue).toBe(fakeDeviceType.spec.topic);

    const durationValue = await page.$eval('input[name="spec.duration"]', (e) => e.value);
    expect(durationValue).toBe(fakeDeviceType.spec.duration);

    const intervalValue = await page.$eval('input[name="spec.interval"]', (e) => e.value);
    expect(intervalValue).toBe(fakeDeviceType.spec.interval);

    for (let i = 0; i < fakeDeviceType.spec.payload.length; i += 1) {
      const labelAttributeName = await page.$eval(`#labelAttributeName-${i}`, (e) => e.innerText);
      expect(labelAttributeName).toBe(fakeDeviceType.spec.payload[i].name);

      const labelAttributeType = await page.$eval(`#labelAttributeType-${i}`, (e) => e.innerText);
      expect(labelAttributeType).toBe(fakeDeviceType.spec.payload[i].type.toUpperCase());

      const labelAttributeStatic = await page.$eval(`#labelAttributeStatic-${i}`, (e) => e.innerText);
      expect(labelAttributeStatic).toBe(fakeDeviceType.spec.payload[i].static ? 'TRUE' : '');
    }
    // const labelTypeId = await page.$eval('#labelTypeId-0', (e) => e.innerText);
    // expect(labelTypeId).toBe(fakeDeviceType.typeId);

    // const labelVisibility = await page.$eval('#labelVisibility-0', (e) => e.innerText);
    // expect(labelVisibility).toBe(fakeDeviceType.visibility);
  }, 180000);
});
