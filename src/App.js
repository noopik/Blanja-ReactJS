import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Homepage,
  MyBag,
  CategoryPage,
  CheckoutPage,
  ProductDetailPage,
  UserProfile,
} from './pages';
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
          <Route path="/customer-login" component={CustomerLogin} />
          <Route path="/seller-login" component={SellerLogin} />
          <Route path="/customer-register" component={CustomerRegister} />
          <Route path="/seller-register" component={SellerRegister} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/" component={Homepage} />
          <Route path="/my-bag" component={MyBag} />
          <Route path="/categories-product" component={CategoryPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/product-detail" component={ProductDetailPage} />
          <Route path="/user-profile" component={UserProfile} />
        </Switch>
      </Router>
    );
  }
}
