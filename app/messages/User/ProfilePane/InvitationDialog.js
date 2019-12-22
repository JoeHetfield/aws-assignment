import { defineMessages } from 'react-intl';

const prefix = 'User.ProfilePane.InvitationDialog';

const definedMessages = defineMessages({
  myInvitationCode: {
    id: `${prefix}.myInvitationCode`,
    description: '我的邀请码',
    defaultMessage: 'My Invitation Code',
  },
  myInvitationLink: {
    id: `${prefix}.myInvitationLink`,
    description: '我的邀请链接',
    defaultMessage: 'My Invitation Link',
  },
  copied: {
    id: `${prefix}.copied`,
    description: '邀请链接已拷贝至粘贴板',
    defaultMessage: 'Invitation link have been copied to clipborad',
  },
});

export default definedMessages;
