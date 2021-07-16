import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Homepage,
  MyBag,
  CategoryPage,
  CheckoutPage,
  ProductDetailPage,
  UserProfileSetting,
  UserProfileAddress,
  UserProfileOrder,
  SellerStore,
  SellerProductPage,
  SellerSellingProducts,
} from '../../pages';
import {
  CustomerLogin,
  SellerLogin,
  CustomerRegister,
  SellerRegister,
  ForgotPassword,
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
        {/* MAIN HOME */}
        <Route exact path="/" component={Homepage} />
        <Route path="/my-bag" component={MyBag} />
        <Route path="/categories-product" component={CategoryPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/product-detail" component={ProductDetailPage} />
        {/* USER CUSTOMER */}
        <Route path="/user/setting" component={UserProfileSetting} />
        <Route path="/user/shipping-address" component={UserProfileAddress} />
        <Route path="/user/orders" component={UserProfileOrder} />
        {/* USER SELLER */}
        <Route exact path="/admin/seller" component={SellerStore} />
        <Route path="/admin/seller/products" component={SellerProductPage} />
        <Route
          path="/admin/seller/selling-products"
          component={SellerSellingProducts}
        />
      </Switch>
    </Router>
  );
};

export default Routes;