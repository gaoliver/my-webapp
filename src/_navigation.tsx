import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import App from './App';
import { PORTFOLIO } from './service/portfolio';
import { Single } from './views/single';

const _navigation: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <App />
        </Route>
        <Redirect exact from="/#home" to="/" />
        {/* Single page */}
        {PORTFOLIO.map((x) => (
          <Route exact path={`/${x.slug}`} key={x.id}>
            <Single />
          </Route>
        ))}
        <Route exact path="/#error-404" component={App} />
        <Redirect exact to="/#error-404" />
      </Switch>
    </Router>
  );
};

export default _navigation;
