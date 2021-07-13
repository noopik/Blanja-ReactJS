import React from 'react';
import { BrandLogo, ButtonTogller, FormInput } from '../../components/atoms';
import { AuthContainer } from '../../components/Layouts';
import { Heading, Text } from '../../components/atoms/Typography';
import { FormGroup } from '../../components/molecules';

const LoginPage = () => {
  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={50}>
        Please login with your account
      </Heading>
      <ButtonTogller />
      <FormGroup mt={40}>
        <FormInput type="text" placeholder="Email" />
        <FormInput type="password" placeholder="Password" />
        <Text as="sm" display="flex" justifyContent="flex-end" color="primary">
          Forgot password?
        </Text>
      </FormGroup>
    </AuthContainer>
  );
};

export default LoginPage;
