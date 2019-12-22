import Cookies from 'js-cookie';
import pluck from 'ramda/es/pluck';
import { fromJS } from 'immutable';
import { network, history } from 'utils';
import config from 'config';

const prefix = 'SESSION';

const OPEN_SIGNIN_DIALOG = `${prefix}.OPEN_SIGNIN_DIALOG`;
const CLOSE_SIGNIN_DIALOG = `${prefix}.CLOSE_SIGNIN_DIALOG`;

const openSignInDialog = (redirect = '') => ({
  type: OPEN_SIGNIN_DIALOG,
  payload: redirect,
});

const closeSignInDialog = () => ({
  type: CLOSE_SIGNIN_DIALOG,
});

// ////////////////////////////////

const OPEN_SIGNOUT_DIALOG = `${prefix}.OPEN_SIGNOUT_DIALOG`;
const CLOSE_SIGNOUT_DIALOG = `${prefix}.CLOSE_SIGNOUT_DIALOG`;

const openSignOutDialog = () => ({
  type: OPEN_SIGNOUT_DIALOG,
});

const closeSignOutDialog = () => ({
  type: CLOSE_SIGNOUT_DIALOG,
});

// ////////////////////////////////

const SWITCH_TAB = `${prefix}.SWITCH_TAB`;

const switchTab = tabIndex => ({
  type: SWITCH_TAB,
  payload: tabIndex,
});

// ////////////////////////////////

const INVITATION = `${prefix}.INVITATION`;

const invitation = invitationCode => ({
  type: INVITATION,
  payload: invitationCode,
});

// ////////////////////////////////

const signup = params => dispatch => network
  .post(`${config.api}/v1/users/membership/sign-up/${params.method}`, params)
  .then(() => dispatch(switchTab('signin')));

// ////////////////////////////////

const SIGNIN_SUCCESS = `${prefix}.SIGNIN_SUCCESS`;
const VERIFY_SUCCESS = `${prefix}.VERIFY_SUCCESS`;

const signinSuccess = verificationInfo => ({
  type: SIGNIN_SUCCESS,
  payload: verificationInfo,
});

const verifySuccess = user => ({
  type: VERIFY_SUCCESS,
  payload: user,
});

const signin = params => dispatch => network
  .post(`${config.api}/v1/users/membership/sign-in`, params)
  // .then((verificationInfo) => {
  //   if (verificationInfo.scopes && verificationInfo.scopes.length) {
  //     dispatch(signinSuccess(fromJS(verificationInfo)));
  //     dispatch(switchTab('verification'));
  //   }
  // });
  .then((result) => {
    Cookies.set('token', result.accessToken);
    dispatch(verifySuccess(fromJS(result)));
    dispatch(closeSignInDialog());
  });

const verify = params => dispatch => network
  .post(`${config.api}/v1/users/security/pwd/verify-login-new`, params)
  .then((result) => {
    Cookies.set('token', result.accessToken);
    dispatch(verifySuccess(fromJS(result)));
    dispatch(closeSignInDialog());
  });

// ////////////////////////////////

const SIGNOUT_SUCCESS = `${prefix}.SIGNOUT_SUCCESS`;

const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

const signout = () => dispatch => network
  .get(`${config.api}/v1/users/membership/sign-out`)
  .then((result) => {
    Cookies.remove('token');
    history.push('/home');
    dispatch(signoutSuccess(result));
    dispatch(closeSignOutDialog());
  });

// ////////////////////////////////

const ACCOUNT_CONFIRM_SUCCESS = `${prefix}.ACCOUNT_CONFIRM_SUCCESS`;

const accountConfirmSuccess = account => ({
  type: ACCOUNT_CONFIRM_SUCCESS,
  payload: account,
});

const accountConfirm = params => dispatch => network
  .post(`${config.api}/v1/users/membership/forget-pwd/confirm-account`, params)
  .then((result) => {
    dispatch(accountConfirmSuccess(fromJS({
      checkItems: pluck('name')(result.behaviors.checkItems),
      loginName: result.loginName,
      shadeEmail: result.shadeEmail,
      shadeMobile: result.shadeMobile,
    })));
    dispatch(switchTab('resetPassword'));
  });

const resetPassword = params => dispatch => network
  .put(`${config.api}/v1/users/membership/forget-pwd/pwd-reset`, params)
  .then(() => dispatch(switchTab('signin')));

export default {
  // signin - dialog
  OPEN_SIGNIN_DIALOG,
  CLOSE_SIGNIN_DIALOG,
  openSignInDialog,
  closeSignInDialog,
  // signout - dialog
  OPEN_SIGNOUT_DIALOG,
  CLOSE_SIGNOUT_DIALOG,
  openSignOutDialog,
  closeSignOutDialog,
  // signin - dialog switch tab
  SWITCH_TAB,
  switchTab,
  // invitation
  INVITATION,
  invitation,
  // signup
  signup,
  // signin
  SIGNIN_SUCCESS,
  signin,
  VERIFY_SUCCESS,
  verifySuccess,
  verify,
  // signout
  SIGNOUT_SUCCESS,
  signout,
  // reset password
  ACCOUNT_CONFIRM_SUCCESS,
  accountConfirm,
  resetPassword,
};
