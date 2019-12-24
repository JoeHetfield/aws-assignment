/* eslint-disable no-await-in-loop */
import faker from 'faker';
import shortid from 'shortid';
import puppeteer from 'puppeteer';

const fakeDeviceType = {
  // typeId: shortid.generate(),
  // userId: 'joe_19840729_hotmail_com',
  // custom: true,
  name: faker.name.firstName(),
  visibility: 'public',
  spec: {
    topic: faker.name.firstName(),
    duration: String(faker.random.number({ min: 60000 })),
    interval: String(faker.random.number({ min: 2000 })),
    payload: [{
      name: 'g47qEbvh1',
      type: 'id',
    // }, {
    //   name: 'yEWV3sWvO',
    //   type: 'bool',
    // }, {
    //   name: '8FXpIKikR',
    //   type: 'decay',
    // }, {
    //   name: 'iZYtFCZTX',
    //   type: 'float',
    // }, {
    //   name: 'n07c5bg6w',
    //   type: 'int',
    // }, {
    //   name: 'RcfD65JxR',
    //   type: 'location',
    // }, {
    //   name: 'pVyPCvbJw',
    //   type: 'object',
    // }, {
    //   name: 'cqOwWBbNm',
    //   type: 'string',
    // }, {
    //   name: '0N4fgzXeW',
    //   type: 'sinusoidal',
    // }, {
    //   name: '-9Xi0Xvly',
    //   type: 'uuid',
    // }, {
    //   name: 'J13-T0DNP',
    //   type: 'shortid',
    // }, {
    //   name: 'LzsIlYXYK',
    //   type: 'timestamp',
    // }, {
    //   name: 'u8hlrqnKP',
    //   type: 'pickOne',
    }],
  },
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
};

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

describe('Device Type workflow', () => {
  let response;

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
    await page.waitForSelector('.paperTitle');

    const html = await page.$eval('.paperTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');
  });

  test('Create New Device Type', async () => {
    await page.waitForSelector('[class*=form]');

    await page.click('input[name=name]');
    await page.type('input[name=name]', fakeDeviceType.name);

    await page.click('#mui-component-select-visibility');
    await page.click(`li[data-value=${fakeDeviceType.visibility}]`);

    await page.click('input[name="spec.topic"]', { clickCount: 3 });
    await page.type('input[name="spec.topic"]', fakeDeviceType.spec.topic);

    await page.click('input[name="spec.duration"]', { clickCount: 3 });
    await page.type('input[name="spec.duration"]', fakeDeviceType.spec.duration);

    await page.click('input[name="spec.interval"]', { clickCount: 3 });
    await page.type('input[name="spec.interval"]', fakeDeviceType.spec.interval);

    for (let i = 0; i < fakeDeviceType.spec.payload.length; i += 1) {
      await page.click('.btnAddAttribute');
      await page.waitForSelector('.MuiDialog-paperScrollBody');

      await page.click('.inputAttributeName', { clickCount: 3 });
      await page.type('.inputAttributeName', fakeDeviceType.spec.payload[i].name);

      await page.click('#mui-component-select-type');
      await page.click(`li[data-value=${fakeDeviceType.spec.payload[i].type}]`);

      await page.waitForSelector('.MuiMenu-list', { hidden: true });

      await page.click('.btnSaveAttribute');

      await page.waitForSelector('.MuiDialog-paperScrollBody', { hidden: true });
    }

    await page.click('.btnSaveDeviceType');

    const finalResponse = await page.waitForResponse((res) => res.url() === 'http://localhost:8080/api/deviceTypes/' && res.status() === 200);

    response = await finalResponse.json();

    expect(response.name).toBe(fakeDeviceType.name);
    expect(response.visibility).toBe(fakeDeviceType.visibility);
    expect(response.spec.topic).toBe(fakeDeviceType.spec.topic);
    expect(response.spec.duration).toBe(fakeDeviceType.spec.duration);
    expect(response.spec.interval).toBe(fakeDeviceType.spec.interval);
  }, 180000);

  test('Device Type List displayed correctly', async () => {
    await page.waitForSelector('[id^=labelName]');

    const labelName = await page.$eval('#labelName-0', (e) => e.innerText);
    expect(labelName).toBe(fakeDeviceType.name);

    const labelTypeId = await page.$eval('#labelTypeId-0', (e) => e.innerText);
    expect(labelTypeId).toBe(response.typeId);

    const labelVisibility = await page.$eval('#labelVisibility-0', (e) => e.innerText);
    expect(labelVisibility).toBe(fakeDeviceType.visibility);
  }, 180000);
});
