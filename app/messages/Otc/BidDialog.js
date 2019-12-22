import { defineMessages } from 'react-intl';

const prefix = 'Otc.BidDialog';

const definedMessages = defineMessages({
  sellerInfo: {
    id: `${prefix}.sellerInfo`,
    description: '卖家信息',
    defaultMessage: 'Seller Info',
  },
  vendor: {
    id: `${prefix}.vendor`,
    description: '广告主',
    defaultMessage: 'Vendor',
  },
  orders: {
    id: `${prefix}.orders`,
    description: '单数',
    defaultMessage: 'Total Orders',
  },
  completionRate: {
    id: `${prefix}.completionRate`,
    description: '完成率',
    defaultMessage: 'Completion Rate',
  },
  releaseTime: {
    id: `${prefix}.releaseTime`,
    description: '平均放币时间',
    defaultMessage: 'Avg. Time of Token Release',
  },
  paymentMethods: {
    id: `${prefix}.paymentMethods`,
    description: '支付方式',
    defaultMessage: 'Payment Methods',
  },
  note: {
    id: `${prefix}.note`,
    description: '交易说明',
    defaultMessage: 'Note',
  },
  orderId: {
    id: `${prefix}.orderId`,
    description: '订单号',
    defaultMessage: 'Order ID',
  },
  price: {
    id: `${prefix}.price`,
    description: '单价',
    defaultMessage: 'Price',
  },
  size: {
    id: `${prefix}.size`,
    description: '数量',
    defaultMessage: 'Size',
  },
  totalAmount: {
    id: `${prefix}.totalAmount`,
    description: '总金额',
    defaultMessage: 'Total Amount',
  },
  lowestLimit: {
    id: `${prefix}.lowestLimit`,
    description: '单笔最低限额',
    defaultMessage: 'Lowest Limit',
  },
  highestLimit: {
    id: `${prefix}.highestLimit`,
    description: '单笔最高限额',
    defaultMessage: 'Highest Limit',
  },
  buyToken: {
    id: `${prefix}.buyToken`,
    description: '购买 {symbol}',
    defaultMessage: 'Buy {symbol}',
  },
  buyAll: {
    id: `${prefix}.buyAll`,
    description: '全部购买',
    defaultMessage: 'Buy All',
  },
  fiat: {
    id: `${prefix}.fiat`,
    description: '金额',
    defaultMessage: 'Fiat Value',
  },
  confirmBuy: {
    id: `${prefix}.confirmBuy`,
    description: '确认购买',
    defaultMessage: 'Confirm',
  },
  emptySize: {
    id: `${prefix}.emptySize`,
    description: '请输入数量',
    defaultMessage: 'Please enter the size',
  },
  invalidFiat: {
    id: `${prefix}.invalidFiat`,
    description: '交易单金额不可超过 1,000,000 人民币',
    defaultMessage: 'Total amount of one transaction can\'t exceed 1,000,000 CNY',
  },
  success: {
    id: `${prefix}.success`,
    description: '下单成功',
    defaultMessage: 'Place order succeed',
  },
  vondorInfoAlt: {
    id: `${prefix}.vondorInfoAlt`,
    description: '成交 {orders} 笔，成交率 {rate}',
    defaultMessage: '{orders} orders, trunover rate: {rate}',
  },
  releaseTimeAlt: {
    id: `${prefix}.releaseTimeAlt`,
    description: '平均放币时间：{time}',
    defaultMessage: 'Avg. Time of Token Release: {time}',
  },
  orderIdAlt: {
    id: `${prefix}.orderIdAlt`,
    description: '订单号：{orderNo}',
    defaultMessage: 'OrderNo.: {orderNo}',
  },
  priceAlt: {
    id: `${prefix}.priceAlt`,
    description: '价格：{price}',
    defaultMessage: 'Price: {price}',
  },
  sizeAlt: {
    id: `${prefix}.sizeAlt`,
    description: '数量：{size} {symbol}',
    defaultMessage: 'Size: {size} {symbol}',
  },
  totalAmountAlt: {
    id: `${prefix}.totalAmountAlt`,
    description: '总金额：{amount}',
    defaultMessage: 'Total Amount: {amount}',
  },
  limitation: {
    id: `${prefix}.limitation`,
    description: '限额：{min} - {max}',
    defaultMessage: 'Limit: {min} - {max}',
  },
});

export default definedMessages;
