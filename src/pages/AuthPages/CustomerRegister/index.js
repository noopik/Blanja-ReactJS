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
import { AuthFooter, FormGroup } from '../../../components/molecules';

const CustomerRegister = () => {
  useEffect(() => {
    document.title = 'Register | Customer';
  });

  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={50}>
        Please sign up with your account
      </Heading>
      <ButtonTogller active="customer">
        <ToggleItem className="left" primary to="/customer-register">
          Customer
        </ToggleItem>
        <ToggleItem className="right" to="/seller-register">
          Seller
        </ToggleItem>
      </ButtonTogller>
      <FormGroup mt={40}>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="text" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
      </FormGroup>
      <Button primary className="btn-wrapper">
        LOGIN
      </Button>
      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default CustomerRegister;
