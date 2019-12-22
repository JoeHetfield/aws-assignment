import { defineMessages } from 'react-intl';

const prefix = 'Cfd.OrderForm';

const definedMessages = defineMessages({
  trade: {
    id: `${prefix}.trade`,
    description: '交易',
    defaultMessage: 'Trade',
  },
  limit: {
    id: `${prefix}.limit`,
    description: '指价单',
    defaultMessage: 'Limit',
  },
  market: {
    id: `${prefix}.market`,
    description: '市价单',
    defaultMessage: 'Market',
  },
  executePrice: {
    id: `${prefix}.executePrice`,
    description: '执行价格',
    defaultMessage: 'Execute Pirce',
  },
  size: {
    id: `${prefix}.size`,
    description: '手数（最大 {value} 手）',
    defaultMessage: 'Size (Max {value} Lots)',
  },
  leverage: {
    id: `${prefix}.leverage`,
    description: '杠杆',
    defaultMessage: 'Leverage',
  },
  stopProfit: {
    id: `${prefix}.stopProfit`,
    description: '止盈',
    defaultMessage: 'Stop Profit',
  },
  stopLoss: {
    id: `${prefix}.stopLoss`,
    description: '止损',
    defaultMessage: 'Stop Loss',
  },
  default: {
    id: `${prefix}.default`,
    description: '默认',
    defaultMessage: 'Default',
  },
  long: {
    id: `${prefix}.long`,
    description: '买入 / 做多',
    defaultMessage: 'Buy / Long',
  },
  short: {
    id: `${prefix}.short`,
    description: '卖出 / 做空',
    defaultMessage: 'Sell / Short',
  },
  priceUnit: {
    id: `${prefix}.priceUnit`,
    description: '{price} {symbol} / 手',
    defaultMessage: '{price} {symbol} / lot',
  },
  evaluation: {
    id: `${prefix}.evaluation`,
    description: '{margin} USDT ≈ {value} {symbol}',
    defaultMessage: '{margin} USDT ≈ {value} {symbol}',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费：{value}',
    defaultMessage: 'Commission: {value}',
  },
  emptySize: {
    id: `${prefix}.emptySize`,
    description: '请输入数量',
    defaultMessage: 'Please enter the size',
  },
  tooSmallSize: {
    id: `${prefix}.tooSmallSize`,
    description: '不能低于 {size} 手',
    defaultMessage: 'Size can\'t less than {size}',
  },
  emptyPrice: {
    id: `${prefix}.emptyPrice`,
    description: '请输入执行价格',
    defaultMessage: 'Please enter the execute price',
  },
  success: {
    id: `${prefix}.success`,
    description: '开仓成功',
    defaultMessage: 'Position successfully opened',
  },
});

export default definedMessages;
