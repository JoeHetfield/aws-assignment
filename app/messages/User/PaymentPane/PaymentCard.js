import { defineMessages } from 'react-intl';

const prefix = 'User.PaymentPane.PaymentCard';

const definedMessages = defineMessages({
  paymentSetting: {
    id: `${prefix}.paymentSetting`,
    description: 'C2C 收付款设置',
    defaultMessage: 'Payment Methods',
  },
  basicVerificationNeeded: {
    id: `${prefix}.basicVerificationNeeded`,
    description: '请先认证基本信息',
    defaultMessage: 'Please finish basic information verification firstly',
  },
  bankCardHint: {
    id: `${prefix}.bankCardHint`,
    description: '为了您的交易安全，请开启并校验您名下的银行卡',
    defaultMessage: 'For the security of your transaction, please bind and verify the bank card in your name',
  },
  wechatHint: {
    id: `${prefix}.wechatHint`,
    description: '使用微信收付款，更快更安全',
    defaultMessage: 'Using WeChat payments, faster and more secure',
  },
  alipayHint: {
    id: `${prefix}.alipayHint`,
    description: '使用支付宝付款，更快更安全',
    defaultMessage: 'Using alipay payments, faster and more secure',
  },
});

export default definedMessages;
