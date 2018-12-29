import {combineReducers} from 'redux';
import testReducer from './testReducer';

const rootReducer = combineReducers({
  user: testReducer,
});

export default rootReducer;
