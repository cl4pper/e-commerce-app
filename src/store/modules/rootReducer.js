import { combineReducers } from 'redux';

import { reducer as githubReducer } from './github';
import { reducer as stringsReducer } from './strings';

const rootReducer = combineReducers({
  github: githubReducer,
  strings: stringsReducer
});

export { rootReducer };
