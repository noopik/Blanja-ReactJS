import React, { useEffect } from 'react';
import {
  BrandLogo,
  Button,
  ButtonTogller,
  FormInput,
  ToggleItem,
} from '../../../components/atoms';
import { AuthContainer } from '../../../components/Layouts';
import { Heading, Text } from '../../../components/atoms/Typography';
import {
  AuthFooter,
  AuthForgotPassword,
  FormGroup,
} from '../../../components/molecules';

const CustomerLogin = () => {
  useEffect(() => {
    document.title = 'Login | Customer';
  });

  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={50}>
        Please login with your account
      </Heading>
      <ButtonTogller active="customer">
        <ToggleItem className="left" primary to="/customer-login">
          Customer
        </ToggleItem>
        <ToggleItem className="right" to="/seller-login">
          Seller
        </ToggleItem>
      </ButtonTogller>
      <FormGroup mt={40}>
        <FormInput type="text" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <AuthForgotPassword />
      </FormGroup>
      <Button primary className="btn-wrapper">
        LOGIN
      </Button>
      <AuthFooter login session="customer" />
    </AuthContainer>
  );
};

export default CustomerLogin;
