/* eslint-disable no-await-in-loop */

export const inputDeviceType = async (page, data) => {
  await page.click('input[name=name]');
  await page.type('input[name=name]', String(data.name));

  await page.click('#mui-component-select-visibility');
  await page.click(`li[data-value=${data.visibility}]`);

  await page.click('input[name="spec.topic"]', { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type('input[name="spec.topic"]', String(data.spec.topic));

  await page.click('input[name="spec.duration"]', { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type('input[name="spec.duration"]', String(data.spec.duration));

  await page.click('input[name="spec.interval"]', { clickCount: 3 });
  await page.keyboard.press('Backspace');
  await page.type('input[name="spec.interval"]', String(data.spec.interval));

  for (let i = 0; i < data.spec.payload.length; i += 1) {
    await page.click('.btnAddAttribute');
    await page.waitForSelector('.MuiDialog-paperScrollBody');

    await page.click('.inputAttributeName', { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type('.inputAttributeName', String(data.spec.payload[i].name));

    await page.click('#mui-component-select-type');
    await page.click(`li[data-value=${data.spec.payload[i].type}]`);

    await page.waitForSelector('.MuiMenu-list', { hidden: true });

    switch (data.spec.payload[i].type) {
      case 'bool':
        await page.click('input[name=bmin]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=bmin]', String(data.spec.payload[i].bmin));

        await page.click('input[name=bmax]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=bmax]', String(data.spec.payload[i].bmax));

        await page.click('input[name=bseed]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=bseed]', String(data.spec.payload[i].bseed));

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'decay':
      case 'int':
      case 'sinusoidal':
        await page.click('input[name=min]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=min]', String(data.spec.payload[i].min));

        await page.click('input[name=max]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=max]', String(data.spec.payload[i].max));

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'float':
        await page.click('input[name=precision]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=precision]', String(data.spec.payload[i].precision));

        await page.click('input[name=imin]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=imin]', String(data.spec.payload[i].imin));

        await page.click('input[name=imax]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=imax]', String(data.spec.payload[i].imax));

        await page.click('input[name=dmin]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=dmin]', String(data.spec.payload[i].dmin));

        await page.click('input[name=dmax]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=dmax]', String(data.spec.payload[i].dmax));

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'location':
        await page.click('input[name=radius]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=radius]', String(data.spec.payload[i].radius));

        await page.click('input[name=lat]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=lat]', String(data.spec.payload[i].lat));

        await page.click('input[name=long]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=long]', String(data.spec.payload[i].long));

        break;

      case 'string':
        await page.click('input[name=smin]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=smin]', String(data.spec.payload[i].smin));

        await page.click('input[name=smax]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=smax]', String(data.spec.payload[i].smax));

        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'uuid':
      case 'shortid':
        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'timestamp':
        await page.click('#mui-component-select-tsformat');
        await page.click(`li[data-value=${data.spec.payload[i].tsformat}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=default]', String(data.spec.payload[i].default));

        break;

      case 'pickOne':
        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=arr]', { clickCount: 3 });
        await page.keyboard.press('Backspace');
        await page.type('input[name=arr]', String(data.spec.payload[i].arr));

        break;

      default:
        break;
    }

    await page.click('.btnSaveAttribute');

    await page.waitForSelector('.MuiDialog-paperScrollBody', { hidden: true });
  }
};
