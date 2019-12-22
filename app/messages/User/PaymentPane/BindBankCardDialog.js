import { defineMessages } from 'react-intl';

const prefix = 'User.PaymentPane.BindBankCardDialog';

const definedMessages = defineMessages({
  bindBankCard: {
    id: `${prefix}.bindBankCard`,
    description: '绑定银行卡',
    defaultMessage: 'Bind Bank Card',
  },
  fullName: {
    id: `${prefix}.fullName`,
    description: '姓名',
    defaultMessage: 'Full Name',
  },
  bankName: {
    id: `${prefix}.bankName`,
    description: '开户行名称',
    defaultMessage: 'Bank Name',
  },
  branch: {
    id: `${prefix}.branch`,
    description: '开户行支行',
    defaultMessage: 'Branch',
  },
  bankCardNumber: {
    id: `${prefix}.bankCardNumber`,
    description: '银行卡号',
    defaultMessage: 'Bank Card Number',
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
  emptyBankName: {
    id: `${prefix}.emptyBankName`,
    description: '请输入银行名称',
    defaultMessage: 'Please enter bank name',
  },
  tooLongBankName: {
    id: `${prefix}.tooLongBankName`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
  },
  emptyBranchName: {
    id: `${prefix}.emptyBranchName`,
    description: '请输入开户行支行',
    defaultMessage: 'Please enter branch name',
  },
  tooLongBranchName: {
    id: `${prefix}.tooLongBranchName`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
  },
  emptyBankCard: {
    id: `${prefix}.emptyBankCard`,
    description: '请输入银行卡号',
    defaultMessage: 'Please enter bank card',
  },
  tooLongBankCard: {
    id: `${prefix}.tooLongBankCard`,
    description: '长度不能大于30个字符',
    defaultMessage: 'Cannot be longer than 30 characters',
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
    description: '银行卡绑定成功',
    defaultMessage: 'Bank card binding succeed',
  },
});

export default definedMessages;
