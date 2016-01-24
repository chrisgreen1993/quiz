import Immutable from 'immutable';
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL } from '../actions/questions';
import { SAVE_ALL_ANSWERS, SAVE_ALL_ANSWERS_SUCCESS, SAVE_ALL_ANSWERS_FAIL } from '../actions/answers';

const initialState = {
  loading: false,
  questions: [],
};

function questions(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case GET_QUESTIONS:
    case SAVE_ALL_ANSWERS:
      return state.set('loading', true);
    case GET_QUESTIONS_SUCCESS:
      return state
        .set('questions', Immutable.fromJS(action.questions))
        .set('loading', false);
    case GET_QUESTIONS_FAIL:
    case SAVE_ALL_ANSWERS_FAIL:
    case SAVE_ALL_ANSWERS_SUCCESS:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default questions;
