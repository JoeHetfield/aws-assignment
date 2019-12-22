import { defineMessages } from 'react-intl';

const prefix = 'Asset.Cfd.TransferDialog';

const definedMessages = defineMessages({
  fundTranser: {
    id: `${prefix}.fundTranser`,
    description: '资金划转',
    defaultMessage: 'Fund Transfer',
  },
  cfdAccount: {
    id: `${prefix}.cfdAccount`,
    description: '合约账户',
    defaultMessage: 'CFD Account',
  },
  otcAccount: {
    id: `${prefix}.otcAccount`,
    description: 'C2C 账户',
    defaultMessage: 'OTC Account',
  },
  available: {
    id: `${prefix}.available`,
    description: '可用余额：{available}',
    defaultMessage: 'Available: {available}',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '划转数量',
    defaultMessage: 'Quantity',
  },
  transferAll: {
    id: `${prefix}.transferAll`,
    description: '全部划转',
    defaultMessage: 'Transfer All',
  },
  emptyAmount: {
    id: `${prefix}.emptyAmount`,
    description: '请填写划转数量',
    defaultMessage: 'Please enter the transfer quantity',
  },
  success: {
    id: `${prefix}.success`,
    description: '资金划转成功',
    defaultMessage: 'Fund transfer succeed',
  },
});

export default definedMessages;
