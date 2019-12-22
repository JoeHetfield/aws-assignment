import { defineMessages } from 'react-intl';

const prefix = 'SignInDialog.SignUpForm';

const definedMessages = defineMessages({
  signupWithMobile: {
    id: `${prefix}.signupWithMobile`,
    description: '手机注册',
    defaultMessage: 'Mobile',
  },
  signupWithEmail: {
    id: `${prefix}.signupWithEmail`,
    description: '邮箱注册',
    defaultMessage: 'Email',
  },
  confirmPassword: {
    id: `${prefix}.confirmPassword`,
    description: '确认密码',
    defaultMessage: 'Confirm Password',
  },
  invitationCode: {
    id: `${prefix}.invitationCode`,
    description: '邀请码',
    defaultMessage: 'Invitation Code',
  },
  agree: {
    id: `${prefix}.agree`,
    description: '我已阅读并同意',
    defaultMessage: 'I have read and agree with',
  },
  termOfService: {
    id: `${prefix}.termOfService`,
    description: '服务条款',
    defaultMessage: 'Terms of Service',
  },
  privacyPolicy: {
    id: `${prefix}.privacyPolicy`,
    description: '隐私政策',
    defaultMessage: 'Privacy Policy',
  },
  and: {
    id: `${prefix}.and`,
    description: '与',
    defaultMessage: 'and',
  },
  mobileVerificationCodeHint: {
    id: `${prefix}.mobileVerificationCodeHint`,
    description: '输入国家地区和手机号以获取验证码',
    defaultMessage: 'Enter your country and mobile to get code',
  },
  emailVerificationCodeHint: {
    id: `${prefix}.emailVerificationCodeHint`,
    description: '输入电子邮箱地址以获取验证码',
    defaultMessage: 'Enter your Email to get code',
  },
  passwordHint: {
    id: `${prefix}.passwordHint`,
    description: '6-20 位，包含数字及字母',
    defaultMessage: 'Alphanumeric, 6-20 characters long',
  },
  confirmPasswordHint: {
    id: `${prefix}.confirmPasswordHint`,
    description: '请再次输入密码',
    defaultMessage: 'Please entry the password again',
  },
  emptyCountries: {
    id: `${prefix}.emptyCountries`,
    description: '请选择国家和地区',
    defaultMessage: 'Please choose your country or area',
  },
  emptyMobile: {
    id: `${prefix}.emptyMobile`,
    description: '请输入手机号',
    defaultMessage: 'Please enter mobile Number',
  },
  invalidMobile: {
    id: `${prefix}.invalidMobile`,
    description: '请输入有效的手机号',
    defaultMessage: 'Please enter valid mobile Number',
  },
  emptyEmail: {
    id: `${prefix}.emptyEmail`,
    description: '请输入邮件地址',
    defaultMessage: 'Please enter email address',
  },
  invalidEmail: {
    id: `${prefix}.invalidEmail`,
    description: '请输入有效的邮件地址',
    defaultMessage: 'Please enter valid email address',
  },
  emptyVerificationCode: {
    id: `${prefix}.emptyVerificationCode`,
    description: '请输入验证码',
    defaultMessage: 'Please enter verification code',
  },
  invalidVerificationCode: {
    id: `${prefix}.invalidVerificationCode`,
    description: '请输入验证码',
    defaultMessage: 'Please enter valid verification code',
  },
  emptyPassword: {
    id: `${prefix}.emptyPassword`,
    description: '请输入密码',
    defaultMessage: 'Please enter password',
  },
  tooShortPassword: {
    id: `${prefix}.tooShortPassword`,
    description: '密码最少 6 位',
    defaultMessage: 'Password needs at least 6 charaters',
  },
  tooLongPassword: {
    id: `${prefix}.tooLongPassword`,
    description: '密码过长',
    defaultMessage: 'Please enter valid password',
  },
  passwordUnmatch: {
    id: `${prefix}.passwordUnmatch`,
    description: '两次输入的密码不一致',
    defaultMessage: 'Not identical with password',
  },
  emptyInvitationCode: {
    id: `${prefix}.emptyInvitationCode`,
    description: '请输入邀请码',
    defaultMessage: 'Please enter invitation code',
  },
  mustAgree: {
    id: `${prefix}.mustAgree`,
    description: '您必须同意服务条款',
    defaultMessage: 'You must aggree with the term of service',
  },
  success: {
    id: `${prefix}.success`,
    description: '注册成功，请登录',
    defaultMessage: 'Sign up succeed, please sign in',
  },
  china: {
    id: `${prefix}.china`,
    description: '中国',
    defaultMessage: 'China',
  },
  us: {
    id: `${prefix}.us`,
    description: '美国',
    defaultMessage: 'US',
  },
  denmark: {
    id: `${prefix}.denmark`,
    description: '丹麦',
    defaultMessage: 'Denmark',
  },
});

export default definedMessages;
