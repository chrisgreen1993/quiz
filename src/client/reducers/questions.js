import Immutable from 'immutable';
import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAIL } from '../actions/questions';

const initialState = {
  loading: false,
  questions: [],
};

function questions(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return state.set('loading', true);
    case GET_QUESTIONS_SUCCESS:
      return state
        .set('questions', Immutable.fromJS(action.questions))
        .set('loading', false);
    case GET_QUESTIONS_FAIL:
      return state.set('loading', false);
    default:
      return state;
  }
}

export default questions;
