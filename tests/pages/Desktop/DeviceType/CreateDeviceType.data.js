import faker from 'faker';

export const fakeDeviceType = {
  name: faker.random.word(),
  visibility: 'public',
  spec: {
    topic: faker.random.word(),
    duration: String(faker.random.number({ min: 60000 })),
    interval: String(faker.random.number({ min: 2000 })),
    payload: [{
      name: faker.random.word(),
      type: 'id',
    }, {
      name: faker.random.word(),
      type: 'bool',
      bmax: String(faker.random.number({ min: 0 })),
      bmin: String(faker.random.number({ min: 0 })),
      bseed: String(faker.random.number({ min: 0 })),
      default: String(faker.random.number({ min: 0 })),
    }, {
      name: faker.random.word(),
      type: 'decay',
      max: String(faker.random.number({ min: 0 })),
      min: String(faker.random.number({ min: 0 })),
      default: String(faker.random.number({ min: 0 })),
    }, {
      name: faker.random.word(),
      type: 'float',
      precision: String(faker.random.number({ min: 0, max: 8 })),
      imax: String(faker.random.number({ min: 0 })),
      imin: String(faker.random.number({ min: 0 })),
      dmax: String(faker.random.number({ min: 0 })),
      dmin: String(faker.random.number({ min: 0 })),
      default: String(faker.random.number({ min: 0 })),
    }, {
      name: faker.random.word(),
      type: 'int',
      max: String(faker.random.number({ min: 0 })),
      min: String(faker.random.number({ min: 0 })),
      default: String(faker.random.number({ min: 0 })),
    }, {
      name: faker.random.word(),
      type: 'location',
      radius: String(faker.random.number({ min: 0 })),
      lat: String(faker.address.latitude()),
      long: String(faker.address.longitude()),
    }, {
      name: faker.random.word(),
      type: 'object',
    }, {
      name: faker.random.word(),
      type: 'string',
      smax: String(faker.random.number({ min: 0 })),
      smin: String(faker.random.number({ min: 0 })),
      static: faker.random.boolean(),
      default: faker.random.word(),
    }, {
      name: faker.random.word(),
      type: 'sinusoidal',
      max: String(faker.random.number({ min: 0 })),
      min: String(faker.random.number({ min: 0 })),
      default: String(faker.random.number({ min: 0 })),
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
      default: String(faker.random.number({ min: 0 })),
    }, {
      name: faker.random.word(),
      type: 'pickOne',
      arr: faker.random.words(),
      static: faker.random.boolean(),
    }],
  },
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
};
