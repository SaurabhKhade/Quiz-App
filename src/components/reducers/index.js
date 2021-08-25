import counter from './counter';
import answers from './answers';
import start from './start';
import currentQuestion from './currentQuestion';

import { combineReducers } from 'redux'

export default combineReducers({
  counter,
  answers,
  start,
  currentQuestion
});