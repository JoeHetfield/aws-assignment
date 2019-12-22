import { defineMessages } from 'react-intl';

const prefix = 'SignInDialog.ResetPasswordForm';

const definedMessages = defineMessages({
  accountConfirmation: {
    id: `${prefix}.accountConfirmation`,
    description: '账号确认',
    defaultMessage: 'Account Confirmation',
  },
  captcha: {
    id: `${prefix}.captcha`,
    description: '图形验证码',
    defaultMessage: 'Captcha',
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
  emptyCaptcha: {
    id: `${prefix}.emptyCaptcha`,
    description: '请输入图片验证码',
    defaultMessage: 'Please enter the captcha',
  },
  invalidCaptcha: {
    id: `${prefix}.invalidCaptcha`,
    description: '请输入图片验证码',
    defaultMessage: 'Please enter the captcha',
  },
  resetPassword: {
    id: `${prefix}.resetPassword`,
    description: '重置密码',
    defaultMessage: 'Reset Password',
  },
  newPassword: {
    id: `${prefix}.newPassword`,
    description: '新密码',
    defaultMessage: 'New Password',
  },
  confirmNewPassword: {
    id: `${prefix}.confirmNewPassword`,
    description: '确认新密码',
    defaultMessage: 'Confirm New Password',
  },
  emptyPassword: {
    id: `${prefix}.emptyPassword`,
    description: '请输入新密码',
    defaultMessage: 'Please enter New Password',
  },
  passwordHint: {
    id: `${prefix}.passwordHint`,
    description: '6-20 位，包含数字及字母',
    defaultMessage: 'Alphanumeric, 6-20 characters long',
  },
  mobileCodeHint: {
    id: `${prefix}.mobileCodeHint`,
    description: '手机验证码已发送至 {value}',
    defaultMessage: 'Mobile Verification Code had been send to {value}',
  },
  emailCodeHint: {
    id: `${prefix}.emailCodeHint`,
    description: '邮件验证码已发送至 {value}',
    defaultMessage: 'Email Verification Code had been send to {value}',
  },
  tooShortPassword: {
    id: `${prefix}.tooShortPassword`,
    description: '密码最少 6 位',
    defaultMessage: 'Password needs at list 6 charaters',
  },
  tooLongPassword: {
    id: `${prefix}.tooLongPassword`,
    description: '请输入合法的密码',
    defaultMessage: 'Please enter valid password',
  },
  passwordUnmatch: {
    id: `${prefix}.passwordUnmatch`,
    description: '两次输入的密码不一致',
    defaultMessage: 'Not identical with password',
  },
  emptyMobileCode: {
    id: `${prefix}.emptyMobileCode`,
    description: '请输入手机验证码',
    defaultMessage: 'Please enter mobile verification code',
  },
  invalidMobileCode: {
    id: `${prefix}.invalidMobileCode`,
    description: '请输入合法的手机验证码',
    defaultMessage: 'Please enter valid mobile verification code',
  },
  emptyEmailCode: {
    id: `${prefix}.emptyEmailCode`,
    description: '请输入邮件验证码',
    defaultMessage: 'Please enter Email verification code',
  },
  invalidEmailCode: {
    id: `${prefix}.invalidEmailCode`,
    description: '请输入合法的邮件验证码',
    defaultMessage: 'Please enter valid Email verification code',
  },
  succes: {
    id: `${prefix}.succes`,
    description: '密码修改成功',
    defaultMessage: 'Password reset succeed',
  },
});

export default definedMessages;
