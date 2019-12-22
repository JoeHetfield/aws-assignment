import { defineMessages } from 'react-intl';

const prefix = 'Asset.Cfd.BillsTable';

const definedMessages = defineMessages({
  bills: {
    id: `${prefix}.bills`,
    description: '账单',
    defaultMessage: 'Bills',
  },
  diposit: {
    id: `${prefix}.diposit`,
    description: '充值',
    defaultMessage: 'Diposit',
  },
  withdraw: {
    id: `${prefix}.withdraw`,
    description: '提现',
    defaultMessage: 'Withdraw',
  },
  openPosition: {
    id: `${prefix}.openPosition`,
    description: '开仓',
    defaultMessage: 'Open Position',
  },
  liquidation: {
    id: `${prefix}.liquidation`,
    description: '平仓',
    defaultMessage: 'Liquidation',
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
  funding: {
    id: `${prefix}.funding`,
    description: '过夜费',
    defaultMessage: 'Funding',
  },
  commission: {
    id: `${prefix}.commission`,
    description: '手续费',
    defaultMessage: 'Commission',
  },
  selfCommissionReward: {
    id: `${prefix}.selfCommissionReward`,
    description: '自返佣',
    defaultMessage: 'Self Commission Reward',
  },
  lv1CommissionReward: {
    id: `${prefix}.lv1CommissionReward`,
    description: '第一级返佣',
    defaultMessage: 'Commission Reward Lv1',
  },
  lv2CommissionReward: {
    id: `${prefix}.lv2CommissionReward`,
    description: '第二级返佣',
    defaultMessage: 'Commission Reward Lv2',
  },
  settlement: {
    id: `${prefix}.settlement`,
    description: '结算',
    defaultMessage: 'Settlement',
  },
  partnerPnl: {
    id: `${prefix}.partnerPnl`,
    description: '合伙人盈亏',
    defaultMessage: 'Partner PnL',
  },
  partnerFunding: {
    id: `${prefix}.partnerFunding`,
    description: '合伙人过夜费',
    defaultMessage: 'Partner Funding',
  },
  systemFunding: {
    id: `${prefix}.systemFunding`,
    description: '系统过夜费',
    defaultMessage: 'System funding',
  },
  partnerCommission: {
    id: `${prefix}.partnerCommission`,
    description: '合伙人手续费',
    defaultMessage: 'Partner Commission',
  },
  distributorCommission: {
    id: `${prefix}.distributorCommission`,
    description: '分销商手续费',
    defaultMessage: 'Distributor Commission',
  },
  salesCommission: {
    id: `${prefix}.salesCommission`,
    description: '业务员手续费',
    defaultMessage: 'Sales Commission',
  },
  systemCommission: {
    id: `${prefix}.systemCommission`,
    description: '系统手续费',
    defaultMessage: 'System Commission',
  },
  transferOutPermanet: {
    id: `${prefix}.transferOutPermanet`,
    description: '出金',
    defaultMessage: 'Transfer Out Permanet',
  },
  plan: {
    id: `${prefix}.plan`,
    description: '计划委托',
    defaultMessage: 'Plan Order',
  },
  cancel: {
    id: `${prefix}.cancel`,
    description: '撤单',
    defaultMessage: 'Cancel Order',
  },
  dateTime: {
    id: `${prefix}.dateTime`,
    description: '日期 / 时间',
    defaultMessage: 'Date / Time',
  },
  balance: {
    id: `${prefix}.balance`,
    description: '余额',
    defaultMessage: 'Balance',
  },
});

export default definedMessages;
