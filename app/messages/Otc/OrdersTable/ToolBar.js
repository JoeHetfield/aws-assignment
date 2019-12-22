import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.ToolBar';

const definedMessages = defineMessages({
  ordersInfo: {
    id: `${prefix}.ordersInfo`,
    description: '订单信息',
    defaultMessage: 'Orders Info',
  },
  pendingOrders: {
    id: `${prefix}.pendingOrders`,
    description: '未完成订单',
    defaultMessage: 'Pending Orders',
  },
  filledOrders: {
    id: `${prefix}.filledOrders`,
    description: '已完成订单',
    defaultMessage: 'Filled Orders',
  },
  canceledOrders: {
    id: `${prefix}.canceledOrders`,
    description: '已取消订单',
    defaultMessage: 'Canceled Orders',
  },
  publishedOffers: {
    id: `${prefix}.publishedOffers`,
    description: '广告单',
    defaultMessage: 'Published Offers',
  },
  tradingOpen: {
    id: `${prefix}.tradingOpen`,
    description: '接单中',
    defaultMessage: 'In Trading',
  },
  tradingClose: {
    id: `${prefix}.tradingClose`,
    description: '已暂停接单',
    defaultMessage: 'Trading Stopped',
  },
});

export default definedMessages;
