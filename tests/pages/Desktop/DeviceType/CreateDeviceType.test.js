/* eslint-disable no-await-in-loop */
import faker from 'faker';

import { inputHelper } from '../../../utils';
import { fakeDeviceType, emptyDeviceType, invalidDeviceType } from './CreateDeviceType.data';

beforeAll(async () => {
  page.emulate({
    viewport: {
      width: 1920,
      height: 1080,
    },
    userAgent: '',
  });
});

describe('Device Type workflow', () => {
  test('Page opens correctly', async () => {
    await page.goto('http://localhost:8080');
    await page.waitForSelector('title');

    const title = await page.title();
    expect(title).toBe('Device Simulator');
  }, 10000);

  test('Navtigate to Device Type management', async () => {
    await page.click('#deviceType');
    await page.waitForSelector('.pageTitle');

    const html = await page.$eval('.pageTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type');
  }, 10000);

  test('Navtigate to Add Device Type', async () => {
    await page.click('.btnAddDeviceType');
    await page.waitForSelector('#lableEditorTitle');

    const html = await page.$eval('#lableEditorTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');
  }, 10000);

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
    expect(labelVisibility.toLowerCase()).toBe(fakeDeviceType.visibility);
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
    expect(topicValue).toBe(String(fakeDeviceType.spec.topic));

    const durationValue = await page.$eval('input[name="spec.duration"]', (e) => e.value);
    expect(durationValue).toBe(String(fakeDeviceType.spec.duration));

    const intervalValue = await page.$eval('input[name="spec.interval"]', (e) => e.value);
    expect(intervalValue).toBe(String(fakeDeviceType.spec.interval));

    for (let i = 0; i < fakeDeviceType.spec.payload.length; i += 1) {
      const labelAttributeName = await page.$eval(`#labelAttributeName-${i}`, (e) => e.innerText);
      expect(labelAttributeName).toBe(fakeDeviceType.spec.payload[i].name);

      const labelAttributeType = await page.$eval(`#labelAttributeType-${i}`, (e) => e.innerText);
      expect(labelAttributeType).toBe(fakeDeviceType.spec.payload[i].type.toUpperCase());

      const labelAttributeStatic = await page.$eval(`#labelAttributeStatic-${i}`, (e) => e.innerText);
      expect(labelAttributeStatic).toBe(fakeDeviceType.spec.payload[i].static ? 'TRUE' : '');

      await page.click(`#btnViewConfig-${i}`);

      await page.waitForSelector('#labelPayloadDetail');

      const labelPayloadDetail = await page.$eval('#labelPayloadDetail', (e) => e.innerText);
      const displayed = JSON.parse(labelPayloadDetail);
      delete displayed._id_;
      expect(displayed).toEqual(fakeDeviceType.spec.payload[i]);

      await page.click('#btnPayloadClose');

      await page.waitForSelector('.MuiDialog-paperScrollBody', { hidden: true });
    }
  }, 180000);

  test('Delete Payload correctly', async () => {
    const deleteIndex = faker.random.number({ min: 0, max: fakeDeviceType.spec.payload.length - 1 });
    const deletedPayload = fakeDeviceType.spec.payload[deleteIndex];

    await page.click(`#btnRemove-${deleteIndex}`);

    await page.click('.btnSaveDeviceType');

    await page.waitForSelector('[id^=labelName]');

    await page.click('#btnEditDeviceType-0');

    await page.waitForResponse((res) => res.url().match(/http:\/\/localhost:8080\/api\/deviceTypes\/.+/) && res.status() === 200);

    const labelAttributeNams = await page.$$eval('[id^=labelAttributeName]', (e) => e.map((item) => item.innerText));

    labelAttributeNams.forEach((name) => {
      expect(name).not.toBe(deletedPayload.name);
    });

    await page.click('.btnSaveDeviceType');
  }, 180000);

  test('NG by Device Type with empty fields', async () => {
    await page.waitForSelector('.btnAddDeviceType');

    await page.click('.btnAddDeviceType');
    await page.waitForSelector('#lableEditorTitle');

    const html = await page.$eval('#lableEditorTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');

    await page.waitForSelector('[class*=form]');

    await inputHelper.inputDeviceType(page, emptyDeviceType);

    await page.click('.btnSaveDeviceType');

    const errorName = await page.$eval('#inputDeviceTypeName-helper-text', (e) => e.innerText);
    expect(errorName).toBe('Please enter the name of the Device Type');

    const errorTopic = await page.$eval('#inputDataTopic-helper-text', (e) => e.innerText);
    expect(errorTopic).toBe('Please enter the topic for the Device Type');

    const errorDuration = await page.$eval('#inputDuration-helper-text', (e) => e.innerText);
    expect(errorDuration).toBe('Please enter the duration of the Device Type');

    const errorInterval = await page.$eval('#inputInterval-helper-text', (e) => e.innerText);
    expect(errorInterval).toBe('Please enter the interval of the Device Type');

    await page.click('#btnCancel');
  }, 180000);

  test('NG by Device Type with invalid fields', async () => {
    await page.waitForSelector('.btnAddDeviceType');

    await page.click('.btnAddDeviceType');
    await page.waitForSelector('#lableEditorTitle');

    const html = await page.$eval('#lableEditorTitle', (e) => e.innerHTML);
    expect(html).toBe('Device Type Definition');

    await page.waitForSelector('[class*=form]');

    await inputHelper.inputDeviceType(page, invalidDeviceType);

    await page.click('.btnSaveDeviceType');

    const errorDuration = await page.$eval('#inputDuration-helper-text', (e) => e.innerText);
    expect(errorDuration).toBe('Value of the duration must equal or greater than 60000');

    const errorInterval = await page.$eval('#inputInterval-helper-text', (e) => e.innerText);
    expect(errorInterval).toBe('Value of the interval must equal or greater than 1000');

    await page.click('#btnCancel');
  }, 180000);
});
