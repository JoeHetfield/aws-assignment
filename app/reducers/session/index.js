import { combineReducers } from 'redux';

import { Session } from 'actions';

const token = (state = '', { type, payload }) => {
  switch (type) {
    case Session.VERIFY_SUCCESS:
      return payload.get('accessToken');
    case Session.SIGNOUT_SUCCESS:
      return '';
    default:
      return state;
  }
};

export default combineReducers({
  token,
});
