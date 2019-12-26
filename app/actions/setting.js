import Cookies from 'js-cookie';
import { fromJS } from 'immutable';
import { network } from 'utils';

const prefix = 'SETTING';
const CHANGE_LOCALE = `${prefix}.CHANGE_LOCALE`;
const LOAD_MESSAGES_REQUEST = `${prefix}.LOAD_MESSAGES_REQUEST`;
const LOAD_MESSAGES_SUCCESS = `${prefix}.LOAD_MESSAGES_SUCCESS`;
const LOAD_MESSAGES_FAILURE = `${prefix}.LOAD_MESSAGES_FAILURE`;

const _changeLocale = locale => ({
  type: CHANGE_LOCALE,
  payload: locale,
});

const loadMessageRequest = () => ({
  type: LOAD_MESSAGES_REQUEST,
});

const loadMessageSuccess = (locale, messages) => ({
  type: LOAD_MESSAGES_SUCCESS,
  payload: {
    locale,
    messages,
  },
});

const loadMessageFailure = error => ({
  type: LOAD_MESSAGES_FAILURE,
  payload: error,
});

const changeLocale = locale => (dispatch, getState) => {
  const { messages } = getState().ui;

  switch (locale) {
    case 'zh-CN':
      Cookies.set('locale', 'zh-CN');
      break;
    default:
      Cookies.set('locale', 'en-US');
  }

  if (locale === 'en' || messages.get(locale)) {
    return dispatch(_changeLocale(locale));
  }

  dispatch(loadMessageRequest());

  return network.get(`/lang/${locale}.js`)
    .then(fromJS)
    .then((result) => {
      dispatch(loadMessageSuccess(locale, result));
      dispatch(_changeLocale(locale));
    })
    .catch(error => dispatch(loadMessageFailure(error)));
};

export default {
  CHANGE_LOCALE,
  LOAD_MESSAGES_REQUEST,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_FAILURE,
  loadMessageSuccess,
  loadMessageFailure,
  changeLocale,
};
