import { expect } from 'chai';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { setName } from '../../src/client/actions/answers';
import { getQuestions } from '../../src/client/actions/questions';

describe('actions', () => {
  let mockStore;
  before(() => {
    mockStore = configureMockStore([thunk]);
  });
  describe('answers', () => {
    it('#setName should dispatch SET_NAME with specified name', () => {
      const name = 'Chris';
      const expectedAction = { type: 'SET_NAME', name };
      expect(setName(name)).to.deep.equal(expectedAction);
    });
  });
  describe('questions', () => {
    it('#getQuestions should dispatch GET_QUESTIONS + GET_QUESTIONS_FAIL when fetching questions fail', done => {
      nock('http://localhost')
        .get('/api/questions')
        .reply(500, { message: 'Internal Server Error' });
      const expectedActions = [
        { type: 'GET_QUESTIONS' },
        { type: 'GET_QUESTIONS_FAIL', error: { message: 'Internal Server Error' } },
      ];
      const store = mockStore({}, expectedActions, done);
      store.dispatch(getQuestions());
    });
    it('#getQuestions should dispatch GET_QUESTIONS + GET_QUESTIONS_SUCCESS when fetching questions succeeds', done => {
      nock('http://localhost')
        .get('/api/questions')
        .reply(200, [{ _id: '21414', text: 'question', choices: [] }]);
      const expectedActions = [
        { type: 'GET_QUESTIONS' },
        { type: 'GET_QUESTIONS_SUCCESS', questions: [{ _id: '21414', text: 'question', choices: [] }] },
      ];
      const store = mockStore({}, expectedActions, done);
      store.dispatch(getQuestions());
    });
  });
});
