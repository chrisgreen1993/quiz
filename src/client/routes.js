import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import App from './containers/App';
import Welcome from './containers/Welcome';
import Question from './containers/Question';
import Results from './containers/Results';
import HighScores from './containers/HighScores';
import NotFound from './components/NotFound';

export const history = createHistory();

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="questions" component={Question} />
    <Route path="results" component={Results} />
    <Route path="high-scores" component={HighScores} />
    <Route path="*" component={NotFound} />
  </Route>
);
