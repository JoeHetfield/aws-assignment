
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.TokenReleaseConfirmDialog';

const definedMessages = defineMessages({
  paymentInfo: {
    id: `${prefix}.paymentInfo`,
    description: '支付信息',
    defaultMessage: 'Payment Information',
  },
  tokenName: {
    id: `${prefix}.tokenName`,
    description: '卖出币种',
    defaultMessage: 'Token Name',
  },
  orderId: {
    id: `${prefix}.orderId`,
    description: '订单号',
    defaultMessage: 'Order ID',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '总金额',
    defaultMessage: 'Total Amount',
  },
  volume: {
    id: `${prefix}.volume`,
    description: '数量',
    defaultMessage: 'Volume',
  },
  paymentMethod: {
    id: `${prefix}.paymentMethod`,
    description: '支付方式',
    defaultMessage: 'Payment Method',
  },
  receiptConfirmation: {
    id: `${prefix}.receiptConfirmation`,
    description: '确认收款',
    defaultMessage: 'Receipt Confirmation',
  },
  warningPhrase: {
    id: `${prefix}.warningPhrase1`,
    description: '确认收款后您的币将打入对方账户，数字资产的转移是不可逆的，请您再次确认资金是否到账',
    defaultMessage: 'After the receipt confirmation, your tokens will be deposited to buyer\'s account. The transfer of digital assets is inreversible, please confirm the receipt of your fund again',
  },
});

export default definedMessages;
