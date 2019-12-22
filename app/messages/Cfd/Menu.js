import { defineMessages } from 'react-intl';

const prefix = 'Cfd.Menu';

const definedMessages = defineMessages({
  instrumentName: {
    id: `${prefix}.instrumentName`,
    description: '合约名称',
    defaultMessage: 'Name',
  },
  fluctuation: {
    id: `${prefix}.fluctuation`,
    description: '最小波动',
    defaultMessage: 'Min Fluctuation',
  },
});

export default definedMessages;
