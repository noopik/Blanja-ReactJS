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
        <Route exact path="/" component={Homepage} />
        <Route path="/categories" component={CategoryPage} />
        <Route path="/products" component={ResultProducts} />
        <Route path="/my-bag" component={MyBag} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          path="/users-verified/:token"
          component={VerifiedRegisterSuccess}
        />
        {/* USER CUSTOMER */}
        <Route path="/user/setting" component={UserProfileSetting} />
        <Route path="/user/shipping-address" component={UserProfileAddress} />
        <Route path="/user/orders" component={UserProfileOrder} />
        {/* USER SELLER */}
        <Route exact path="/admin/seller" component={SellerStore} />
        <Route
          exact
          path="/admin/seller/products"
          component={SellerProductPage}
        />
        <Route
          exact
          path="/admin/seller/selling"
          component={SellerSellingProducts}
        />
        <Route
          path="/admin/seller/selling/:slug"
          component={SellerSellingProducts}
        />
        <Route path="/admin/seller/orders" />
        <Route path="/admin/seller#cancel" />
        <Route path="/product/:name-:id" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
