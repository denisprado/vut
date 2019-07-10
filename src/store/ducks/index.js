import { combineReducers } from 'redux';

import tools from './tools';
import modal from './modal';
import error from './error';

const reducers = combineReducers({
  tools,
  modal,
  error,
});

export default reducers;
