import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Homepage } from './pages';
import {
  CustomerLogin,
  SellerLogin,
  CustomerRegister,
  SellerRegister,
  ForgotPassword,
} from './pages/AuthPages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/customer-login" component={CustomerLogin} />
          <Route path="/seller-login" component={SellerLogin} />
          <Route path="/customer-register" component={CustomerRegister} />
          <Route path="/seller-register" component={SellerRegister} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </Router>
    );
  }
}
