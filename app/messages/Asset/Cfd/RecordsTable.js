import { defineMessages } from 'react-intl';

const prefix = 'Asset.Cfd.RecordsTable';

const definedMessages = defineMessages({
  transferRecords: {
    id: `${prefix}.transferRecords`,
    description: '资产记录',
    defaultMessage: 'Transfer Records',
  },
  transferType: {
    id: `${prefix}.transferType`,
    description: '类型',
    defaultMessage: 'Transfer Type',
  },
  transferAddress: {
    id: `${prefix}.transferAddress`,
    description: '地址',
    defaultMessage: 'Address',
  },
  transferSize: {
    id: `${prefix}.transferSize`,
    description: '金额',
    defaultMessage: 'Size',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费',
    defaultMessage: 'Commission',
  },
  lastUpdate: {
    id: `${prefix}.lastUpdate`,
    description: '最后更新',
    defaultMessage: 'Last Update',
  },
  status: {
    id: `${prefix}.status`,
    description: '状态',
    defaultMessage: 'Status',
  },
  finished: {
    id: `${prefix}.finished`,
    description: '已完成',
    defaultMessage: 'Done',
  },
  inProgress: {
    id: `${prefix}.inProgress`,
    description: '提现中',
    defaultMessage: 'In Progress',
  },
  confirmed: {
    id: `${prefix}.confirmed`,
    description: '已确认',
    defaultMessage: 'Confirmed',
  },
  unconfirmed: {
    id: `${prefix}.unconfirmed`,
    description: '未确认',
    defaultMessage: 'UnConfirmed',
  },
  confirming: {
    id: `${prefix}.confirming`,
    description: '已确认 {confirm} 次',
    defaultMessage: 'Confirmed {confirm} times',
  },
});

export default definedMessages;
