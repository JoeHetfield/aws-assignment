import { defineMessages } from 'react-intl';

const prefix = 'DeviceType.Phrase';

const definedMessages = defineMessages({
  deviceTypeCount: {
    id: `${prefix}.deviceTypeCount`,
    description: '设备类型（{value}）',
    defaultMessage: 'Device Types ({value})',
  },
  addDeviceType: {
    id: `${prefix}.addDeviceType`,
    description: '添加设备类型',
    defaultMessage: 'Add Device Type',
  },
  hintDeviceTypeDefinition: {
    id: `${prefix}.hintDeviceTypeDefinition`,
    description: '定制这种自定义设备类型如何向 AWS IoT 发送数据',
    defaultMessage: 'Customize how device data of this customized type is sent to AWS IoT.',
  },
  helperDeviceTypeDefinition: {
    id: `${prefix}.helperDeviceTypeDefinition`,
    description: '设备类型的通常名称',
    defaultMessage: 'The common name of the device type.',
  },
  helperVisibility: {
    id: `${prefix}.helperVisibility`,
    description: '设备类型的可见性。选择 “共享” 来允许团队成员在模拟中使用此设备类型',
    defaultMessage: 'The visibility of device type. Selecting "Shared" allows members to use this device type in simulations.',
  },
  helperDataTopic: {
    id: `${prefix}.helperDataTopic`,
    description: '单个传感器数据发送的目标主题',
    defaultMessage: 'The topic where individual sensor data is sent.',
  },
  helperDataTransmissionDuration: {
    id: `${prefix}.helperDataTransmissionDuration`,
    description: '设备将向定义的主题模拟发送数据多久（毫秒）[不可低于 60000]',
    defaultMessage: 'How long the device will simulate sending data to the defined data topic (milliseconds) [must be >= 60000].',
  },
  helperDataTransmissionInterval: {
    id: `${prefix}.helperDataTransmissionInterval`,
    description: '在模拟期间设备发送数据有多频繁（毫秒）[不可低于 2000]',
    defaultMessage: 'How often devices will send data during a simulation (milliseconds) [must be >= 1000].',
  },
  hintMessagePayload: {
    id: `${prefix}.hintMessagePayload`,
    description: '定义设备将要模拟的消息负载',
    defaultMessage: 'Define the message payload that will be simulated for the device.',
  },
  addAttribute: {
    id: `${prefix}.addAttribute`,
    description: '添加属性',
    defaultMessage: 'Add Attribute',
  },
  viewConfig: {
    id: `${prefix}.viewConfig`,
    description: '配置预览',
    defaultMessage: 'View Config',
  },
  helperAttributeName: {
    id: `${prefix}.helperAttributeName`,
    description: '消息属性的名称',
    defaultMessage: 'Name of the message attribute.',
  },
  helperAttributeDataType: {
    id: `${prefix}.helperAttributeDataType`,
    description: '消息属性的数据类型',
    defaultMessage: 'Data type of the message attribute.',
  },
});

export default definedMessages;
