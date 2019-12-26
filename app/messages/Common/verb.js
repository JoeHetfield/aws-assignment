import { defineMessages } from 'react-intl';

const prefix = 'Common';

const definedMessages = defineMessages({
  ok: {
    id: `${prefix}.ok`,
    description: '确定',
    defaultMessage: 'OK',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '取消',
    defaultMessage: 'Cancel',
  },
  close: {
    id: `${prefix}.close`,
    description: '关闭',
    defaultMessage: 'Close',
  },
  modify: {
    id: `${prefix}.modify`,
    description: '修改',
    defaultMessage: 'Modify',
  },
  buy: {
    id: `${prefix}.buy`,
    description: '买入',
    defaultMessage: 'Buy',
  },
  sell: {
    id: `${prefix}.sell`,
    description: '卖出',
    defaultMessage: 'Sell',
  },
  purchase: {
    id: `${prefix}.purchase`,
    description: '购买',
    defaultMessage: 'Purchase',
  },
  sale: {
    id: `${prefix}.sale`,
    description: '出售',
    defaultMessage: 'Sale',
  },
  long: {
    id: `${prefix}.long`,
    description: '做多',
    defaultMessage: 'Long',
  },
  short: {
    id: `${prefix}.short`,
    description: '做空',
    defaultMessage: 'Short',
  },
  transferIn: {
    id: `${prefix}.transferIn`,
    description: '转入',
    defaultMessage: 'Transfer In',
  },
  transferOut: {
    id: `${prefix}.transferOut`,
    description: '转出',
    defaultMessage: 'Transfer Out',
  },
  deposit: {
    id: `${prefix}.deposit`,
    description: '充值',
    defaultMessage: 'Deposit',
  },
  withdraw: {
    id: `${prefix}.withdraw`,
    description: '提现',
    defaultMessage: 'Withdraw',
  },
  transfer: {
    id: `${prefix}.transfer`,
    description: '划转',
    defaultMessage: 'Transfer',
  },
  internalTransfer: {
    id: `${prefix}.internalTransfer`,
    description: '站内划转',
    defaultMessage: 'Internal Transfer',
  },
  confirmSave: {
    id: `${prefix}.confirmSave`,
    description: '确认并保存',
    defaultMessage: 'Confirm & Save',
  },
  sendVerificationCode: {
    id: `${prefix}.sendVerificationCode`,
    description: '发送验证码',
    defaultMessage: 'Get Code',
  },
  prevStep: {
    id: `${prefix}.prevStep`,
    description: '上一步',
    defaultMessage: 'Prev',
  },
  nextStep: {
    id: `${prefix}.nextStep`,
    description: '下一步',
    defaultMessage: 'Next',
  },
  prevPage: {
    id: `${prefix}.prevPage`,
    description: '上一页',
    defaultMessage: 'Prev',
  },
  nextPage: {
    id: `${prefix}.nextPage`,
    description: '下一页',
    defaultMessage: 'Next',
  },
  warning: {
    id: `${prefix}.warning`,
    description: '注意：',
    defaultMessage: 'Warning:',
  },
  reveal: {
    id: `${prefix}.reveal`,
    description: '显示',
    defaultMessage: 'Reveal',
  },
  bind: {
    id: `${prefix}.bind`,
    description: '绑定',
    defaultMessage: 'Bind',
  },
  binded: {
    id: `${prefix}.binded`,
    description: '已绑定',
    defaultMessage: 'Binded',
  },
  signin: {
    id: `${prefix}.signin`,
    description: '登录',
    defaultMessage: 'Sign In',
  },
  signup: {
    id: `${prefix}.signup`,
    description: '注册账号',
    defaultMessage: 'Sign Up',
  },
  signInOrUp: {
    id: `${prefix}.signInOrUp`,
    description: '登录 / 注册',
    defaultMessage: 'Sign in / Sign up',
  },
  registerNow: {
    id: `${prefix}.registerNow`,
    description: '立即注册',
    defaultMessage: 'Register Now',
  },
  registered: {
    id: `${prefix}.registered`,
    description: '已注册',
    defaultMessage: 'Registered',
  },
  signUpPrize: {
    id: `${prefix}.signUpPrize`,
    description: '注册就送1币',
    defaultMessage: 'Sign Up And Give Away One Coin',
  },
  signUpSlogan: {
    id: `${prefix}.signUpSlogan`,
    description: '领取就能玩转起来',
    defaultMessage: 'Collect And Play',
  },
  signout: {
    id: `${prefix}.signout`,
    description: '退出登录',
    defaultMessage: 'Sign Out',
  },
  signoutConfirm: {
    id: `${prefix}.signoutConfirm`,
    description: '您确定要退出吗？',
    defaultMessage: 'Are you sure to sign out now?',
  },
  backToSignin: {
    id: `${prefix}.backToSignin`,
    description: '返回登录',
    defaultMessage: 'Back to Sign In',
  },
  signInToReview: {
    id: `${prefix}.signInToReview`,
    description: '登录以查看',
    defaultMessage: 'Sign in to review',
  },
  signInToTrade: {
    id: `${prefix}.signInToTrade`,
    description: '登录以交易',
    defaultMessage: 'Sign In to Trade',
  },
  pleaseWait: {
    id: `${prefix}.pleaseWait`,
    description: '请稍候',
    defaultMessage: 'Please wait',
  },
  booting: {
    id: `${prefix}.booting`,
    description: '加载中，请稍候……',
    defaultMessage: 'Loading... Please wait...',
  },
  noRecords: {
    id: `${prefix}.noRecords`,
    description: '暂无数据',
    defaultMessage: 'No Records Found',
  },
  coolDownSend: {
    id: `${prefix}.coolDown`,
    description: '{seconds} 秒后可再次发送',
    defaultMessage: 'Resend code after {seconds}s',
  },
  countryAndArea: {
    id: `${prefix}.countryAndArea`,
    description: '国家地区',
    defaultMessage: 'Country and Area',
  },
  verificationCode: {
    id: `${prefix}.verificationCode`,
    description: '验证码',
    defaultMessage: 'Verification Code',
  },
  mobile: {
    id: `${prefix}.mobile`,
    description: '手机',
    defaultMessage: 'Mobile',
  },
  mobileNumber: {
    id: `${prefix}.mobileNumber`,
    description: '手机号',
    defaultMessage: 'Mobile Phone Number',
  },
  mobileVerificationCode: {
    id: `${prefix}.mobileVerificationCode`,
    description: '手机验证码',
    defaultMessage: 'Mobile Verification Code',
  },
  mobileVerificationCodeSent: {
    id: `${prefix}.mobileVerificationCodeSent`,
    description: '验证码已发送至您的手机',
    defaultMessage: 'Verification code have been send to your mobile',
  },
  email: {
    id: `${prefix}.email`,
    description: '邮箱',
    defaultMessage: 'Email',
  },
  emailAddress: {
    id: `${prefix}.emailAddress`,
    description: '邮箱地址',
    defaultMessage: 'Email Address',
  },
  emailVerificationCode: {
    id: `${prefix}.emailVerificationCode`,
    description: '邮箱证码',
    defaultMessage: 'Email Verification Code',
  },
  emailVerificationCodeSent: {
    id: `${prefix}.emailVerificationCodeSent`,
    description: '验证码已发送至您的邮箱',
    defaultMessage: 'Verification code have been send to your mailbox',
  },
  mobileOrEmail: {
    id: `${prefix}.mobileOrEmail`,
    description: '手机号 / 邮箱',
    defaultMessage: 'Mobile or Email',
  },
  password: {
    id: `${prefix}.password`,
    description: '密码',
    defaultMessage: 'Password',
  },
  bankCard: {
    id: `${prefix}.bankCard`,
    description: '银行卡',
    defaultMessage: 'Bank Card',
  },
  bankCardInfo: {
    id: `${prefix}.bankCardInfo`,
    description: '开户行：{name}，开户地址：{branch}，银行卡号：{cardNumber}',
    defaultMessage: 'Bank Name: {name}, Branch: {branch}, Card No.: {cardNumber}',
  },
  wechat: {
    id: `${prefix}.wechat`,
    description: '微信',
    defaultMessage: 'Wechat',
  },
  wechatInfo: {
    id: `${prefix}.wechatInfo`,
    description: '微信用户名：{name}，微信支付号：{account}',
    defaultMessage: 'Wechat Name: {name}, Account: {account}',
  },
  alipay: {
    id: `${prefix}.alipay`,
    description: '支付宝',
    defaultMessage: 'Alipay',
  },
  alipayInfo: {
    id: `${prefix}.alipayInfo`,
    description: '支付宝用户名：{name}，支付宝支付号：{account}',
    defaultMessage: 'Alipay Name: {name}, Account: {account}',
  },
  unpaid: {
    id: `${prefix}.unpaid`,
    description: '未支付',
    defaultMessage: 'Not paid',
  },
  high: {
    id: `${prefix}.high`,
    description: '高',
    defaultMessage: 'HIGH',
  },
  medium: {
    id: `${prefix}.medium`,
    description: '中',
    defaultMessage: 'MEDIUM',
  },
  low: {
    id: `${prefix}.low`,
    description: '低',
    defaultMessage: 'LOW',
  },
  home: {
    id: `${prefix}.home`,
    description: '首页',
    defaultMessage: 'Home',
  },
  nomicky: {
    id: `${prefix}.nomicky`,
    description: '糯米宝',
    defaultMessage: 'Nomicky',
  },
  campaigns: {
    id: `${prefix}.campaigns`,
    description: '精彩活动',
    defaultMessage: 'Campaigns',
  },
  prevCampaigns: {
    id: `${prefix}.prevCampaigns`,
    description: '往期活动',
    defaultMessage: 'Previous Campaigns',
  },
  otc: {
    id: `${prefix}.otc`,
    description: 'C2C 交易',
    defaultMessage: 'OTC',
  },
  otcAbbr: {
    id: `${prefix}.otcAbbr`,
    description: 'C2C ',
    defaultMessage: 'OTC',
  },
  cfd: {
    id: `${prefix}.cfd`,
    description: '糯米合约',
    defaultMessage: 'CFD',
  },
  cfdAbbr: {
    id: `${prefix}.cfdAbbr`,
    description: '合约',
    defaultMessage: 'CFD',
  },
  spot: {
    id: `${prefix}.spot`,
    description: '币币交易',
    defaultMessage: 'SPOT',
  },
  spotAbbr: {
    id: `${prefix}.spotAbbr`,
    description: '币币',
    defaultMessage: 'SPOT',
  },
  assets: {
    id: `${prefix}.assets`,
    description: '资产',
    defaultMessage: 'Assets',
  },
  assetsManagement: {
    id: `${prefix}.assetsManagement`,
    description: '资产管理',
    defaultMessage: 'Assets',
  },
  help: {
    id: `${prefix}.help`,
    description: '帮助',
    defaultMessage: 'Help',
  },
  positions: {
    id: `${prefix}.positions`,
    description: '仓位',
    defaultMessage: 'Positions',
  },
  account: {
    id: `${prefix}.account`,
    description: '账户',
    defaultMessage: 'Account',
  },
  accountInfo: {
    id: `${prefix}.accountInfo`,
    description: '账号信息',
    defaultMessage: 'Account Info',
  },
  language: {
    id: `${prefix}.language`,
    description: '语言',
    defaultMessage: 'Language',
  },
  userCenterHint: {
    id: `${prefix}.userCenterHint`,
    description: '您可以在用户中心完成这些手续',
    defaultMessage: 'You can complete these requirements in User Center',
  },
  gotoUserCenter: {
    id: `${prefix}.gotoUserCenter`,
    description: '前往用户中心',
    defaultMessage: 'To User Center Now',
  },
  kyc2Success: {
    id: `${prefix}.kyc2Success`,
    description: '高级用户信息认证已完成，点击这里回到首页',
    defaultMessage: 'Advanced user information verification succeed. Click here to return to home.',
  },
  userGuide: {
    id: `${prefix}.userGuide`,
    description: '新手教程',
    defaultMessage: 'User Guide',
  },
  trading: {
    id: `${prefix}.spotTrading`,
    description: '如何交易',
    defaultMessage: 'How to trade',
  },
  contract: {
    id: `${prefix}.contract`,
    description: '合约交易',
    defaultMessage: 'Contract Transaction',
  },
  currency: {
    id: `${prefix}.currency`,
    description: '币币交易',
    defaultMessage: 'Currency Transaction',
  },
  howDeposit: {
    id: `${prefix}.howDeposit`,
    description: '如何充值',
    defaultMessage: 'How to deposit',
  },
  // withdraw: {
  //   id: `${prefix}.withdraw`,
  //   description: '如何提现',
  //   defaultMessage: 'How to withdraw',
  // },
  register: {
    id: `${prefix}.register`,
    description: '如何注册',
    defaultMessage: 'How to register',
  },
  basicVerification: {
    id: `${prefix}.basicVerification`,
    description: '如何进行基本信息验证',
    defaultMessage: 'How to verify basic idendity information',
  },
  resetPassword: {
    id: `${prefix}.resetPassword`,
    description: '如何重置密码',
    defaultMessage: 'How to reset password',
  },
  bindBankCard: {
    id: `${prefix}.bindBankCard`,
    description: '如何绑定银行卡',
    defaultMessage: 'How to bind bank card',
  },
  bindEmail: {
    id: `${prefix}.bindEmail`,
    description: '如何绑定电子邮件',
    defaultMessage: 'How to bind email',
  },
  safe: {
    id: `${prefix}.safe`,
    description: '安全指南',
    defaultMessage: 'Safety guide',
  },
  question: {
    id: `${prefix}.question`,
    description: '常见问题',
    defaultMessage: 'Common problem',
  },
  statement: {
    id: `${prefix}.statement`,
    description: '法律声明',
    defaultMessage: 'Legal notices',
  },
  terms: {
    id: `${prefix}.terms`,
    description: '隐私条款',
    defaultMessage: 'Privacy policy',
  },
  userAgreement: {
    id: `${prefix}.userAgreement`,
    description: '用户协议',
    defaultMessage: 'User agreement',
  },
  instructions: {
    id: `${prefix}.instructions`,
    description: '安全须知',
    defaultMessage: 'Safety instructions',
  },
  phishingAttack: {
    id: `${prefix}.phishingAttack`,
    description: '如何防止钓鱼攻击',
    defaultMessage: 'How to prevent phishing attacks',
  },
  antiVirus: {
    id: `${prefix}.antiVirus`,
    description: '防病毒和木马指南',
    defaultMessage: 'Antivirus and trojan guide',
  },
  assetSecurity: {
    id: `${prefix}.assetSecurity`,
    description: '资产存放在 Bitnomic 是否安全',
    defaultMessage: 'Is It Safe To Store Assets In Bitnomic',
  },
  strSecurity: {
    id: `${prefix}.strSecurity`,
    description: '如何加强账户安全',
    defaultMessage: 'How To Strengthen Account Security',
  },
  announcements: {
    id: `${prefix}.announcements`,
    description: '活动公告',
    defaultMessage: 'Upcoming Events',
  },
  myInvitationCode: {
    id: `${prefix}.myInvitationCode`,
    description: '我的邀请码',
    defaultMessage: 'My Invitation Code',
  },
  orderManagement: {
    id: `${prefix}.orderManagement`,
    description: '订单管理',
    defaultMessage: 'Order Management',
  },
  fees: {
    id: `${prefix}.fees`,
    description: '费率标准',
    defaultMessage: 'Fees Schedule',
  },
  download: {
    id: `${prefix}.download`,
    description: '推荐下载',
    defaultMessage: 'Recommended Download',
  },
  onlineService: {
    id: `${prefix}.onlineService`,
    description: '在线客服',
    defaultMessage: 'Online Service',
  },
  default: {
    id: `${prefix}.default`,
    description: '默认',
    defaultMessage: 'Default',
  },
  authentication: {
    id: `${prefix}.authentication`,
    description: '身份认证',
    defaultMessage: 'Authentication',
  },
  loginPassword: {
    id: `${prefix}.loginPassword`,
    description: '登录密码',
    defaultMessage: 'Login Password',
  },
  PersonalCenter: {
    id: `${prefix}.PersonalCenter`,
    description: '个人中心',
    defaultMessage: 'Personal Center',
  },
});

export default definedMessages;
