import { combineReducers } from 'redux';

import ui from './ui';
import entities from './entities';

const rootReducer = combineReducers({
  ui,
  entities,
});

export default rootReducer;
