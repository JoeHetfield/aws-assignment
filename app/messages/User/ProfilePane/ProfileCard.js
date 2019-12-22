import { defineMessages } from 'react-intl';

const prefix = 'User.ProfilePane.ProfileCard';

const definedMessages = defineMessages({
  basicVerification: {
    id: `${prefix}.basicVerification`,
    description: '基本信息认证',
    defaultMessage: 'Basic information verification',
  },
  advancedVerification: {
    id: `${prefix}.advancedVerification`,
    description: '高级信息认证',
    defaultMessage: 'Advanced information verification',
  },
  myInvitationCode: {
    id: `${prefix}.myInvitationCode`,
    description: '我的邀请码',
    defaultMessage: 'My Invitation Code',
  },
  verifyNow: {
    id: `${prefix}.verifyNow`,
    description: '马上认证',
    defaultMessage: 'Verify Now',
  },
  notVerified: {
    id: `${prefix}.notVerified`,
    description: '未认证',
    defaultMessage: 'Not Verified',
  },
  verified: {
    id: `${prefix}.verified`,
    description: '已认证',
    defaultMessage: 'Verified',
  },
  verifying: {
    id: `${prefix}.verifying`,
    description: '认证中',
    defaultMessage: 'Verifying',
  },
  view: {
    id: `${prefix}.view`,
    description: '查看',
    defaultMessage: 'View',
  },
  welcome: {
    id: `${prefix}.welcome`,
    description: '欢迎来到 bitnomic',
    defaultMessage: 'Welcome To Bitnomic',
  },
});

export default definedMessages;
