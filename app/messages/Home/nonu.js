import { defineMessages } from 'react-intl';

const prefix = 'DeviceType.Nonu';

const definedMessages = defineMessages({
  documentation: {
    id: `${prefix}.documentation`,
    description: '文档',
    defaultMessage: 'Documentation',
  },
  overview: {
    id: `${prefix}.overview`,
    description: '解决方案概览',
    defaultMessage: 'Solution Overview',
  },
  guide: {
    id: `${prefix}.guide`,
    description: '解决方案实现指南',
    defaultMessage: 'Solution Implementation Guide',
  },
  repository: {
    id: `${prefix}.repository`,
    description: 'GitHub 仓库',
    defaultMessage: 'GitHub Repository',
  },
});

export default definedMessages;
