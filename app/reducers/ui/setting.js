import { combineReducers } from 'redux';
import { Setting } from 'actions';

const locale = (state = 'en', { type, payload }) => {
  switch (type) {
    case Setting.CHANGE_LOCALE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  locale,
});
