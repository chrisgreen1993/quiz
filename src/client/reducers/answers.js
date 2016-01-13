import Immutable from 'immutable';
import { SET_NAME, SAVE_ANSWER } from '../actions/answers';
import { GET_QUESTIONS_SUCCESS } from '../actions/questions';

const initialState = {
  name: null,
  total: 0,
  currentQuestionIndex: null,
  answers: [],
};

function answers(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case SET_NAME:
      return state.set('name', Immutable.fromJS(action.name));
    case GET_QUESTIONS_SUCCESS:
      return state.set('currentQuestionIndex', 0);
    case SAVE_ANSWER:
      return state
        .update('total', total => total + action.points)
        .update('currentQuestionIndex', index => index + 1)
        .set('answers', state.get('answers').push(Immutable.fromJS(action.answer)));

    /*
      return state
        .get('answers').push(Immutable.fromJS(action.answers))
        .update('total', total => total + action.points)
        .update('currentQuestionIndex', index => index + 1);
        */
    default:
      return state;
  }
}

export default answers;
