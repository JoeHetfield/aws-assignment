import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const MESSAGES_PATTERN = './app/i18n/**/*.json';
const LANG_DIR = './app/i18n/lang';

const supportedLanguage = [];

const ksort = (obj) => {
  const keys = Object.keys(obj).sort();
  return keys.reduce((collection, item) => {
    collection[item] = obj[item];
    return collection;
  }, {});
};

const jsonFiles = globSync(MESSAGES_PATTERN)
  .filter((filename) => {
    const path = filename.replace('/i18n/app', '').replace('.json', '.jsx');
    const path2 = filename.replace('/i18n/app', '').replace('.json', '.js');

    return fs.existsSync(path) || fs.existsSync(path2);
  })
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(JSON.parse);

const defaultMessages = jsonFiles
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        console.error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

const chineseMessages = jsonFiles
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, description }) => {
      if (collection.hasOwnProperty(id)) {
        console.error(`Duplicate message id: ${id}`);
      }
      collection[id] = description;
    });

    return collection;
  }, {});

const processOtherLanguage = languages => languages.forEach((language) => {
  const languageFilePath = `${LANG_DIR}/${language}.js`;

  const otherLanguageMessages = fs.existsSync(languageFilePath) ? JSON.parse(fs.readFileSync(languageFilePath, 'utf8')) : {};

  Object.keys(chineseMessages)
    .map((messageId) => {
      if (!otherLanguageMessages[messageId]) {
        otherLanguageMessages[messageId] = `（待翻译）${chineseMessages[messageId]}`;
      }
    });

  fs.writeFileSync(languageFilePath, JSON.stringify(ksort(otherLanguageMessages), null, 2));
});

// 删除不存在的jsx文件的json
const removeRedundantFile = () => globSync(MESSAGES_PATTERN)
  .filter((filename) => {
    const path = filename.replace('/i18n/app', '').replace('.json', '.jsx');
    const path2 = filename.replace('/i18n/app', '').replace('.json', '.js');

    return !fs.existsSync(path) && !fs.existsSync(path2);
  })
  .map(fs.unlinkSync);

// Create directory for language files
mkdirpSync(LANG_DIR);

// Create default language file (en.js) from defaultMessage field
fs.writeFileSync(`${LANG_DIR}/en-US.js`, JSON.stringify(ksort(defaultMessages), null, 2));

// Create Chinese language file (zh.js) from description field
fs.writeFileSync(`${LANG_DIR}/zh-CN.js`, JSON.stringify(ksort(chineseMessages), null, 2));

// Process other language file for translators
processOtherLanguage(supportedLanguage);

removeRedundantFile();
