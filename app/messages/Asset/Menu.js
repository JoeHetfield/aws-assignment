import { defineMessages } from 'react-intl';

const prefix = 'Asset.Menu';

const definedMessages = defineMessages({
  totalAssetValue: {
    id: `${prefix}.totalAssetValue`,
    description: '总资产估值',
    defaultMessage: 'Total Asset',
  },
  spot: {
    id: `${prefix}.spot`,
    description: '币币账户',
    defaultMessage: 'Spot Asset',
  },
  cfd: {
    id: `${prefix}.cfd`,
    description: '合约账户',
    defaultMessage: 'Cfd Asset',
  },
  otc: {
    id: `${prefix}.otc`,
    description: 'C2C 账户',
    defaultMessage: 'Otc Asset',
  },
});

export default definedMessages;
