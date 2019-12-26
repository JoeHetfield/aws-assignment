import Cookies from 'js-cookie';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([
  ...en,
  ...zh,
]);

const supportedLanguages = ['zh-CN', 'en-US'];
const defaultLanguage = 'en-US';

const currencySymbolMap = {
  'zh-CN': 'CNY',
  'en-US': 'USD',
  ja: 'JPY',
  fr: 'EUR',
  ru: 'RUB',
};

// eslint-disable-next-line import/prefer-default-export
export const getPreference = () => {
  const cookieLanguage = Cookies.get('locale');
  // const browserLanguage = navigator.languages ? navigator.languages.filter((lang) => supportedLanguages.includes(lang)) : navigator.language;
  return cookieLanguage || defaultLanguage;
};

export const getCurrencySymbol = (locale) => currencySymbolMap[locale] || 'CNY';
