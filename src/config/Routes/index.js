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
        <PublicRoute path="/customer-login" component={CustomerLogin} />
        <PublicRoute path="/seller-login" component={SellerLogin} />
        <PublicRoute path="/customer-register" component={CustomerRegister} />
        <PublicRoute path="/seller-register" component={SellerRegister} />
        <PublicRoute path="/forgot-password" component={ForgotPassword} />
        <PublicRoute
          path="/forgot-password/:token"
          component={ForgotPassword}
        />
        {/* MAIN HOME */}
        <Route exact path="/" component={Homepage} />
        <PrivateRoute path="/categories" component={CategoryPage} />
        <PrivateRoute
          exact
          path="/products/:id"
          component={ProductDetailPage}
        />
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
      </Switch>
    </Router>
  );
};

export default Routes;
