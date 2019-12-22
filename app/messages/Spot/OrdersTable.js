import { defineMessages } from 'react-intl';

const prefix = 'Spot.OrdersTable';

const definedMessages = defineMessages({
  ordersInfo: {
    id: `${prefix}.ordersInfo`,
    description: '委托信息',
    defaultMessage: 'Orders Info',
  },
  opened: {
    id: `${prefix}.opened`,
    description: '当前委托',
    defaultMessage: 'OPENINGS',
  },
  filled: {
    id: `${prefix}.filled`,
    description: '历史委托',
    defaultMessage: 'HISTORIES',
  },
  hideOtherPairs: {
    id: `${prefix}.hideOtherPairs`,
    description: '仅显示当前币对的订单',
    defaultMessage: 'Hide other pairs',
  },
  createdDate: {
    id: `${prefix}.createdDate`,
    description: '创建时间',
    defaultMessage: 'Created Date',
  },
  limitbuy: {
    id: `${prefix}.limitbuy`,
    description: '限价买入 {symbol}',
    defaultMessage: 'Limited Buy {symbol}',
  },
  limitsell: {
    id: `${prefix}.limitsell`,
    description: '限价卖出 {symbol}',
    defaultMessage: 'Limited Sell {symbol}',
  },
  marketbuy: {
    id: `${prefix}.marketbuy`,
    description: '市价买入 {symbol}',
    defaultMessage: 'Market Buy {symbol}',
  },
  marketsell: {
    id: `${prefix}.marketsell`,
    description: '市价卖出 {symbol}',
    defaultMessage: 'Market Sell {symbol}',
  },
  buylimit: {
    id: `${prefix}.buylimitb`,
    description: '限价买入',
    defaultMessage: 'Limited Buy',
  },
  selllimit: {
    id: `${prefix}.selllimit`,
    description: '限价卖出',
    defaultMessage: 'Limited Sell ',
  },
  buymarket: {
    id: `${prefix}.buymarket`,
    description: '市价买入',
    defaultMessage: 'Market Buy',
  },
  sellmarket: {
    id: `${prefix}.sellmarket`,
    description: '市价卖出 ',
    defaultMessage: 'Market Sell ',
  },
  symbol: {
    id: `${prefix}.symbol`,
    defaultMessage: 'Pair',
    description: '交易对',
  },
  type: {
    id: `${prefix}.type`,
    defaultMessage: 'Type',
    description: '类型',
  },
  price: {
    id: `${prefix}.price`,
    defaultMessage: 'Price',
    description: '委托价',
  },
  volume: {
    id: `${prefix}.volume`,
    defaultMessage: 'Volume',
    description: '委托量',
  },
  fillRate: {
    id: `${prefix}.fillRate`,
    defaultMessage: 'Filled',
    description: '成交量',
  },
  avgPrice: {
    id: `${prefix}.avgPrice`,
    defaultMessage: 'Avg. Filled Price',
    description: '成交均价',
  },
  fullyFilled: {
    id: `${prefix}.fullyFilled`,
    defaultMessage: 'Filled',
    description: '完全成交',
  },
  withdrawn: {
    id: `${prefix}.withdrawn`,
    defaultMessage: 'Canceled',
    description: '已撤单',
  },
  partially: {
    id: `${prefix}.partially`,
    defaultMessage: 'Partially Filled ({rate})',
    description: '部分成交（{rate}）',
  },
  cancel: {
    id: `${prefix}.cancel`,
    defaultMessage: 'Cancel',
    description: '撤单',
  },
  operation: {
    id: `${prefix}.operation`,
    defaultMessage: 'Operation',
    description: '操作',
  },
  status: {
    id: `${prefix}.status`,
    defaultMessage: 'Status',
    description: '状态',
  },
  cancelAll: {
    id: `${prefix}.cancelAll`,
    defaultMessage: 'Cancel All Orders',
    description: '全部撤单',
  },
});

export default definedMessages;
