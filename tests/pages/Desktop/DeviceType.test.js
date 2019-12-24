import faker from 'faker';
import shortid from 'shortid';
import puppeteer from 'puppeteer';

function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const deviceType = {
  typeId: shortid.generate(),
  userId: 'joe_19840729_hotmail_com',
  custom: true,
  name: faker.name.firstName(),
  spec: {
    topic: faker.name.firstName(),
    duration: String(faker.random.number({ min: 60000 })),
    interval: String(faker.random.number({ min: 2000 })),
    payload: [{
      name: 'g47qEbvh1',
      type: 'id',
    }, {
      name: 'yEWV3sWvO',
      type: 'bool',
    }, {
      name: '8FXpIKikR',
      type: 'decay',
    }, {
      name: 'iZYtFCZTX',
      type: 'float',
    }, {
      name: 'n07c5bg6w',
      type: 'int',
    }, {
      name: 'RcfD65JxR',
      type: 'location',
    }, {
      name: 'pVyPCvbJw',
      type: 'object',
    }, {
      name: 'cqOwWBbNm',
      type: 'string',
    }, {
      name: '0N4fgzXeW',
      type: 'sinusoidal',
    }, {
      name: '-9Xi0Xvly',
      type: 'uuid',
    }, {
      name: 'J13-T0DNP',
      type: 'shortid',
    }, {
      name: 'LzsIlYXYK',
      type: 'timestamp',
    }, {
      name: 'u8hlrqnKP',
      type: 'pickOne',
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
  }, 16000);

  test('Navtigate to Device Type management', async () => {
    await page.click('#deviceType');
    await page.waitForSelector('.pageTitle');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Types');
  }, 16000);

  test('Navtigate to Add Device Type', async () => {
    await page.click('.btnAddDeviceType');
    await page.waitForSelector('.paperTitle');

    const html = await page.$eval('.paperTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');
  }, 16000);

  test('Create New Device Type', async () => {
    await page.waitForSelector('[class*=form]');

    await page.click('input[name=name]');
    await page.type('input[name=name]', deviceType.name);

    await page.click('#mui-component-select-visibility');
    await page.click('li[data-value=public]');

    await page.click('input[name="spec.topic"]', { clickCount: 3 });
    await page.type('input[name="spec.topic"]', deviceType.spec.topic);

    await page.click('input[name="spec.duration"]', { clickCount: 3 });
    await page.type('input[name="spec.duration"]', deviceType.spec.duration);

    await page.click('input[name="spec.interval"]', { clickCount: 3 });
    await page.type('input[name="spec.interval"]', deviceType.spec.interval);

    for (let i = 0; i < deviceType.spec.payload.length; i += 1) {
      await page.click('.btnAddAttribute');
      await page.waitForSelector('.MuiDialog-paperScrollBody');

      await page.click('.inputAttributeName', { clickCount: 3 });
      await page.type('.inputAttributeName', deviceType.spec.payload[i].name);

      await page.click('#mui-component-select-type');
      await page.click(`li[data-value=${deviceType.spec.payload[i].type}]`);

      await page.waitForSelector('.MuiMenu-list', { hidden: true });

      await page.click('.btnSaveAttribute');

      await page.waitForSelector('.MuiDialog-paperScrollBody', { hidden: true });
    }

    // expect(html).toBe('Device Type Definition');
    await page.click('.btnSaveDeviceType');
  }, 160000);
});
