import { defineMessages } from 'react-intl';

const prefix = 'Spot.Menu';

const definedMessages = defineMessages({
  tradePair: {
    id: `${prefix}.tradePair`,
    description: '交易币种',
    defaultMessage: 'Trade Pair',
  },
  lastPrice: {
    id: `${prefix}.lastPrice`,
    description: '最新价',
    defaultMessage: 'Last Price',
  },
  fluctuation: {
    id: `${prefix}.fluctuation`,
    description: '涨跌幅',
    defaultMessage: 'Change Rate',
  },
});

export default definedMessages;
