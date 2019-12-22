import { defineMessages } from 'react-intl';

const prefix = 'Asset.Otc.RecordsTable';

const definedMessages = defineMessages({
  transferRecords: {
    id: `${prefix}.transferRecords`,
    description: '资产记录',
    defaultMessage: 'Transfer Records',
  },
  date: {
    id: `${prefix}.date`,
    description: '日期',
    defaultMessage: 'Date',
  },
  type: {
    id: `${prefix}.type`,
    description: '类型',
    defaultMessage: 'Transfer Type',
  },
  size: {
    id: `${prefix}.size`,
    description: '数量',
    defaultMessage: 'Size',
  },
  dateTime: {
    id: `${prefix}.dateTime`,
    description: '日期 / 时间',
    defaultMessage: 'Date / Time',
  },
  balance: {
    id: `${prefix}.balance`,
    description: '余额',
    defaultMessage: 'Balance',
  },
});

export default definedMessages;
