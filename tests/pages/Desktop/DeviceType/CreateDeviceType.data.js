import faker from 'faker';

export const fakeDeviceType = {
  name: faker.random.word(),
  visibility: 'public',
  spec: {
    topic: faker.random.word(),
    duration: faker.random.number({ min: 60000 }),
    interval: faker.random.number({ min: 2000 }),
    payload: [{
      name: faker.random.word(),
      type: 'id',
    }, {
      name: faker.random.word(),
      type: 'bool',
      bmax: faker.random.number({ min: 0 }),
      bmin: faker.random.number({ min: 0 }),
      bseed: faker.random.number({ min: 0 }),
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'decay',
      max: faker.random.number({ min: 0 }),
      min: faker.random.number({ min: 0 }),
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'float',
      precision: faker.random.number({ min: 0, max: 8 }),
      imax: faker.random.number({ min: 0 }),
      imin: faker.random.number({ min: 0 }),
      dmax: faker.random.number({ min: 0 }),
      dmin: faker.random.number({ min: 0 }),
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'int',
      max: faker.random.number({ min: 0 }),
      min: faker.random.number({ min: 0 }),
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'location',
      radius: faker.random.number({ min: 0 }),
      lat: faker.address.latitude(),
      long: faker.address.longitude(),
    }, {
      name: faker.random.word(),
      type: 'object',
    }, {
      name: faker.random.word(),
      type: 'string',
      smax: faker.random.number({ min: 0 }),
      smin: faker.random.number({ min: 0 }),
      static: faker.random.boolean(),
      default: faker.random.word(),
    }, {
      name: faker.random.word(),
      type: 'sinusoidal',
      max: faker.random.number({ min: 0 }),
      min: faker.random.number({ min: 0 }),
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'uuid',
      static: faker.random.boolean(),
      default: faker.random.uuid(),
    }, {
      name: faker.random.word(),
      type: 'shortid',
      static: faker.random.boolean(),
      default: faker.random.uuid(),
    }, {
      name: faker.random.word(),
      type: 'timestamp',
      tsformat: 'default',
      default: faker.random.number({ min: 0 }),
    }, {
      name: faker.random.word(),
      type: 'pickOne',
      arr: faker.random.words(),
      static: faker.random.boolean(),
    }],
  },
};

export const emptyDeviceType = {
  name: '',
  visibility: 'public',
  spec: {
    topic: '',
    duration: '',
    interval: '',
    payload: [],
  },
};

export const invalidDeviceType = {
  name: 'invalid',
  visibility: 'public',
  spec: {
    topic: 'invalid',
    duration: '59999',
    interval: '1999',
    payload: [],
  },
};
