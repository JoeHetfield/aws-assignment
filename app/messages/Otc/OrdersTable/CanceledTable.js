
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.CanceledTable';

const definedMessages = defineMessages({
  createdDate: {
    id: `${prefix}.createdDate`,
    description: '下单时间',
    defaultMessage: 'Created Date',
  },
  orderId: {
    id: `${prefix}.orderId`,
    description: '订单号',
    defaultMessage: 'Order ID',
  },
  type: {
    id: `${prefix}.type`,
    description: '类型',
    defaultMessage: 'Type',
  },
  token: {
    id: `${prefix}.token`,
    description: '币种',
    defaultMessage: 'Token',
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
  status: {
    id: `${prefix}.status`,
    description: '状态',
    defaultMessage: 'Status',
  },
  canceledByBuyer: {
    id: `${prefix}.canceledByBuyer`,
    description: '买家取消',
    defaultMessage: 'Canceled By Buyer',
  },
  canceledByService: {
    id: `${prefix}.canceledByService`,
    description: '客服取消',
    defaultMessage: 'Canceled By Customer Service',
  },
  canceledByTimeout: {
    id: `${prefix}.canceledByTimeout`,
    description: '超时取消',
    defaultMessage: 'Canceled By Timeout',
  },
  purchase: {
    id: `${prefix}.purchase`,
    description: '购买 {symbol}',
    defaultMessage: 'Purchase {symbol}',
  },
  sale: {
    id: `${prefix}.sale`,
    description: '出售 {symbol}',
    defaultMessage: 'Sale {symbol}',
  },
  priceAlt: {
    id: `${prefix}.priceAlt`,
    description: '价格：{value}',
    defaultMessage: 'Price: {value}',
  },
  volumeAlt: {
    id: `${prefix}.volumeAlt`,
    description: '数量：{value}',
    defaultMessage: 'Volume: {value}',
  },
});

export default definedMessages;
