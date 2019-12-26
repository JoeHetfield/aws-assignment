import { defineMessages } from 'react-intl';

const prefix = 'Common.Phrase';

const definedMessages = defineMessages({
  underConstruction: {
    id: `${prefix}.underConstruction`,
    description: '建设中……',
    defaultMessage: 'Under Construction...',
  },
  totalDevices: {
    id: `${prefix}.totalDevices`,
    description: '共 5 台',
    defaultMessage: '5 Total',
  },
  runningSimulations: {
    id: `${prefix}.runningSimulations`,
    description: '共 3 组运行中',
    defaultMessage: '3 Running',
  },
});

export default definedMessages;
