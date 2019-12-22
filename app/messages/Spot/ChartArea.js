import { defineMessages } from 'react-intl';

const prefix = 'Spot.ChartArea';

const definedMessages = defineMessages({
  dailyHigh: {
    id: `${prefix}.dailyHigh`,
    description: '24H 高',
    defaultMessage: '24H High',
  },
  dailyHighAlt: {
    id: `${prefix}.dailyHighAlt`,
    description: '24H 高：{value}',
    defaultMessage: '24H High: {value}',
  },
  dailyLow: {
    id: `${prefix}.dailyLow`,
    description: '24H 低',
    defaultMessage: '24H Low',
  },
  dailyLowAlt: {
    id: `${prefix}.dailyLowAlt`,
    description: '24H 低：{value}',
    defaultMessage: '24H Low: {value}',
  },
  dailyVolume: {
    id: `${prefix}.dailyVolume`,
    description: '24H 额',
    defaultMessage: '24H Volume',
  },
  dailyVolumeAlt: {
    id: `${prefix}.dailyVolumeAlt`,
    description: '24H 额：{value} {unit}',
    defaultMessage: '24H Volume: {value} {unit}',
  },
  realtimeChart: {
    id: `${prefix}.realtimeChart`,
    description: '分时图',
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
