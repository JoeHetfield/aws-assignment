import { defineMessages } from 'react-intl';

const prefix = 'DeviceType.Nonu';

const definedMessages = defineMessages({
  visibility: {
    id: `${prefix}.visibility`,
    description: '可见性',
    defaultMessage: 'Visibility',
  },
  deviceTypeDefinition: {
    id: `${prefix}.deviceTypeDefinition`,
    description: '设备类型定义',
    defaultMessage: 'Device Type Definition',
  },
  deviceTypeName: {
    id: `${prefix}.deviceTypeName`,
    description: '设备类型名称',
    defaultMessage: 'Device Type Name',
  },
  dataTopic: {
    id: `${prefix}.dataTopic`,
    description: '数据主题',
    defaultMessage: 'Data Topic',
  },
  dataTransmissionDuration: {
    id: `${prefix}.dataTransmissionDuration`,
    description: '数据传送时间',
    defaultMessage: 'Data Transmission Duration',
  },
  dataTransmissionInterval: {
    id: `${prefix}.dataTransmissionInterval`,
    description: '数据传送间隔',
    defaultMessage: 'Data Transmission Interval',
  },
  messagePayload: {
    id: `${prefix}.messagePayload`,
    description: '消息负载',
    defaultMessage: 'Message Payload',
  },
  messageAttribute: {
    id: `${prefix}.messageAttribute`,
    description: '消息属性',
    defaultMessage: 'Message Attribute',
  },
  dataType: {
    id: `${prefix}.dataType`,
    description: '数据类型',
    defaultMessage: 'Data Type',
  },
  staticValue: {
    id: `${prefix}.staticValue`,
    description: '静态值',
    defaultMessage: 'Static Value',
  },
  actions: {
    id: `${prefix}.actions`,
    description: '操作',
    defaultMessage: 'Actions',
  },
  sampleMessagePayload: {
    id: `${prefix}.sampleMessagePayload`,
    description: '消息负载样本',
    defaultMessage: 'Sample Message Payload',
  },
  payloadConfig: {
    id: `${prefix}.payloadConfig`,
    description: '负载配置',
    defaultMessage: 'Payload Config',
  },
  attributeName: {
    id: `${prefix}.attributeName`,
    description: '属性名称',
    defaultMessage: 'Attribute name',
  },
  attributeDataType: {
    id: `${prefix}.attributeDataType`,
    description: '属性数据类型',
    defaultMessage: 'Attribute data type',
  },
});

export default definedMessages;
