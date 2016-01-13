import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import Immutable from 'immutable';
import answers from '../../src/client/reducers/answers';
import questions from '../../src/client/reducers/questions';
import { SET_NAME } from '../../src/client/actions/answers';
import { GET_QUESTIONS_SUCCESS } from '../../src/client/actions/questions';

chai.use(chaiImmutable);

describe('reducers', () => {
  describe('answers', () => {
    it('Should return initial state', () => {
      const state = answers(undefined, {});
      const expected = Immutable.fromJS({
        name: null,
        total: 0,
        currentQuestion: null,
        answers: [],
      });
      expect(state).to.equal(expected);
    });
    it('Should set name when action is SET_NAME', () => {
      const action = {
        type: SET_NAME,
        name: 'Chris',
      };
      const state = answers(undefined, action);
      const expected = Immutable.fromJS({
        name: 'Chris',
        total: 0,
        currentQuestion: null,
        answers: [],
      });
      expect(state).to.equal(expected);
    });
  });
  describe('questions', () => {
    it('Should return initial state', () => {
      const state = questions(undefined, {});
      const expected = Immutable.List();
      expect(state).to.equal(expected);
    });
    it('Should return list of questions when action is GET_QUESTIONS_SUCCESS', () => {
      const action = {
        type: GET_QUESTIONS_SUCCESS,
        questions: [{ _id: '1243', text: 'A question', choices: [{ _id: '1313', text: 'Choice', points: 10 }] }]
      };
      const state = questions(undefined, action);
      const expected = Immutable.fromJS([{ _id: '1243', text: 'A question', choices: [{ _id: '1313', text: 'Choice', points: 10 }] }]);
      expect(state).to.equal(expected);
    });
  });
});
