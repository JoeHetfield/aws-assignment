import { defineMessages } from 'react-intl';

const prefix = 'Cfd.PositionsTable';

const definedMessages = defineMessages({
  realtimeChart: {
    id: `${prefix}.realtimeChart`,
    description: '分时图',
    defaultMessage: 'Real Time',
  },
  candlestickChart: {
    id: `${prefix}.candlestickChart`,
    description: 'K 线图',
    defaultMessage: 'Candlestick',
  },
  positionInfo: {
    id: `${prefix}.positionInfo`,
    description: '仓位信息',
    defaultMessage: 'Position Info',
  },
  orderInfo: {
    id: `${prefix}.orderInfo`,
    description: '订单信息',
    defaultMessage: 'Order Info',
  },
  openedPosition: {
    id: `${prefix}.openedPosition`,
    description: '当前仓位',
    defaultMessage: 'Open Positions',
  },
  limitOrders: {
    id: `${prefix}.limitOrders`,
    description: '指价委托',
    defaultMessage: 'Limit Orders',
  },
  closedPosition: {
    id: `${prefix}.closedPosition`,
    description: '已平仓仓位',
    defaultMessage: 'Closed Positions',
  },
  cancelAll: {
    id: `${prefix}.cancelAll`,
    description: '全部撤单',
    defaultMessage: 'Cancel All Orders',
  },
  liquidateAll: {
    id: `${prefix}.liquidateAll`,
    description: '全部平仓',
    defaultMessage: 'Liquidate All Positions',
  },
  createdDate: {
    id: `${prefix}.createdDate`,
    description: '创建时间',
    defaultMessage: 'Create Date',
  },
  liquidateDate: {
    id: `${prefix}.liquidateDate`,
    description: '平仓时间',
    defaultMessage: 'Liquidate Date',
  },
  cancelDate: {
    id: `${prefix}.cancelDate`,
    description: '撤单时间',
    defaultMessage: 'Cancel Date',
  },
  instrumentName: {
    id: `${prefix}.instrumentName`,
    description: '合约名称',
    defaultMessage: 'Instrument Name',
  },
  direction: {
    id: `${prefix}.direction`,
    description: '方向',
    defaultMessage: 'Direction',
  },
  size: {
    id: `${prefix}.size`,
    description: '数量',
    defaultMessage: 'Size',
  },
  leverage: {
    id: `${prefix}.leverage`,
    description: '杠杆',
    defaultMessage: 'Leverage',
  },
  margin: {
    id: `${prefix}.margin`,
    description: '保证金',
    defaultMessage: '保证金',
  },
  entryPrice: {
    id: `${prefix}.entryPrice`,
    description: '开仓价',
    defaultMessage: 'Entry Price',
  },
  executePrice: {
    id: `${prefix}.executePrice`,
    description: '执行价',
    defaultMessage: 'Execute Price',
  },
  stopProfitPrice: {
    id: `${prefix}.stopProfitPrice`,
    description: '止盈价',
    defaultMessage: 'Stop Profit Price',
  },
  stopLossPrice: {
    id: `${prefix}.stopLossPrice`,
    description: '止损价',
    defaultMessage: 'Stop Loss Price',
  },
  unrealizedPnl: {
    id: `${prefix}.unrealizedPnl`,
    description: '浮动盈亏',
    defaultMessage: 'Unrealized Pnl',
  },
  closePrice: {
    id: `${prefix}.closePrice`,
    description: '平仓价',
    defaultMessage: 'Close Price',
  },
  liquidateBy: {
    id: `${prefix}.liquidateBy`,
    description: '平仓方式',
    defaultMessage: 'Liquidate By',
  },
  realizedPnl: {
    id: `${prefix}.realizedPnl`,
    description: '盈亏',
    defaultMessage: 'Profit / Loss',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费',
    defaultMessage: 'Commission',
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
  manual: {
    id: `${prefix}.manual`,
    description: '手动平仓',
    defaultMessage: 'Manual',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '撤单',
    defaultMessage: 'Cancel',
  },
  liquidate: {
    id: `${prefix}.liquidate`,
    description: '平仓',
    defaultMessage: 'Liquidate',
  },
  leverageUnit: {
    id: `${prefix}.leverageUnit`,
    description: '{leverage}倍杠杆',
    defaultMessage: '{leverage}x Leverage',
  },
  lotsUnit: {
    id: `${prefix}.lotsUnit`,
    description: '{quantity}手',
    defaultMessage: '{quantity} lots',
  },
  scoreBoard: {
    id: `${prefix}.scoreBoard`,
    description: '成绩单',
    defaultMessage: 'Score Board',
  },
  lastPrice: {
    id: `${prefix}.lastPrice`,
    description: '最新价',
    defaultMessage: 'Last Price',
  },
});

export default definedMessages;
