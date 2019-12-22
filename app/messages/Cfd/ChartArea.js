import { defineMessages } from 'react-intl';

const prefix = 'Cfd.ChartArea';

const definedMessages = defineMessages({
  dailyHigh: {
    id: `${prefix}.dailyHigh`,
    description: '24H 最高价',
    defaultMessage: '24H High',
  },
  dailyLow: {
    id: `${prefix}.dailyLow`,
    description: '24H 最低价',
    defaultMessage: '24H Low',
  },
  fluctuation: {
    id: `${prefix}.fluctuation`,
    description: '涨跌幅',
    defaultMessage: 'Fluctuation',
  },
  price: {
    id: `${prefix}.price`,
    description: '价格',
    defaultMessage: 'Price',
  },
  priceUnit: {
    id: `${prefix}.priceUnit`,
    description: '{price} {symbol} / 手',
    defaultMessage: '{price} {symbol} / lot',
  },
  settlementRate: {
    id: `${prefix}.settlementRate`,
    description: '隔夜费率',
    defaultMessage: 'Settlement Rate',
  },
  settlementTime: {
    id: `${prefix}.settlementTime`,
    description: '结算时间',
    defaultMessage: 'Settlement At',
  },
  realtimeChart: {
    id: `${prefix}.realtimeChart`,
    description: '分时',
    defaultMessage: 'Real Time Chart',
  },
  candlestickChart: {
    id: `${prefix}.candlestickChart`,
    description: 'K 线图',
    defaultMessage: 'Candlestick Chart',
  },
  indicator: {
    id: `${prefix}.indicator`,
    description: '+指标',
    defaultMessage: 'Indicator',
  },
});

export default definedMessages;
