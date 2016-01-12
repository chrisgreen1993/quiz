import chai, { expect } from 'chai';
import chaiImmutable from 'chai-immutable';
import Immutable from 'immutable';
import answers from '../../src/client/reducers/answers';
import { SET_NAME } from '../../src/client/actions/answers';

chai.use(chaiImmutable);

describe('reducers', () => {
  describe('answers', () => {
    it('Should return initial state', () => {
      const state = answers(undefined, {});
      const expected = Immutable.fromJS({
        name: null,
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
        answers: [],
      });
      expect(state).to.equal(expected);
    });
  });
});
