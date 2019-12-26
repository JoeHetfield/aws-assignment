import { defineMessages } from 'react-intl';

const prefix = 'DeviceType.Phrase';

const definedMessages = defineMessages({
  simulation: {
    id: `${prefix}.simulation`,
    description: '模拟工具',
    defaultMessage: 'SIMULATION',
  },
  iotSimulator: {
    id: `${prefix}.iotSimulator`,
    description: 'IoT 设备模拟器',
    defaultMessage: 'IoT Device Simulator',
  },
  subtitle: {
    id: `${prefix}.subtitle`,
    description: '测试 IoT 应用的虚拟设备模拟解决方案',
    defaultMessage: 'Virtual device simulation solution to evaluate IoT applications',
  },
  explaination: {
    id: `${prefix}.explaination`,
    description: 'IoT 设备模拟器可以帮你轻松构建大量虚拟设备，通过收集、处理、分析和响应这些设备生成的数据来测试你的 IoT 应用程序。',
    defaultMessage: 'The IoT Device Simulator helps you easily build a pool of virtual devices to evaluate your IoT applications that gather, process, analyze and act on data generated by connected devices.',
  },
  createDeviceType: {
    id: `${prefix}.createDeviceType`,
    description: '创建设备类型',
    defaultMessage: 'Create a Device Type',
  },
  createDevice: {
    id: `${prefix}.createDevice`,
    description: '创建设备',
    defaultMessage: 'Create a Device',
  },
  about: {
    id: `${prefix}.about`,
    description: '关于此应用',
    defaultMessage: 'About this Application',
  },
  start: {
    id: `${prefix}.start`,
    description: '从这里开始',
    defaultMessage: 'Getting Started',
  },
});

export default definedMessages;
