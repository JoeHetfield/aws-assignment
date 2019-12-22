
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.CustomerServiceDialog';

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
  callCustomerService: {
    id: `${prefix}.callCustomerService`,
    description: '申请客诉',
    defaultMessage: 'Customer Claim',
  },
  warningPhrase1: {
    id: `${prefix}.warningPhrase1`,
    description: '确认申诉后，订单将会进入冻结状态，同时会要求买家再次确认是否已付款，并上传付款凭证；',
    defaultMessage: 'After customer claim, the order will trun into frozen status, and demand seller to reconfirm his/her payment and upload the proof of payment;',
  },
  warningPhrase2: {
    id: `${prefix}.warningPhrase2`,
    description: '对于已收到款项，却点击【申请客诉】的用户将会降低信用权重，甚至冻结账户使用权限，请您知晓。',
    defaultMessage: 'Please aware that it will cause the credit level degrading or account frozen for the user who already received the fund but still clicked "Customer Claim" button.',
  },
});

export default definedMessages;
