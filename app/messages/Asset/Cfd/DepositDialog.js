import { defineMessages } from 'react-intl';

const prefix = 'Asset.Cfd.DepositDialog';

const definedMessages = defineMessages({
  deposit: {
    id: `${prefix}.deposit`,
    description: '{symbol} 充值',
    defaultMessage: '{symbol} Deposit',
  },
  availableMargin: {
    id: `${prefix}.availableMargin`,
    description: '可用保证金：{available}',
    defaultMessage: 'Available Margin: {available}',
  },
  positionMargin: {
    id: `${prefix}.positionMargin`,
    description: '已用保证金：{margin}',
    defaultMessage: 'Position Margin: {margin}',
  },
  warningPhase1: {
    id: `${prefix}.warningPhase1`,
    description: '不要向 {symbol} 地址充值除 {symbol} 之外的资产，否则将无法找回',
    defaultMessage: 'Any other assets deposited to {symbol} address will be irretrievable',
  },
  warningPhase2: {
    id: `${prefix}.warningPhase2`,
    description: '{symbol} 充值需要 {confirms} 个网络确认才能到账',
    defaultMessage: 'Deposit to {symbol} address requires {confirms} confirmation',
  },
  warningPhase3: {
    id: `${prefix}.warningPhase3`,
    description: '{symbol} 最小充值金额为：{min}，少于此金额本平台将不会确认到账',
    defaultMessage: 'The minimum deposit amount is {min} {symbol}. Any deposit less than {min} {symbol} will not be credited',
  },
  depositAddress: {
    id: `${prefix}.depositAddress`,
    description: '{symbol} 充值地址',
    defaultMessage: '{symbol} Deposit Address',
  },
  copied: {
    id: `${prefix}.copied`,
    description: '{symbol} 充值地址已拷贝至粘贴板',
    defaultMessage: '{symbol} deposit address have been copied to clipborad',
  },
});

export default definedMessages;
