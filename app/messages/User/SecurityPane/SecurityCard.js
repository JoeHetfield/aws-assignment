import { defineMessages } from 'react-intl';

const prefix = 'User.SecurityPane.SecurityCard';

const definedMessages = defineMessages({
  securitySetting: {
    id: `${prefix}.securitySetting`,
    description: '安全设置',
    defaultMessage: 'Security Setting',
  },
  securityInstruction: {
    id: `${prefix}.securityInstruction`,
    description: '为了您的资产安全，修改登录密码、手机后，24 小时内不能提现',
    defaultMessage: 'The withdrawal will be frozen for 24 hours after you modified your login password, binded mobile phone',
  },
  password: {
    id: `${prefix}.password`,
    description: '登录密码',
    defaultMessage: 'Sign in Password',
  },
  passwordStrengthHigh: {
    id: `${prefix}.passwordStrengthHigh`,
    description: '密码强度：高',
    defaultMessage: 'Password Strength: High',
  },
  passwordStrengthMedium: {
    id: `${prefix}.passwordStrengthMedium`,
    description: '密码强度：中',
    defaultMessage: 'Password Strength: Medium',
  },
  passwordStrengthLow: {
    id: `${prefix}.passwordStrengthLow`,
    description: '密码强度：低',
    defaultMessage: 'Password Strength: Low',
  },
  bindInstruction: {
    id: `${prefix}.bindInstruction`,
    description: '提现，修改密码，及安全设置时用以收取验证码',
    defaultMessage: 'Used for receiving SMS code of withdrawal, password modification and security setting',
  },
});

export default definedMessages;
