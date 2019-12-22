import { defineMessages } from 'react-intl';

const prefix = 'User.PaymentPane.BindWechatDialog';

const definedMessages = defineMessages({
  bindWechat: {
    id: `${prefix}.bindWechat`,
    description: '绑定微信支付',
    defaultMessage: 'Bind Wechat Pay',
  },
  uploadQr: {
    id: `${prefix}.uploadQr`,
    description: '点击上传微信收款码',
    defaultMessage: 'Click to upload Wechat QR code',
  },
  fullName: {
    id: `${prefix}.fullName`,
    description: '姓名',
    defaultMessage: 'Full Name',
  },
  wechatId: {
    id: `${prefix}.wechatId`,
    description: '微信号',
    defaultMessage: 'Wechat ID',
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
  emptyWechatId: {
    id: `${prefix}.emptyWechatId`,
    description: '请输入微信号',
    defaultMessage: 'Please enter Wechat ID',
  },
  tooLongWechatId: {
    id: `${prefix}.tooLongWechatId`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
  },
  emptyWechatQr: {
    id: `${prefix}.emptyWechatQr`,
    description: '请上传微信支付收款码',
    defaultMessage: 'Please upload Wechat QR code',
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
    description: '微信支付绑定成功',
    defaultMessage: 'Wechat Pay binding succeed',
  },
});

export default definedMessages;
