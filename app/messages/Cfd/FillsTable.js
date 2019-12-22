import { defineMessages } from 'react-intl';

const prefix = 'Cfd.FillsTable';

const definedMessages = defineMessages({
  latestFills: {
    id: `${prefix}.latestFills`,
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
  quantity: {
    id: `${prefix}.quantity`,
    description: '数量',
    defaultMessage: 'Qty',
  },
});

export default definedMessages;
