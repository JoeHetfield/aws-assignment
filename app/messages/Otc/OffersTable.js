import { defineMessages } from 'react-intl';

const prefix = 'Otc.OffersTable';

const definedMessages = defineMessages({
  vondorInfo: {
    id: `${prefix}.vondorInfo`,
    description: '广告主（单数 / 完成率）',
    defaultMessage: 'ondor (Orders / Complition Rate)',
  },
  price: {
    id: `${prefix}.price`,
    description: '价格',
    defaultMessage: 'Price',
  },
  size: {
    id: `${prefix}.size`,
    description: '数量',
    defaultMessage: 'Size',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '总金额',
    defaultMessage: 'Amount',
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
  paymentMethod: {
    id: `${prefix}.paymentMethod`,
    description: '支付方式',
    defaultMessage: 'Payment Methods',
  },
  vondorInfoAlt: {
    id: `${prefix}.vondorInfoAlt`,
    description: '成交 {orders} 笔，成交率 {rate}',
    defaultMessage: '{orders} orders, trunover rate: {rate}',
  },
  releaseTime: {
    id: `${prefix}.releaseTime`,
    description: '平均放币时间：{time}',
    defaultMessage: 'Avg. Time of Token Release: {time}',
  },
  sizeAlt: {
    id: `${prefix}.sizeAlt`,
    description: '数量：{size} {symbol}',
    defaultMessage: 'Size: {size} {symbol}',
  },
  limitation: {
    id: `${prefix}.limitation`,
    description: '限额：{min} - {max}',
    defaultMessage: 'Limit: {min} - {max}',
  },
});

export default definedMessages;
