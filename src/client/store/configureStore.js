import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    // Hot module reload for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export default configureStore;
