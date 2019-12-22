import { defineMessages } from 'react-intl';

const prefix = 'User.SecurityPane.BindEmailDialog';

const definedMessages = defineMessages({
  bindEmail: {
    id: `${prefix}.bindEmail`,
    description: '绑定邮箱',
    defaultMessage: 'Binding Email',
  },
  verificationCodeHint: {
    id: `${prefix}.verificationCodeHint`,
    description: '输入电子邮箱地址以获取验证码',
    defaultMessage: 'Enter your Email to get code',
  },
  emptyEmail: {
    id: `${prefix}.emptyEmail`,
    description: '请输入邮件地址',
    defaultMessage: 'Please enter Email address',
  },
  invalidEmail: {
    id: `${prefix}.invalidEmail`,
    description: '请输入合法的邮件地址',
    defaultMessage: 'Please enter valid Email address',
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
  success: {
    id: `${prefix}.success`,
    description: '邮箱绑定成功',
    defaultMessage: 'Email binding succeed',
  },
});

export default definedMessages;
