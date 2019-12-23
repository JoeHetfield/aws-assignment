import { async } from 'utils';
import updateList from 'ramda/es/update';
import mergeDeepRight from 'ramda/es/mergeDeepRight';

let initData = [{
  typeId: 'PjYSsqklZ',
  userId: 'joe_19840729_hotmail_com',
  updatedAt: '2019-12-23T14:09:44Z',
  visibility: 'private',
  spec: {
    duration: 60000,
    topic: '/sample/topic',
    interval: 2000,
    payload: [{
      name: 'g47qEbvh1',
      type: 'id',
      _id_: 'g47qEbvh1',
    }, {
      default: '1',
      name: 'yEWV3sWvO',
      bseed: 4,
      _id_: 'yEWV3sWvO',
      type: 'bool',
      bmax: 5,
      bmin: 1,
    }, {
      name: '8FXpIKikR',
      _id_: '8FXpIKikR',
      default: '1',
      min: 0,
      type: 'decay',
      max: 1000,
    }, {
      dmin: 0,
      default: '1',
      precision: 2,
      name: 'iZYtFCZTX',
      imin: 0,
      _id_: 'iZYtFCZTX',
      imax: 100,
      type: 'float',
      dmax: 99,
    }, {
      name: 'n07c5bg6w',
      _id_: 'n07c5bg6w',
      default: '1',
      min: 0,
      type: 'int',
      max: 1000,
    }, {
      name: 'RcfD65JxR',
      _id_: 'RcfD65JxR',
      type: 'location',
      radius: 1609,
      lat: 38.9072,
      long: 77.0369,
    }, {
      name: 'pVyPCvbJw',
      _id_: 'pVyPCvbJw',
      type: 'object',
      payload: [{
        name: 'L_Fj-98M-',
        type: 'id',
        _id_: 'L_Fj-98M-',
      }],
    }, {
      default: 'a',
      static: true,
      smax: 20,
      name: 'cqOwWBbNm',
      _id_: 'cqOwWBbNm',
      smin: 1,
      type: 'string',
    }, {
      name: '0N4fgzXeW',
      _id_: '0N4fgzXeW',
      default: '1',
      min: 0,
      type: 'sinusoidal',
      max: 1000,
    }, {
      name: '-9Xi0Xvly',
      _id_: '-9Xi0Xvly',
      default: '1',
      static: true,
      type: 'uuid',
    }, {
      name: 'J13-T0DNP',
      _id_: 'J13-T0DNP',
      default: '1',
      static: true,
      type: 'shortid',
    }, {
      name: 'LzsIlYXYK',
      _id_: 'LzsIlYXYK',
      tsformat: 'default',
      default: '1',
      type: 'timestamp',
    }, {
      name: 'u8hlrqnKP',
      arr: ['running', 'stopped', 'starting', 'error'],
      _id_: 'u8hlrqnKP',
      static: true,
      type: 'pickOne',
    }],
  },
  createdAt: '2019-12-19T13:17:54Z',
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
  const idx = initData.findIndex((item) => item.typeId === params.typeId);
  if (idx < 0) {
    initData = [params, ...initData];
  } else {
    initData = updateList(idx, mergeDeepRight(initData[idx], params), initData);
  }

  return async.sleep(1000);
};

// ////////////////////////////////

export default {
  load,
  update,
};
