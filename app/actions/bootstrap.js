import Cookies from 'js-cookie';
import { fromJS } from 'immutable';
import { locale } from 'utils';
import {
  Session,
} from 'actions';

const prefix = 'BOOTSTRAP';

// ////////////////////////////////

const LOAD_USER_REQUEST = `${prefix}.LOAD_USER_REQUEST`;
const LOAD_USER_SUCCESS = `${prefix}.LOAD_USER_SUCCESS`;
const LOAD_USER_FAILURE = `${prefix}.LOAD_USER_FAILURE`;

const loadUserRequest = () => ({
  type: LOAD_USER_REQUEST,
});

const loadUserSuccess = () => ({
  type: LOAD_USER_SUCCESS,
});

const loadUserFailure = (error) => ({
  type: LOAD_USER_FAILURE,
  payload: error,
});

const loadUser = () => (dispatch) => {
  dispatch(loadUserRequest());

  const tasks = [
    // dispatch(User.Profile.load()),
    // dispatch(User.Payments.load()),
    // dispatch(User.Kyc1.load()),
    // dispatch(Asset.Spot.load()),
    // dispatch(Asset.Otc.load()),
    // dispatch(Asset.Cfd.load()),
    // dispatch(Otc.Status.load()),
  ];

  return Promise.all(tasks)
    .then(() => dispatch(loadUserSuccess()))
    .catch((error) => dispatch(loadUserFailure(error)));
};

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
  const accessToken = Cookies.get('token');

  const tasks = [
    // dispatch(Setting.changeLocale(preference)),
    // dispatch(Market.ExchangeRate.load()),
    // dispatch(Market.Indexes.load()),
    // dispatch(Spot.Products.load()),
    // dispatch(Cfd.Products.load()),
    // dispatch(Otc.Products.load()),
  ];

  Promise.all(tasks)
    .then(() => {
      if (accessToken) {
        return Promise.resolve()
          .then(() => dispatch(Session.verifySuccess(fromJS({ accessToken }))))
          .then(() => dispatch(loadUser()));
      }
    })
    .then(() => dispatch(success()))
    .catch((error) => dispatch(failure(error)));
};

export default {
  REQUEST,
  SUCCESS,
  FAILURE,
  start,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  loadUser,
};
