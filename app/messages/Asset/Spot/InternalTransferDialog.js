import { defineMessages } from 'react-intl';

const prefix = 'Asset.Spot.InternalTransferDialog';

const definedMessages = defineMessages({
  internalTranser: {
    id: `${prefix}.internalTranser`,
    description: '站内划转',
    defaultMessage: 'Internal Transfer',
  },
  available: {
    id: `${prefix}.available`,
    description: '可用余额：{available}',
    defaultMessage: 'Available: {available}',
  },
  account: {
    id: `${prefix}.account`,
    description: '目标账户',
    defaultMessage: 'Target Account',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '划转数量',
    defaultMessage: 'Quantity',
  },
  emptyAccount: {
    id: `${prefix}.emptyAccount`,
    description: '请填写目标账户',
    defaultMessage: 'Please enter the target account',
  },
  emptyAmount: {
    id: `${prefix}.emptyAmount`,
    description: '请填写划转数量',
    defaultMessage: 'Please enter the transfer quantity',
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
    description: '资金划转成功',
    defaultMessage: 'Internal transfer succeed',
  },
});

export default definedMessages;
