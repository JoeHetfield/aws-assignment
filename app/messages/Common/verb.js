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
});

export default definedMessages;
