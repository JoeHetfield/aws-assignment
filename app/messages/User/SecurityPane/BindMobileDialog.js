import { defineMessages } from 'react-intl';

const prefix = 'User.SecurityPane.BindMobileDialog';

const definedMessages = defineMessages({
  bindMobile: {
    id: `${prefix}.bindMobile`,
    description: '手机绑定',
    defaultMessage: 'Bind Mobile Phone',
  },
  verificationCodeHint: {
    id: `${prefix}.verificationCodeHint`,
    description: '输入国家地区和手机号以获取验证码',
    defaultMessage: 'Enter your country and mobile to get code',
  },
  emptyCountries: {
    id: `${prefix}.emptyCountries`,
    description: '请选择国家和地区',
    defaultMessage: 'Please choose your country / area',
  },
  emptyMobile: {
    id: `${prefix}.emptyMobile`,
    description: '请输入您的手机号',
    defaultMessage: 'Please enter your mobile number',
  },
  invalidMobile: {
    id: `${prefix}.invalidMobile`,
    description: '请输入正确的手机号',
    defaultMessage: 'Please enter valid mobile number',
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
    description: '手机绑定成功',
    defaultMessage: 'Mobile binding succeed',
  },
});

export default definedMessages;
