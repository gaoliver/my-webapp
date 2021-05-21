import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import App from './App';

const _navigation: React.FC = () => {
  return (
    <Router>
      <Switch>
        {/* Home */}
        <Route exact path="/">
          <App />
        </Route>
        <Redirect exact from="/login" to="/" />
        {/* 404 not found */}
        <Route exact path="/#error-404" component={App} />
        <Redirect exact to="/#error-404" />
      </Switch>
    </Router>
  );
};

export default _navigation;
