import { defineMessages } from 'react-intl';

const prefix = 'User.ProfilePane.Kyc2Dialog';

const definedMessages = defineMessages({
  scanQr: {
    id: `${prefix}.scanQr`,
    description: '扫描二维码完成认证',
    defaultMessage: 'Scan QR code for verification',
  },
});

export default definedMessages;
