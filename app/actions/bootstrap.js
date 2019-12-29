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

// bootstrap app, all initializations will be execute here
const start = () => (dispatch) => {
  dispatch(request());

  const preference = locale.getPreference();

  // initialization tasks, insert any initial operations in this array
  const tasks = [
    dispatch(Setting.changeLocale(preference)),
  ];

  // run all tasks, notify bootstrap state to redux store
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
