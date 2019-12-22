import { defineMessages } from 'react-intl';

const prefix = 'Otc.PublishDialog';

const definedMessages = defineMessages({
  requirements: {
    id: `${prefix}.requirements`,
    description: '要进行 C2C 交易，需要满足以下要求',
    defaultMessage: 'Before make OTC transaction, please fullfill these requirements below:',
  },
  requirement1: {
    id: `${prefix}.requirement1`,
    description: '完成基本信息认证',
    defaultMessage: 'Complete the baisc identity verification',
  },
  requirement2: {
    id: `${prefix}.requirement2`,
    description: '完成高级信息认证',
    defaultMessage: 'Complete the advanced identity verification',
  },
  requirement3: {
    id: `${prefix}.requirement3`,
    description: '账号绑定手机',
    defaultMessage: 'Bind account with a mobile phone',
  },
  requirement4: {
    id: `${prefix}.requirement4`,
    description: '账号绑定绑定至少一种支付方式（银行卡、微信、支付宝）',
    defaultMessage: 'Bind account with at least one payment method (BankCard, WeChat or Alipay)',
  },
  buyToken: {
    id: `${prefix}.buyToken`,
    description: '购买 {symbol}',
    defaultMessage: 'Buy {symbol}',
  },
  sellToken: {
    id: `${prefix}.sellToken`,
    description: '出售 {symbol}',
    defaultMessage: 'Sell {symbol}',
  },
  currentIndex: {
    id: `${prefix}.currentIndex`,
    description: '当前指数：{index}',
    defaultMessage: 'Current Index: {index}',
  },
  followIndex: {
    id: `${prefix}.followIndex`,
    description: '跟随指数',
    defaultMessage: 'Follow Index',
  },
  offerValue: {
    id: `${prefix}.offerValue`,
    description: '订单金额：{index}',
    defaultMessage: 'Amount: {index}',
  },
  floatRate: {
    id: `${prefix}.floatRate`,
    description: '浮动比例',
    defaultMessage: 'Float Rate',
  },
  price: {
    id: `${prefix}.price`,
    description: '价格',
    defaultMessage: 'Price',
  },
  amount: {
    id: `${prefix}.amount`,
    description: '数量',
    defaultMessage: 'Amount',
  },
  sellAll: {
    id: `${prefix}.sellAll`,
    description: '全部出售',
    defaultMessage: 'Sell All',
  },
  minAmount: {
    id: `${prefix}.minAmount`,
    description: '单笔最低',
    defaultMessage: 'Minimum amount per trade',
  },
  minAmountHint: {
    id: `${prefix}.minAmountHint`,
    description: '最低限额为 {value}',
    defaultMessage: 'Min Amount is {value}',
  },
  maxAmount: {
    id: `${prefix}.maxAmount`,
    description: '单笔最高',
    defaultMessage: 'Maximum amount per trade',
  },
  maxAmountHint: {
    id: `${prefix}.maxAmountHint`,
    description: '最高限额为 {value}',
    defaultMessage: 'Max Amount is {value}',
  },
  notes: {
    id: `${prefix}.notes`,
    description: '交易说明（选填）',
    defaultMessage: 'Note (Optional)',
  },
  noteHint: {
    id: `${prefix}.noteHint`,
    description: '50 字以内，可换行输入',
    defaultMessage: 'No more than 50 characters, multi-line input is possible',
  },
  confirmPublish: {
    id: `${prefix}.confirmPublish`,
    description: '确认发布',
    defaultMessage: 'Confirm',
  },
  emptyPrice: {
    id: `${prefix}.emptyPrice`,
    description: '请输入价格',
    defaultMessage: 'Please enter the price',
  },
  emptyFloatRate: {
    id: `${prefix}.emptyFloatRate`,
    description: '请输入浮动比例',
    defaultMessage: 'Please enter the price float rate',
  },
  emptyAmount: {
    id: `${prefix}.emptyAmount`,
    description: '请输入数量',
    defaultMessage: 'Please enter the amount',
  },
  invalidMinAmount: {
    id: `${prefix}.invalidMinAmount`,
    description: '单笔不可低于 {value} 人民币',
    defaultMessage: 'Can\'t less than {value} CNY per trade',
  },
  invalidMaxAmount: {
    id: `${prefix}.invalidMaxAmount`,
    description: '单笔不可高于 {value} 人民币',
    defaultMessage: 'Can\'t more than {value} CNY per trade',
  },
  maxAmountLimitation: {
    id: `${prefix}.maxAmountLimitation`,
    description: '单笔最高不可低于 2000 人民币',
    defaultMessage: 'Can\'t less than 2000 CNY per trade',
  },
  tooLongNote: {
    id: `${prefix}.tooLongNote`,
    description: '不可超过 50 个字',
    defaultMessage: 'Please enter within 50 characters',
  },
  mustAgree: {
    id: `${prefix}.mustAgree`,
    description: '请阅读并确认关条例',
    defaultMessage: 'Please read and confirm the regulation',
  },
  success: {
    id: `${prefix}.success`,
    description: '广告单发布成功',
    defaultMessage: 'Offer publish succeed',
  },
  agreementForBuy: {
    id: `${prefix}.agreementForBuy`,
    description: '我已知晓平台超时未支付订单会自动取消以及',
    defaultMessage: 'I\'m aware that the platform will cancel the order automatcally for the order which is not processed in time and ',
  },
  agreementForSell: {
    id: `${prefix}.agreementForSell`,
    description: '我已知晓平台超时未确认收款订单会自动放币以及',
    defaultMessage: 'I\'m aware that the platform will release the digital assets automatcally for the order which is not processed in time and ',
  },
  termOfService: {
    id: `${prefix}.termOfService`,
    description: 'C2C 服务协议',
    defaultMessage: 'the Term of Service for OTC',
  },
});

export default definedMessages;
