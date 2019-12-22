import { defineMessages } from 'react-intl';

const prefix = 'Asset.Spot.BillsTable';

const definedMessages = defineMessages({
  bills: {
    id: `${prefix}.bills`,
    description: '账单',
    defaultMessage: 'Bills',
  },
  diposit: {
    id: `${prefix}.diposit`,
    description: '充值',
    defaultMessage: 'Diposit',
  },
  withdraw: {
    id: `${prefix}.withdraw`,
    description: '提现',
    defaultMessage: 'Withdraw',
  },
  purchase: {
    id: `${prefix}.purchase`,
    description: '买入',
    defaultMessage: 'Purchase',
  },
  sale: {
    id: `${prefix}.sale`,
    description: '卖出',
    defaultMessage: 'Sale',
  },
  distribution: {
    id: `${prefix}.distribution`,
    description: '活动派发',
    defaultMessage: 'Distribution',
  },
  event: {
    id: `${prefix}.event`,
    description: '活动得到',
    defaultMessage: 'Event',
  },
  transferIn: {
    id: `${prefix}.transferIn`,
    description: '转入',
    defaultMessage: 'Transfer In',
  },
  transferOut: {
    id: `${prefix}.transferOut`,
    description: '转出',
    defaultMessage: 'Transfer Out',
  },
  lock: {
    id: `${prefix}.lock`,
    description: '锁仓',
    defaultMessage: 'Lock',
  },
  unlock: {
    id: `${prefix}.unlock`,
    description: '解锁',
    defaultMessage: 'Unlock',
  },
  dateTime: {
    id: `${prefix}.dateTime`,
    description: '日期 / 时间',
    defaultMessage: 'Date / Time',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费',
    defaultMessage: 'Commission',
  },
  balance: {
    id: `${prefix}.balance`,
    description: '余额',
    defaultMessage: 'Balance',
  },
});

export default definedMessages;
