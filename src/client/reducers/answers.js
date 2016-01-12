import Immutable from 'immutable';
import { SET_NAME } from '../actions/answers';

const initialState = {
  name: null,
  answers: [],
};

function answers(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case SET_NAME:
      return state.set('name', Immutable.fromJS(action.name));
    default:
      return state;
  }
}

export default answers;
