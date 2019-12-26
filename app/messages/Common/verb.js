import { defineMessages } from 'react-intl';

const prefix = 'Common.Verb';

const definedMessages = defineMessages({
  ok: {
    id: `${prefix}.ok`,
    description: '确定',
    defaultMessage: 'OK',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '取消',
    defaultMessage: 'Cancel',
  },
  edit: {
    id: `${prefix}.edit`,
    description: '编辑',
    defaultMessage: 'Edit',
  },
  save: {
    id: `${prefix}.save`,
    description: '保存',
    defaultMessage: 'Save',
  },
  remove: {
    id: `${prefix}.remove`,
    description: '删除',
    defaultMessage: 'Remove',
  },
  close: {
    id: `${prefix}.close`,
    description: '关闭',
    defaultMessage: 'Close',
  },
  refresh: {
    id: `${prefix}.refresh`,
    description: '刷新',
    defaultMessage: 'Refresh',
  },
});

export default definedMessages;
