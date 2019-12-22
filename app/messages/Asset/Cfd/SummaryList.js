import { defineMessages } from 'react-intl';

const prefix = 'Asset.Cfd.SummaryList';

const definedMessages = defineMessages({
  valuation: {
    id: `${prefix}.valuation`,
    description: '合约资产估值',
    defaultMessage: 'Asset Valuation',
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
  equivalent: {
    id: `${prefix}.equivalent`,
    description: '折合',
    defaultMessage: 'Equivalent',
  },
  transferRecords: {
    id: `${prefix}.transferRecords`,
    description: '资产记录',
    defaultMessage: 'Transfer Records',
  },
});

export default definedMessages;
