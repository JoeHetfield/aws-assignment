import { defineMessages } from 'react-intl';

const prefix = 'Cfd.StatusArea';

const definedMessages = defineMessages({
  margin: {
    id: `${prefix}.margin`,
    description: '保证金',
    defaultMessage: 'Margins',
  },
  availableMargin: {
    id: `${prefix}.availableMargin`,
    description: '可用保证金',
    defaultMessage: 'Available Margin',
  },
  positionMargin: {
    id: `${prefix}.positionMargin`,
    description: '已用保证金',
    defaultMessage: 'Position Margin',
  },
  unrealizedPnl: {
    id: `${prefix}.unrealizedPnl`,
    description: '浮动盈亏',
    defaultMessage: 'Unrealized Pnl',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '佣金估算',
    defaultMessage: 'Affiliate Commission',
  },
});

export default definedMessages;
