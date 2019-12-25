/* eslint-disable no-await-in-loop */

export const inputDeviceType = async (page, data) => {
  await page.click('input[name=name]');
  await page.type('input[name=name]', data.name);

  await page.click('#mui-component-select-visibility');
  await page.click(`li[data-value=${data.visibility}]`);

  await page.click('input[name="spec.topic"]', { clickCount: 3 });
  await page.type('input[name="spec.topic"]', data.spec.topic);

  await page.click('input[name="spec.duration"]', { clickCount: 3 });
  await page.type('input[name="spec.duration"]', data.spec.duration);

  await page.click('input[name="spec.interval"]', { clickCount: 3 });
  await page.type('input[name="spec.interval"]', data.spec.interval);

  for (let i = 0; i < data.spec.payload.length; i += 1) {
    await page.click('.btnAddAttribute');
    await page.waitForSelector('.MuiDialog-paperScrollBody');

    await page.click('.inputAttributeName', { clickCount: 3 });
    await page.type('.inputAttributeName', data.spec.payload[i].name);

    await page.click('#mui-component-select-type');
    await page.click(`li[data-value=${data.spec.payload[i].type}]`);

    await page.waitForSelector('.MuiMenu-list', { hidden: true });

    switch (data.spec.payload[i].type) {
      case 'bool':
        await page.click('input[name=bmin]', { clickCount: 3 });
        await page.type('input[name=bmin]', data.spec.payload[i].bmin);

        await page.click('input[name=bmax]', { clickCount: 3 });
        await page.type('input[name=bmax]', data.spec.payload[i].bmax);

        await page.click('input[name=bseed]', { clickCount: 3 });
        await page.type('input[name=bseed]', data.spec.payload[i].bseed);

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'decay':
      case 'int':
      case 'sinusoidal':
        await page.click('input[name=min]', { clickCount: 3 });
        await page.type('input[name=min]', data.spec.payload[i].min);

        await page.click('input[name=max]', { clickCount: 3 });
        await page.type('input[name=max]', data.spec.payload[i].max);

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'float':
        await page.click('input[name=precision]', { clickCount: 3 });
        await page.type('input[name=precision]', data.spec.payload[i].precision);

        await page.click('input[name=imin]', { clickCount: 3 });
        await page.type('input[name=imin]', data.spec.payload[i].imin);

        await page.click('input[name=imax]', { clickCount: 3 });
        await page.type('input[name=imax]', data.spec.payload[i].imax);

        await page.click('input[name=dmin]', { clickCount: 3 });
        await page.type('input[name=dmin]', data.spec.payload[i].dmin);

        await page.click('input[name=dmax]', { clickCount: 3 });
        await page.type('input[name=dmax]', data.spec.payload[i].dmax);

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'location':
        await page.click('input[name=radius]', { clickCount: 3 });
        await page.type('input[name=radius]', data.spec.payload[i].radius);

        await page.click('input[name=lat]', { clickCount: 3 });
        await page.type('input[name=lat]', data.spec.payload[i].lat);

        await page.click('input[name=long]', { clickCount: 3 });
        await page.type('input[name=long]', data.spec.payload[i].long);

        break;

      case 'string':
        await page.click('input[name=smin]', { clickCount: 3 });
        await page.type('input[name=smin]', data.spec.payload[i].smin);

        await page.click('input[name=smax]', { clickCount: 3 });
        await page.type('input[name=smax]', data.spec.payload[i].smax);

        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'uuid':
      case 'shortid':
        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'timestamp':
        await page.click('#mui-component-select-tsformat');
        await page.click(`li[data-value=${data.spec.payload[i].tsformat}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=default]', { clickCount: 3 });
        await page.type('input[name=default]', data.spec.payload[i].default);

        break;

      case 'pickOne':
        await page.click('#mui-component-select-static');
        await page.click(`li[data-value=${data.spec.payload[i].static}]`);

        await page.waitForSelector('.MuiMenu-list', { hidden: true });

        await page.click('input[name=arr]', { clickCount: 3 });
        await page.type('input[name=arr]', data.spec.payload[i].arr);

        break;

      default:
        break;
    }

    await page.click('.btnSaveAttribute');

    await page.waitForSelector('.MuiDialog-paperScrollBody', { hidden: true });
  }
};
