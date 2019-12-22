
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.FilledTable';

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
  completed: {
    id: `${prefix}.completed`,
    description: '交易完成',
    defaultMessage: 'Completed',
  },
  completedByService: {
    id: `${prefix}.completedByService`,
    description: '客服手动完成',
    defaultMessage: 'Completed By Customer Service',
  },
  completedByTimeout: {
    id: `${prefix}.completedByTimeout`,
    description: '超时完成',
    defaultMessage: 'Completed By Timeout',
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
  orderIdAlt: {
    id: `${prefix}.orderIdAlt`,
    description: '订单号：{value}',
    defaultMessage: 'Order ID: {value}',
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
  seller: {
    id: `${prefix}.seller`,
    description: '卖家',
    defaultMessage: 'Seller',
  },
  buyer: {
    id: `${prefix}.buyer`,
    description: '买家',
    defaultMessage: 'Buyer',
  },
  name: {
    id: `${prefix}.name`,
    description: '{side}姓名：{name}',
    defaultMessage: '{side} Name: {name}',
  },
  contact: {
    id: `${prefix}.contact`,
    description: '联系电话：{phone}',
    defaultMessage: 'Contact Mobile No.: {phone}',
  },
  paymentDate: {
    id: `${prefix}.paymentDate`,
    description: '支付日期：{date}',
    defaultMessage: 'Date of payment: {date}',
  },
});

export default definedMessages;
