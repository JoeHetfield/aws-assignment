import { defineMessages } from 'react-intl';

const prefix = 'User.SecurityPane.ChangePasswordDialog';

const definedMessages = defineMessages({
  changePassword: {
    id: `${prefix}.changePassword`,
    description: '修改登录密码',
    defaultMessage: 'Change Password',
  },
  securityInstruction: {
    id: `${prefix}.securityInstruction`,
    description: '为了您的资产安全，修改登录密码后，24 小时内不能提现',
    defaultMessage: 'The withdrawal will be frozen for 24 hours after you modified your login password',
  },
  password: {
    id: `${prefix}.password`,
    description: '原密码',
    defaultMessage: 'Password',
  },
  newPassword: {
    id: `${prefix}.newPassword`,
    description: '新密码',
    defaultMessage: 'New Password',
  },
  confirmPassword: {
    id: `${prefix}.confirmPassword`,
    description: '确认新密码',
    defaultMessage: 'Confirm New Password',
  },
  emptyPassword: {
    id: `${prefix}.emptyPassword`,
    description: '请输入原始密码',
    defaultMessage: 'Please enter the current password',
  },
  emptyNewPassword: {
    id: `${prefix}.emptyNewPassword`,
    description: '请输入新密码',
    defaultMessage: 'Please enter the new password',
  },
  invalidNewPassword: {
    id: `${prefix}.invalidNewPassword`,
    description: '请输入新密码',
    defaultMessage: 'Please enter valid new password',
  },
  passwordUnmatch: {
    id: `${prefix}.passwordUnmatch`,
    description: '两次输入的密码不一致',
    defaultMessage: 'Not identical with the new password',
  },
  success: {
    id: `${prefix}.success`,
    description: '密码修改成功',
    defaultMessage: 'Password reset succeed, please sign in again',
  },
});

export default definedMessages;
