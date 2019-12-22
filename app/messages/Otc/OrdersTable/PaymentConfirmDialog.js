
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.PaymentConfirmDialog';

const definedMessages = defineMessages({
  paymentInfo: {
    id: `${prefix}.paymentInfo`,
    description: '支付信息',
    defaultMessage: 'Payment Information',
  },
  tokenName: {
    id: `${prefix}.tokenName`,
    description: '买入币种',
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
  paymentConfirm: {
    id: `${prefix}.paymentConfirm`,
    description: '确认支付',
    defaultMessage: 'Payment Confirmation',
  },
  warningPhrase1: {
    id: `${prefix}.warningPhrase1`,
    description: '如果您已经支付完成请点击下方【确定】，卖家确认收款后会及时为您放币；',
    defaultMessage: 'If you have finished the payment, please click the "OK" button below, the seller will release the token as soon as possible;',
  },
  warningPhrase2: {
    id: `${prefix}.warningPhrase2`,
    description: '至于未支付完成，却点击【确定】的用户将会降低信用权重，甚至冻结账户使用权限，请知悉。',
    defaultMessage: 'Please aware that it will cause the credit level degrading or account frozen for the user who did\'t finish payment but click the "OK" button.',
  },
});

export default definedMessages;
