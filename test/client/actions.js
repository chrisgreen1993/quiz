import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { setName } from '../../src/client/actions/answers';

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
});
