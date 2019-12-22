import { defineMessages } from 'react-intl';

const prefix = 'SignInDialog.SignInForm';

const definedMessages = defineMessages({
  forgotPassword: {
    id: `${prefix}.forgotPassword`,
    description: '忘记密码？',
    defaultMessage: 'Forgot password ?',
  },
  emptyAccount: {
    id: `${prefix}.emptyAccount`,
    description: '请输入手机号或邮箱',
    defaultMessage: 'Please enter your mobile or email',
  },
  invalidAccount: {
    id: `${prefix}.invalidAccount`,
    description: '请输入合法的手机号或邮箱',
    defaultMessage: 'Please enter valid mobile or email',
  },
  emptyPassword: {
    id: `${prefix}.emptyPassword`,
    description: '请输入密码',
    defaultMessage: 'Please enter your password',
  },
  invalidPassword: {
    id: `${prefix}.invalidPassword`,
    description: '请输入合法的密码',
    defaultMessage: 'Please enter valid password',
  },
  verification: {
    id: `${prefix}.verification`,
    description: '二次验证',
    defaultMessage: '2-Step Verification',
  },
  switchMethod: {
    id: `${prefix}.switchMethod`,
    description: '切换验证方式',
    defaultMessage: 'Switch verification method',
  },
  emptyVerificationCode: {
    id: `${prefix}.emptyVerificationCode`,
    description: '请输入验证码',
    defaultMessage: 'Please enter verification code',
  },
  invalidVerificationCode: {
    id: `${prefix}.invalidVerificationCode`,
    description: '请输入合法的验证码',
    defaultMessage: 'Please enter valid verification code',
  },
  welcome: {
    id: `${prefix}.welcome`,
    description: '欢迎来到 Bitnomic',
    defaultMessage: 'Welcome to Bitnomic',
  },
});

export default definedMessages;
