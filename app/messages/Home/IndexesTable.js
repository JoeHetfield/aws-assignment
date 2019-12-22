import { defineMessages } from 'react-intl';

const prefix = 'Home.IndexesTable';

const definedMessages = defineMessages({
  performer: {
    id: `${prefix}.performer`,
    description: '涨幅榜',
    defaultMessage: 'Performer',
  },
  turnover: {
    id: `${prefix}.turnover`,
    description: '成交额榜',
    defaultMessage: 'Turnover',
  },
  volume: {
    id: `${prefix}.volume`,
    description: '成交额',
    defaultMessage: 'Volume',
  },
  symbol: {
    id: `${prefix}.symbol`,
    description: '币种',
    defaultMessage: 'Token Name',
  },
  lastPrice: {
    id: `${prefix}.lastPrice`,
    description: '最新成交价',
    defaultMessage: 'Last Price',
  },
  trend: {
    id: `${prefix}.trend`,
    description: '趋势',
    defaultMessage: 'Trend',
  },
  dailyChange: {
    id: `${prefix}.dailyChange`,
    description: '24h 涨跌幅',
    defaultMessage: '24h Change',
  },
  dailyHigh: {
    id: `${prefix}.dailyHigh`,
    description: '24h 最高价',
    defaultMessage: '24h High',
  },
  dailyLow: {
    id: `${prefix}.dailyLow`,
    description: '24h 最低价',
    defaultMessage: '24h Low',
  },
  dailyVolume: {
    id: `${prefix}.dailyVolume`,
    description: '24h 交易量',
    defaultMessage: '24h Volume',
  },
});

export default definedMessages;
