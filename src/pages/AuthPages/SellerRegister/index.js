import React, { useEffect } from 'react';
import {
  BrandLogo,
  Button,
  ButtonTogller,
  FormInput,
  ToggleItem,
} from '../../../components/atoms';
import { Heading } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';
import { AuthFooter, FormGroup } from '../../../components/molecules';

const SellerRegister = () => {
  useEffect(() => {
    document.title = 'Register | Seller';
  });

  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={50}>
        Please sign up with your account
      </Heading>
      <ButtonTogller active="customer">
        <ToggleItem className="left" to="/customer-register">
          Customer
        </ToggleItem>
        <ToggleItem className="right" primary to="/seller-register">
          Seller
        </ToggleItem>
      </ButtonTogller>
      <FormGroup mt={40}>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="text" placeholder="Email" />
        <FormInput type="text" placeholder="Phone Number" />
        <FormInput type="text" placeholder="Store Name" />
        <FormInput type="password" placeholder="Password" />
      </FormGroup>
      <Button primary className="btn-wrapper">
        LOGIN
      </Button>
      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default SellerRegister;
