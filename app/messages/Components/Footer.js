import { defineMessages } from 'react-intl';

const prefix = 'Components.Footer';

const definedMessages = defineMessages({
  warning: {
    id: `${prefix}.warning`,
    description: '币市有风险，投资需谨慎',
    defaultMessage: 'Risks in cryptocurrency trading. Be cautious to your investment.',
  },
  about: {
    id: `${prefix}.about`,
    defaultMessage: 'About',
    description: '关于',
  },
  aboutUs: {
    id: `${prefix}.aboutUs`,
    description: '关于我们',
    defaultMessage: 'About us',
  },
  contactUs: {
    id: `${prefix}.contactUs`,
    description: '联系我们',
    defaultMessage: 'Contact us',
  },
  tokenListing: {
    id: `${prefix}.tokenListing`,
    description: '上币申请',
    defaultMessage: 'Token Listing',
  },
  Announcements: {
    id: `${prefix}.Announcements`,
    description: '公告',
    defaultMessage: 'Announcements',
  },
  information: {
    id: `${prefix}.information`,
    defaultMessage: 'Information',
    description: '条款说明',
  },
  termsOfService: {
    id: `${prefix}.termsOfService`,
    description: '服务条款',
    defaultMessage: 'Terms of Service',
  },
  privacyPolicy: {
    id: `${prefix}.privacyPolicy`,
    description: '隐私政策',
    defaultMessage: 'Privacy Policy',
  },
  support: {
    id: `${prefix}.support`,
    defaultMessage: 'Support',
    description: '用户支持',
  },
  helpCenter: {
    id: `${prefix}.helpCenter`,
    description: '帮助中心',
    defaultMessage: 'Help Center',
  },
  feedback: {
    id: `${prefix}.feedback`,
    description: '问题反馈',
    defaultMessage: 'Feedback',
  },
  fees: {
    id: `${prefix}.fees`,
    description: '费率标准',
    defaultMessage: 'Fees Schedule',
  },
  apiDocuments: {
    id: `${prefix}.apiDocuments`,
    description: 'API 文档',
    defaultMessage: 'API Document',
  },
  findUs: {
    id: `${prefix}.findUs`,
    description: '联系我们',
    defaultMessage: 'Find us',
  },
});

export default definedMessages;
