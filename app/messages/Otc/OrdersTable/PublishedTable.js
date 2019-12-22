
import { defineMessages } from 'react-intl';

const prefix = 'Otc.OrdersTable.PublishedTable';

const definedMessages = defineMessages({
  limitPrice: {
    id: `${prefix}.limitPrice`,
    description: '限价',
    defaultMessage: 'Limit Price',
  },
  index: {
    id: `${prefix}.index`,
    description: '指数',
    defaultMessage: 'Index',
  },
  price: {
    id: `${prefix}.price`,
    description: '价格',
    defaultMessage: 'Price',
  },
  volume: {
    id: `${prefix}.volume`,
    description: '成交数量 / 委托数量',
    defaultMessage: 'Filled / Total Volume',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '成交金额 / 总金额',
    defaultMessage: 'Filled / Total Amount',
  },
  averagePrice: {
    id: `${prefix}.averagePrice`,
    description: '成交均价',
    defaultMessage: 'Average Transaction Price',
  },
  publishDate: {
    id: `${prefix}.publishDate`,
    description: '委托时间',
    defaultMessage: 'Publish Date',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '取消委托',
    defaultMessage: 'Cancel',
  },
});

export default definedMessages;
