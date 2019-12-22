
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.QrRevealDialog';

const definedMessages = defineMessages({
  sellerQr: {
    id: `${prefix}.sellerQr`,
    description: '{name} 的{value}',
    defaultMessage: '{name}\'s {value}',
  },
  alipayQr: {
    id: `${prefix}.alipayQr`,
    description: '支付宝收款码',
    defaultMessage: 'Alipay Collection Code',
  },
  wechatQr: {
    id: `${prefix}.wechatQr`,
    description: '微信收款码',
    defaultMessage: 'WeChat Collection Code',
  },
});

export default definedMessages;
