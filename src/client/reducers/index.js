import { combineReducers } from 'redux';
import answers from './answers';
import questions from './answers';

const rootReducer = combineReducers({
  answers,
  questions
});

export default rootReducer;
