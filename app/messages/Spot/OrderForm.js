import { defineMessages } from 'react-intl';

const prefix = 'Spot.OrderForm';

const definedMessages = defineMessages({
  title: {
    id: `${prefix}.title`,
    description: '卖出',
    defaultMessage: 'Sell',
  },
  buy: {
    id: `${prefix}.buy`,
    description: '买入',
    defaultMessage: 'Buy',
  },
  limit: {
    id: `${prefix}.limit`,
    description: '限价',
    defaultMessage: 'Limit',
  },
  market: {
    id: `${prefix}.market`,
    description: '市价',
    defaultMessage: 'Market',
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
  amount: {
    id: `${prefix}.amount`,
    description: '金额',
    defaultMessage: 'Amount',
  },
  priceHint: {
    id: `${prefix}.priceHint`,
    defaultMessage: 'Please Enter the Price',
    description: '请输入价格',
  },
  volumeHint: {
    id: `${prefix}.volumeHint`,
    defaultMessage: 'Please Enter the Volume',
    description: '请输入数量',
  },
  amountHint: {
    id: `${prefix}.amountHint`,
    defaultMessage: 'Please Enter the Amount',
    description: '请输入金额',
  },
  bestPrice: {
    id: `${prefix}.bestPrice`,
    defaultMessage: 'Best Market Price',
    description: '以市场最优价格成交',
  },
  actualVolume: {
    id: `${prefix}.actualVolume`,
    defaultMessage: 'Actual Filled Volume',
    description: '以实际成交数量为准',
  },
  maxBidVolume: {
    id: `${prefix}.maxBidVolume`,
    defaultMessage: 'Max Purchase Volume: {max}',
    description: '最多购买：{max}',
  },
  maxAskVolume: {
    id: `${prefix}.maxAskVolume`,
    defaultMessage: 'Max Sale Volume: {max}',
    description: '最多卖出：{max}',
  },
  maxVolume: {
    id: `${prefix}.maxVolume`,
    defaultMessage: 'Max Purchase Volume: {max}',
    description: '最多购买：{max}',
  },

  minAmount: {
    id: `${prefix}.minAmount`,
    defaultMessage: 'Min Purchase Volume: {min}',
    description: '最小交易量：{min}',
  },
  bid: {
    id: `${prefix}.bid`,
    description: '买入 {symbol}',
    defaultMessage: 'Buy {symbol}',
  },
  ask: {
    id: `${prefix}.ask`,
    description: '卖出 {symbol}',
    defaultMessage: 'Sell {symbol}',
  },
  success: {
    id: `${prefix}.success`,
    description: '下单成功',
    defaultMessage: 'Order placement succeed',
  },
  signin: {
    id: `${prefix}.signin`,
    defaultMessage: 'Sign In to Trade',
    description: '登录以交易',
  },
  balance: {
    id: `${prefix}.balance`,
    defaultMessage: '{symbo} Balance: {balance}',
    description: '{symbol} 余额：{balance}',
  },
  type: {
    id: `${prefix}.type`,
    defaultMessage: 'Type',
    description: '委托',
  },
});

export default definedMessages;
