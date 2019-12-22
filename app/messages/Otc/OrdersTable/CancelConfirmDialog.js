
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.CancelConfirmDialog';

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
  cancelOrder: {
    id: `${prefix}.cancelOrder`,
    description: '取消订单',
    defaultMessage: 'Cancel Order',
  },
  warningPhrase1: {
    id: `${prefix}.warningPhrase1`,
    description: '确认取消后，您订单中的币将会释放给卖家。此次操作是不可逆的，请您再次确认是否取消订单；',
    defaultMessage: 'After cancellation, the tokens of this order will be released to the seller. This operation is inreversible, please confirm again;',
  },
  warningPhrase2: {
    id: `${prefix}.warningPhrase2`,
    description: '一天中累积取消订单超过3次，当天将不能再进行买卖，同时会降低您的信用权重，请您知晓。',
    defaultMessage: 'Please aware that if your cancellation within one day sum up to 3 times, you won\'t be able to make new transaction for that day, and the credit of your account will be decreased.',
  },
});

export default definedMessages;
