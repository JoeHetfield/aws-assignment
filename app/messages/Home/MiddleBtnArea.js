import { defineMessages } from 'react-intl';

const prefix = 'Home.MiddleBtnArea';

const definedMessages = defineMessages({
  quickBuy: {
    id: `${prefix}.quickBuy`,
    description: '快捷买币',
    defaultMessage: 'Quick To Buy Currency',
  },
  depositWithdraw: {
    id: `${prefix}.depositWithdraw`,
    description: '充值提现',
    defaultMessage: 'Deposit Withdraw',
  },
  joinCommunity: {
    id: `${prefix}.joinCommunity`,
    description: '加入社区',
    defaultMessage: 'Join A Community',
  },
  helpCenter: {
    id: `${prefix}.helpCenter`,
    description: '帮助中心',
    defaultMessage: 'Help Center',
  },
});

export default definedMessages;
