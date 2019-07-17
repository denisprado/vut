import { combineReducers } from 'redux';

import tools from './tools';
import modal from './modal';
import search from './search';
import error from './error';

const reducers = combineReducers({
  tools,
  modal,
  search,
  error,
});

export default reducers;
