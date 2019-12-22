import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.PendingTable';

const definedMessages = defineMessages({
  price: {
    id: `${prefix}.price`,
    description: '价格：{value}',
    defaultMessage: 'Price: {value}',
  },
  volume: {
    id: `${prefix}.volume`,
    description: '数量：{value}',
    defaultMessage: 'Volume: {value}',
  },
  orderId: {
    id: `${prefix}.orderId`,
    description: '订单号：{value}',
    defaultMessage: 'Order ID: {value}',
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
  information: {
    id: `${prefix}.information`,
    description: '{value}信息',
    defaultMessage: '{value} Information',
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
  payByWechat: {
    id: `${prefix}.payByWechat`,
    description: '付款方式：微信',
    defaultMessage: 'Pay By: WeChat',
  },
  payByBankCard: {
    id: `${prefix}.payByBankCard`,
    description: '付款方式：银行卡',
    defaultMessage: 'Pay By: Bank Card',
  },
  payByAlipay: {
    id: `${prefix}.payByAlipay`,
    description: '付款方式：支付宝',
    defaultMessage: 'Pay By: AliPay',
  },
  beneficiary: {
    id: `${prefix}.beneficiary`,
    description: '收款人：{value}',
    defaultMessage: 'Beneficiary Name: {value}',
  },
  bankInfo: {
    id: `${prefix}.bankInfo`,
    description: '银行名：{bank} {branch}',
    defaultMessage: 'Bank Name: {bank} {branch}',
  },
  bankCardNumber: {
    id: `${prefix}.bankCardNumber`,
    description: '银行卡号：{value}',
    defaultMessage: 'Bank Card Number: {value}',
  },
  account: {
    id: `${prefix}.account`,
    description: '账户：{value}',
    defaultMessage: 'Account No.: {value}',
  },
  revealQr: {
    id: `${prefix}.revealQr`,
    description: '显示收款码',
    defaultMessage: 'Reveal Collection Code',
  },
  copy: {
    id: `${prefix}.copy`,
    description: '复制卡号',
    defaultMessage: 'Copy',
  },
  copied: {
    id: `${prefix}.copied`,
    description: '银行卡号已拷贝至粘贴板',
    defaultMessage: 'Bank Card Number have been copied to clipborad',
  },
  paymentInfo: {
    id: `${prefix}.paymentInfo`,
    description: '支付信息（{value}）',
    defaultMessage: 'Copy',
  },
  paymentInfoAlt: {
    id: `${prefix}.paymentInfoAlt`,
    description: '支付信息',
    defaultMessage: 'Payment Information',
  },
  cancelHint: {
    id: `${prefix}.cancelHint`,
    description: '限定时间内如果买家未支付，订单将取消',
    defaultMessage: 'The order will be canceled in case of the buyer didn\'t pay in certain period of time',
  },
  timeRemain: {
    id: `${prefix}.timeRemain`,
    description: '剩余：{value}',
    defaultMessage: 'Time left for Process: {value}',
  },
  waitPayment: {
    id: `${prefix}.waitPayment`,
    description: '等待支付',
    defaultMessage: 'Waiting for Payment',
  },
  waitRelease: {
    id: `${prefix}.waitRelease`,
    description: '等待对方放币',
    defaultMessage: 'Waiting for Seller Release Token',
  },
  interpose: {
    id: `${prefix}.interpose`,
    description: '客诉处理中',
    defaultMessage: 'Customer Claim',
  },
  frozen: {
    id: `${prefix}.frozen`,
    description: '冻结中',
    defaultMessage: 'Frozen',
  },
  buyerPaid: {
    id: `${prefix}.buyerPaid`,
    description: '对方已支付',
    defaultMessage: 'Buyer Has Paid',
  },
  paid: {
    id: `${prefix}.paid`,
    description: '我已支付',
    defaultMessage: 'I Have Paid',
  },
  callCustomerService: {
    id: `${prefix}.callCustomerService`,
    description: '没有收到款项？申请客诉',
    defaultMessage: 'Not Received Yet? Customer Claim',
  },
  cancelByNotPaid: {
    id: `${prefix}.cancelByNotPaid`,
    description: '没有支付？取消订单',
    defaultMessage: 'Have\'t Paid? Cancel Order',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '取消订单',
    defaultMessage: 'Cancel Order',
  },
  receiptConfirm: {
    id: `${prefix}.receiptConfirm`,
    description: '确认收款',
    defaultMessage: 'Receipt Confirmed',
  },
  receiptConfirmAlt: {
    id: `${prefix}.receiptConfirmAlt`,
    description: '确认收款',
    defaultMessage: 'Receipt Confirmed',
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
  waitPaymentAlt: {
    id: `${prefix}.waitPaymentAlt`,
    description: '等待支付：{amount}',
    defaultMessage: 'Waiting for Payment: {amount}',
  },
  beneficiaryAlt: {
    id: `${prefix}.beneficiaryAlt`,
    description: '收款人',
    defaultMessage: 'Beneficiary Name',
  },
  bankInfoAlt: {
    id: `${prefix}.bankInfoAlt`,
    description: '银行名',
    defaultMessage: 'Bank Name',
  },
  bankCardNumberAlt: {
    id: `${prefix}.bankCardNumberAlt`,
    description: '银行卡号',
    defaultMessage: 'Bank Card Number',
  },
  accountAlt: {
    id: `${prefix}.accountAlt`,
    description: '账户名',
    defaultMessage: 'Account Number',
  },
  paymentMethod: {
    id: `${prefix}.paymentMethod`,
    description: '付款方式',
    defaultMessage: 'Payment Method',
  },
});

export default definedMessages;
