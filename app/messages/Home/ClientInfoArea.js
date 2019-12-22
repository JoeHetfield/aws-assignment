import { defineMessages } from 'react-intl';

const prefix = 'Home.ClientInfoArea';

const definedMessages = defineMessages({
  slogan: {
    id: `${prefix}.slogan`,
    description: '随时随地，数字理财',
    defaultMessage: 'Bitnomic Anywhere, Anytime',
  },
  subSlogan: {
    id: `${prefix}.subSlogan`,
    description: 'iOS、Android 移动端接入',
    defaultMessage: 'iOS & Android Clients Available',
  },
  iosDownload: {
    id: `${prefix}.iosDownload`,
    description: 'iOS 客户端下载',
    defaultMessage: 'iOS Download',
  },
  andoridDownload: {
    id: `${prefix}.andoridDownload`,
    description: 'Android 客户端下载',
    defaultMessage: 'Android Download',
  },
});

export default definedMessages;
