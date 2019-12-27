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
  goal: {
    id: `${prefix}.goal`,
    description: '此 APP 的目的',
    defaultMessage: 'Goal of this App',
  },
  goalContent: {
    id: `${prefix}.goalContent`,
    description: '希望这个 App 能够尽可能忠实地重现 aws iot 模拟器应用程序。',
    defaultMessage: 'This App is trying to reproduce the aws iot-simulator console as faithful as possible.',
  },
  usage: {
    id: `${prefix}.usage`,
    description: '使用注意',
    defaultMessage: 'Not on Usage',
  },
  usageContent: {
    id: `${prefix}.usageContent`,
    description: '为了更好地实现前端工程，我在 devServer 上简单地模拟了一些后端接口，因此你需要启动 devServer 才能浏览这个 App。另外，关于“设备类型”的数据存储在 devServer 的内存中，所以你的输入可以在服务器运行期间保存，但是如果 devServer 重启的话，这些数据就消失了。',
    defaultMessage: 'For better frontend engineering, few backend apis are mocked in the webpack devSever, that\'s why you need keep the devServer up while you browse this App. Besides, the "Device Type" data was stored in the devServer\'s memory, so your input could be persistent while you switch between different functionality, but they will be vanished after the devServer reboot.',
  },
  test: {
    id: `${prefix}.test`,
    description: '关于 E2E 测试',
    defaultMessage: 'About E2E Tests',
  },
  testContent: {
    id: `${prefix}.testContent`,
    description: '当运行 E2E 测试时，Puppeteer 会启动一个由它控制的 Chromium，模拟用户和 App 的交互过程；我认为这能更方便地理解我测试的想法，同时我没有针对 headless 浏览器调整测试用例（时间所限），所以请照此配置运行 E2E 测试',
    defaultMessage: 'When you run the E2E tests, a puppeteer controlled Chromium will start, simulate the interaction between the user and the App; that\'s because I think it\'s better way to understand my idea about the test, and I didn\'t tuning the test for headless browser (due to the time limitation), so please keep it as it is when you try out the E2E tests.',
  },
  greeting: {
    id: `${prefix}.greeting`,
    description: '感谢你的 Review，希望你能喜欢这个 App 并给我一个高分~，我非常非常希望能够得到这个职位！',
    defaultMessage: 'Thanks for your review, hope you like it and give me a high score! I love AWS and REALLY REALLY want get the position!',
  },
  start: {
    id: `${prefix}.start`,
    description: '从这里开始',
    defaultMessage: 'Getting Started',
  },
});

export default definedMessages;
