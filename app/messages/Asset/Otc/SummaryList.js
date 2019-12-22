import { defineMessages } from 'react-intl';

const prefix = 'Asset.Otc.SummaryList';

const definedMessages = defineMessages({
  valuation: {
    id: `${prefix}.valuation`,
    description: 'C2C 资产估值',
    defaultMessage: 'Asset Valuation',
  },
  available: {
    id: `${prefix}.available`,
    description: '可用',
    defaultMessage: 'Available',
  },
  frozen: {
    id: `${prefix}.frozen`,
    description: '冻结',
    defaultMessage: 'Frozen',
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
