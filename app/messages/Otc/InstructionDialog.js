import { defineMessages } from 'react-intl';

const prefix = 'Otc.InstructionDialog';

const definedMessages = defineMessages({
  requirements: {
    id: `${prefix}.requirements`,
    description: '买卖数字货币，需要满足以下要求：',
    defaultMessage: 'Before make OTC transaction, please fullfill these requirements below:',
  },
  requirement1: {
    id: `${prefix}.requirement1`,
    description: '完成基本信息认证',
    defaultMessage: 'Complete the baisc identity verification',
  },
  requirement2: {
    id: `${prefix}.requirement2`,
    description: '账号绑定手机',
    defaultMessage: 'Bind account with a mobile phone',
  },
  requirement3: {
    id: `${prefix}.requirement3`,
    description: '账号绑定绑定至少一种支付方式（银行卡、微信、支付宝）',
    defaultMessage: 'Bind account with at least one payment method (BankCard, WeChat or Alipay)',
  },
});

export default definedMessages;
