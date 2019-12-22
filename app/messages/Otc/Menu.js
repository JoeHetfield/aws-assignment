import { defineMessages } from 'react-intl';

const prefix = 'Otc.Menu';

const definedMessages = defineMessages({
  tokenName: {
    id: `${prefix}.tokenName`,
    description: '交易币种',
    defaultMessage: 'Token Name',
  },
  price: {
    id: `${prefix}.price`,
    description: '最新价',
    defaultMessage: 'Price',
  },
  fluctuation: {
    id: `${prefix}.fluctuation`,
    description: '涨跌幅',
    defaultMessage: 'Change Rate',
  },
  signinToReview: {
    id: `${prefix}.signinToReview`,
    description: '登录以查看 C2C 交易信息',
    defaultMessage: 'Sign in to review OTC Information',
  },
  myAssets: {
    id: `${prefix}.myAssets`,
    description: '我的 {symbol} 资产',
    defaultMessage: 'My {symbol} Assets',
  },
  available: {
    id: `${prefix}.available`,
    description: '可用',
    defaultMessage: 'Available',
  },
  frozen: {
    id: `${prefix}.frozen`,
    description: '冻结',
    defaultMessage: 'Frozen',
  },
  myStatus: {
    id: `${prefix}.myStatus`,
    description: '我的 C2C 交易状态',
    defaultMessage: 'My OTC Status',
  },
  orders: {
    id: `${prefix}.orders`,
    description: '单数',
    defaultMessage: 'Orders',
  },
  complitionRate: {
    id: `${prefix}.complitionRate`,
    description: '完成率',
    defaultMessage: 'Complition Rate',
  },
  paymentTime: {
    id: `${prefix}.paymentTime`,
    description: '平均付款时间',
    defaultMessage: 'Avg. Time of Payment',
  },
  releaseTime: {
    id: `${prefix}.releaseTime`,
    description: '平均放币时间',
    defaultMessage: 'Avg. Time of Token Release',
  },
  publish: {
    id: `${prefix}.publish`,
    description: '发布广告单',
    defaultMessage: 'Publish Offer',
  },
});

export default definedMessages;
