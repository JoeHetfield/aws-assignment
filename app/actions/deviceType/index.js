import { async } from 'utils';
import updateList from 'ramda/es/update';
import mergeDeepRight from 'ramda/es/mergeDeepRight';

let initData = [{
  typeId: 'PjYSsqklZ',
  userId: 'joe_19840729_hotmail_com',
  updatedAt: Date.now(),
  visibility: 'private',
  spec: {
    duration: 60000,
    topic: '/sample/topic',
    interval: 2000,
    payload: [{
      name: 'TestAttr_ID',
      type: 'id',
      _id_: 'CGZASyWMg',
    }, {
      name: 'TestAttr_int',
      _id_: 'AUxJYqbaX',
      min: 0,
      type: 'int',
      max: 1000,
    }],
  },
  createdAt: Date.now(),
  name: 'TestDevice',
  custom: true,
}];

// ////////////////////////////////

const load = (typeId) => {
  if (typeId) {
    const result = initData.find((item) => item.typeId === typeId) || {};
    return async.sleep(0).then(() => result);
  }

  return async.sleep(1000).then(() => initData);
};

const update = (params) => {
  if (params.typeId) {
    const idx = initData.findIndex((item) => item.typeId === params.typeId);
    initData = updateList(idx, mergeDeepRight(initData[idx], params), initData);
  } else {
    initData = [params, ...initData];
  }

  return async.sleep(1000);
};

// ////////////////////////////////

export default {
  load,
  update,
};
