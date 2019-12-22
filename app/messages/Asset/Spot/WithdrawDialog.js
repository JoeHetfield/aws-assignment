import { defineMessages } from 'react-intl';

const prefix = 'Asset.Spot.WithdrawDialog';

const definedMessages = defineMessages({
  withdraw: {
    id: `${prefix}.withdraw`,
    description: '{symbol} 提现',
    defaultMessage: '{symbol} Withdraw',
  },
  withdrawAddress: {
    id: `${prefix}.withdrawAddress`,
    description: '{symbol} 提现地址',
    defaultMessage: '{symbol} Withdraw Address',
  },
  quantity: {
    id: `${prefix}.quantity`,
    description: '提现数量',
    defaultMessage: 'Withdraw Quantity',
  },
  withdrawAll: {
    id: `${prefix}.withdrawAll`,
    description: '全部提现',
    defaultMessage: 'Withdraw All',
  },
  fillIdNumber: {
    id: `${prefix}.fillIdNumber`,
    description: '补全身份证号码',
    defaultMessage: 'Please complete your ID Card Number',
  },
  confirmWithdraw: {
    id: `${prefix}.confirmWithdraw`,
    description: '确认提现',
    defaultMessage: 'Confirm Withdraw',
  },
  emptyAddress: {
    id: `${prefix}.emptyAddress`,
    description: '请填写提现地址',
    defaultMessage: 'Please enter the withdraw address',
  },
  emptyQuantity: {
    id: `${prefix}.emptyQuantity`,
    description: '请填写提现数量',
    defaultMessage: 'Please enter the withdraw quantity',
  },
  emptyEmailCode: {
    id: `${prefix}.emptyEmailCode`,
    description: '请填写邮箱验证码',
    defaultMessage: 'Please enter the email verification code',
  },
  invalidEmailCode: {
    id: `${prefix}.invalidEmailCode`,
    description: '请填写有效的邮箱验证码',
    defaultMessage: 'Please enter valid email verification code',
  },
  emptyMobileCode: {
    id: `${prefix}.emptyMobileCode`,
    description: '请填写手机验证码',
    defaultMessage: 'Please enter the mobile verification code',
  },
  invalidMobileCode: {
    id: `${prefix}.invalidMobileCode`,
    description: '请填写有效的手机验证码',
    defaultMessage: 'Please enter valid mobile verification code',
  },
  emailBindingNeeded: {
    id: `${prefix}.emailBindingNeeded`,
    description: '需要绑定邮箱',
    defaultMessage: 'Email binding needed',
  },
  emailBindingHint: {
    id: `${prefix}.emailBindingHint`,
    description: '为了您的资金安全，绑定邮箱后才可进行提现',
    defaultMessage: 'For fund security, please bind your email before withdrawal',
  },
  mobileBindingNeeded: {
    id: `${prefix}.mobileBindingNeeded`,
    description: '需要绑定手机',
    defaultMessage: 'Mobile binding needed',
  },
  mobileBindingHint: {
    id: `${prefix}.mobileBindingHint`,
    description: '为了您的资金安全，绑定手机后才可进行提现',
    defaultMessage: 'For fund security, please bind your mobile phone before withdrawal',
  },
  frozen24H: {
    id: `${prefix}.frozen24H`,
    description: '修改过安全设置 24 小时内不可提现',
    defaultMessage: 'Can\'t withdraw within 24 hours after modified security settings',
  },
  frozen24HHint: {
    id: `${prefix}.frozen24HHint`,
    description: '安全设置包括：修改登录密码、关闭手机验证、修改手机绑定 24 小时内不可提现',
    defaultMessage: 'Security settings include: modify login password, turn off phone verification, modify phone binding',
  },
  identifyNeeded: {
    id: `${prefix}.identifyNeeded`,
    description: '需要进行身份认证',
    defaultMessage: 'Identity authentication needed',
  },
  identifyHint: {
    id: `${prefix}.identifyHint`,
    description: '为了您的资金安全，请先认证个人身份基本信息',
    defaultMessage: 'For the security of your funds, please first verify your personal identity basic information',
  },
  bindNow: {
    id: `${prefix}.bindNow`,
    description: '立即绑定',
    defaultMessage: 'Bind Now',
  },
  verifyNow: {
    id: `${prefix}.verifyNow`,
    description: '立即认证',
    defaultMessage: 'Verify Now',
  },
  withdrawLimitation: {
    id: `${prefix}.withdrawLimitation`,
    description: '24 小时提现额度：{limit} BTC（已用 {used} BTC）',
    defaultMessage: '24H withdrawal credit: {limit} BTC ({used} BTC used)',
  },
  availableLimit: {
    id: `${prefix}.availableLimit`,
    description: '可提现余额：{available} {symbol}',
    defaultMessage: 'Available: {available} {symbol}',
  },
  frozen: {
    id: `${prefix}.frozen`,
    description: '不可提现余额：{frozen} {symbol}',
    defaultMessage: 'Frozen: {frozen} {symbol}',
  },
  penddingDeposit: {
    id: `${prefix}.penddingDeposit`,
    description: '有资产充值未完全确认',
    defaultMessage: 'Asset deposit is not fully confirmed',
  },
  limitationReached: {
    id: `${prefix}.limitationReached`,
    description: '（提现额度不足）',
    defaultMessage: '(Insufficient withdrawal credit)',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费：{commission} {symbol}',
    defaultMessage: 'Commission: {commission} {symbol}',
  },
  warningPhrase1: {
    id: `${prefix}.warningPhrase1`,
    description: '最小提币数量为 {amount} {symbol}',
    defaultMessage: 'The minimum amount of withdraw is {amount} {symbol}',
  },
  warningPhrase2: {
    id: `${prefix}.warningPhrase2`,
    description: '请不要直接提现至众筹或者 ICO 地址，我们不会处理代币的发放',
    defaultMessage: 'Please do not withdraw directly to the crowdfunding or ICO address, we will not process the issuance of tokens',
  },
  success: {
    id: `${prefix}.success`,
    description: '提现请求已发送',
    defaultMessage: 'The withdraw request have been send',
  },
  disabled: {
    id: `${prefix}.disabled`,
    description: '{symbol} 暂时无法提现',
    defaultMessage: 'Withdraw of {symbol} is temporarily closed',
  },
});

export default definedMessages;
