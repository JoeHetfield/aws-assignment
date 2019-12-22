import { combineReducers } from 'redux';

import ui from './ui';
import session from './session';
import entities from './entities';

const rootReducer = combineReducers({
  ui,
  session,
  entities,
});

export default rootReducer;
