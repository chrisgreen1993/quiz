import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import configureStore from './store/configureStore';
import App from './containers/App';
import Welcome from './containers/Welcome';
import Question from './containers/Question';
import Results from './containers/Results';
import HighScores from './containers/HighScores';
import NotFound from './components/NotFound';

const store = configureStore();

function onQuestionEnter(nextState, replaceState) {
  const { response } = store.getState();
  if (!response.toJS().name) {
    replaceState({ nextPathname: nextState.location.pathName }, '/');
  }
  const currentQuestion = response.toJS().answers.length + 1;
  if (currentQuestion < Number(nextState.params.id)) {
    replaceState({ nextPathname: nextState.location.pathName }, '/questions/' + currentQuestion);
  }
}

function onResultsEnter(nextState, replaceState) {
  const { response, questions } = store.getState();
  if (response.get('answers').size === 0 || response.get('answers').size !== questions.size) {
    replaceState({ nextPathname: nextState.location.pathName }, '/');
  }
}

render(
  <Provider store={store}>
    <Router history={createHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="questions/:id" component={Question} onEnter={onQuestionEnter}/>
        <Route path="results" component={Results} onEnter={onResultsEnter}/>
        <Route path="high-scores" component={HighScores} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
