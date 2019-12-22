import { defineMessages } from 'react-intl';

const prefix = 'Spot.DepthTable';

const definedMessages = defineMessages({
  depth: {
    id: `${prefix}.depth`,
    description: '深度',
    defaultMessage: 'Depth',
  },
  aggregate: {
    id: `${prefix}.aggregate`,
    defaultMessage: '{value} DEC',
    description: '{value} 位小数',
  },
});

export default definedMessages;
