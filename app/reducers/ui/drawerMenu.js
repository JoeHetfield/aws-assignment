import { combineReducers } from 'redux';
import { DrawerMenu } from 'actions';

const open = (state = false, { type }) => {
  switch (type) {
    case DrawerMenu.TOGGLE:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  open,
});
