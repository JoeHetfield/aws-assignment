const confs = {
  development: {
    ws: 'wss://dev.aws.simulator.com',
    api: 'https://dev.aws.simulator.com',
    brand: 'Device Simulator',
  },
  test: {
    ws: 'wss://test.aws.simulator.com',
    api: 'https://test.aws.simulator.com',
    brand: 'Device Simulator',
  },
  production: {
    ws: 'wss://aws.simulator.com',
    api: 'https://aws.simulator.com',
    brand: 'Device Simulator',
  },
};

export default confs[process.env.NODE_ENV];
