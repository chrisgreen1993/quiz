import Immutable from 'immutable';
import { GET_QUESTIONS_SUCCESS } from '../actions/questions';

const initialState = []

function questions(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case GET_QUESTIONS_SUCCESS:
      return Immutable.fromJS(action.questions)
    default:
      return state;
  }
}

function getCurrentQuestion(state, index) {
  return state.get(index) || Immutable.Map();
}

function isLastQuestion(state, index) {
  const count = state.size;
  return index + 1 === count;
}

export { questions as default, getCurrentQuestion, isLastQuestion };
