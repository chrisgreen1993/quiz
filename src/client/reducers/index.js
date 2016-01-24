import { combineReducers } from 'redux';
import answers from './answers';
import questions from './questions';
import highScores from './highScores';

const rootReducer = combineReducers({
  answers,
  questions,
  highScores,
});

export default rootReducer;
