import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Homepage, RegisterPage, LoginPage } from './pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/customer-signin" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
        </Switch>
      </Router>
    );
  }
}
