import { defineMessages } from 'react-intl';

const prefix = 'Common.Adjective';

const definedMessages = defineMessages({
  public: {
    id: `${prefix}.public`,
    description: '公开',
    defaultMessage: 'Public',
  },
  private: {
    id: `${prefix}.private`,
    description: '私有',
    defaultMessage: 'Private',
  },
});

export default definedMessages;
