import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  CategoryPage,
  CheckoutPage,
  Homepage,
  MyBag,
  ProductDetailPage,
  ResultProducts,
  SellerProductPage,
  SellerSellingProducts,
  SellerStore,
  UserProfileAddress,
  UserProfileOrder,
  UserProfileSetting,
  VerifiedRegisterSuccess,
} from '../../pages';
import {
  CustomerLogin,
  CustomerRegister,
  ForgotPassword,
  SellerLogin,
  SellerRegister,
} from '../../pages/AuthPages';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* AUTH */}
        <Route path="/customer-login" component={CustomerLogin} />
        <Route path="/seller-login" component={SellerLogin} />
        <Route path="/customer-register" component={CustomerRegister} />
        <Route path="/seller-register" component={SellerRegister} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/forgot-password/:token" component={ForgotPassword} />
        {/* MAIN HOME */}
        <PublicRoute exact path="/" component={Homepage} />
        <PrivateRoute path="/categories" component={CategoryPage} />
        <PrivateRoute path="/products" component={ResultProducts} />
        <PrivateRoute path="/my-bag" component={MyBag} />
        <PrivateRoute path="/checkout" component={CheckoutPage} />
        <Route
          path="/users-verified/:token"
          component={VerifiedRegisterSuccess}
        />
        {/* USER CUSTOMER */}
        <PrivateRoute path="/user/setting" component={UserProfileSetting} />
        <PrivateRoute
          path="/user/shipping-address"
          component={UserProfileAddress}
        />
        <PrivateRoute path="/user/orders" component={UserProfileOrder} />
        {/* USER SELLER */}
        <PrivateRoute exact path="/admin/seller" component={SellerStore} />
        <PrivateRoute
          exact
          path="/admin/seller/products"
          component={SellerProductPage}
        />
        <PrivateRoute
          exact
          path="/admin/seller/selling"
          component={SellerSellingProducts}
        />
        <PrivateRoute
          path="/admin/seller/selling/:slug"
          component={SellerSellingProducts}
        />
        <PrivateRoute path="/admin/seller/orders" />
        <PrivateRoute path="/admin/seller#cancel" />
        <PrivateRoute path="/product/:name-:id" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
