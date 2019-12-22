import { defineMessages } from 'react-intl';

const prefix = 'Spot.FillsTable';

const definedMessages = defineMessages({
  fills: {
    id: `${prefix}.fills`,
    description: '最新成交',
    defaultMessage: 'Latest Fills',
  },
  date: {
    id: `${prefix}.date`,
    description: '时间',
    defaultMessage: 'Date',
  },
  price: {
    id: `${prefix}.price`,
    description: '价格',
    defaultMessage: 'Price',
  },
  volume: {
    id: `${prefix}.volume`,
    description: '数量',
    defaultMessage: 'Volume',
  },
});

export default definedMessages;
