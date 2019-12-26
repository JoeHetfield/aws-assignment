import { locale } from 'utils';
import {
  Setting,
} from 'actions';

const prefix = 'BOOTSTRAP';

// ////////////////////////////////

const REQUEST = `${prefix}.REQUEST`;
const SUCCESS = `${prefix}.SUCCESS`;
const FAILURE = `${prefix}.FAILURE`;

const request = () => ({
  type: REQUEST,
});

const success = () => ({
  type: SUCCESS,
});

const failure = (error) => ({
  type: FAILURE,
  payload: error,
});

const start = () => (dispatch) => {
  dispatch(request());

  const preference = locale.getPreference();

  const tasks = [
    dispatch(Setting.changeLocale(preference)),
  ];

  Promise.all(tasks)
    .then(() => dispatch(success()))
    .catch((error) => dispatch(failure(error)));
};

export default {
  REQUEST,
  SUCCESS,
  FAILURE,
  start,
};
