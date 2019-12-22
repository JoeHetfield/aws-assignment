import { defineMessages } from 'react-intl';

const prefix = 'User.PaymentPane.BindAlipayDialog';

const definedMessages = defineMessages({
  bindAlipay: {
    id: `${prefix}.bindAlipay`,
    description: '绑定支付宝',
    defaultMessage: 'Bind Alipay',
  },
  uploadQr: {
    id: `${prefix}.uploadQr`,
    description: '点击上传支付宝收款码',
    defaultMessage: 'Click to upload Alipay QR code',
  },
  fullName: {
    id: `${prefix}.fullName`,
    description: '姓名',
    defaultMessage: 'Full Name',
  },
  alipayId: {
    id: `${prefix}.alipayId`,
    description: '支付宝账号',
    defaultMessage: 'Alipay ID',
  },
  emptyName: {
    id: `${prefix}.emptyName`,
    description: '请输入姓名',
    defaultMessage: 'Please enter name',
  },
  tooLongName: {
    id: `${prefix}.tooLongName`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
  },
  emptyAlipayId: {
    id: `${prefix}.emptyAlipayId`,
    description: '请输入支付宝账号',
    defaultMessage: 'Please enter Alipay ID',
  },
  tooLongAlipayId: {
    id: `${prefix}.tooLongAlipayId`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
  },
  emptyAlipayQr: {
    id: `${prefix}.emptyAlipayQr`,
    description: '请上传支付宝收款码',
    defaultMessage: 'Please upload Alipay QR code',
  },
  emptyVerificationCode: {
    id: `${prefix}.emptyVerificationCode`,
    description: '请输入验证码',
    defaultMessage: 'Please enter verification code',
  },
  invalidVerificationCode: {
    id: `${prefix}.invalidVerificationCode`,
    description: '请输入正确的六位验证码',
    defaultMessage: 'Please enter valid verification code',
  },
  success: {
    id: `${prefix}.success`,
    description: '支付宝绑定成功',
    defaultMessage: 'Alipay binding succeed',
  },
});

export default definedMessages;
