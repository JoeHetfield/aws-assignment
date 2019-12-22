import { combineReducers } from 'redux';

import setting from './setting';
import booting from './bootstrap';
import messages from './messages';
import drawerMenu from './drawerMenu';

const ui = combineReducers({
  booting,
  setting,
  messages,
  drawerMenu,
});

export default ui;
