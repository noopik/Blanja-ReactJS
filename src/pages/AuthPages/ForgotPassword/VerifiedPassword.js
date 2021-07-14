import React from 'react';
import { Button, FormInput } from '../../../components/atoms';
import { Text } from '../../../components/atoms/Typography';
import {
  AuthFooter,
  AuthForgotPassword,
  FormGroup,
} from '../../../components/molecules';

const VerifiedPassword = ({ onClick }) => {
  return (
    <>
      <Text color="primary" className="text-warning">
        You need to change your password to activate your account
      </Text>
      <FormGroup>
        <FormInput type="password" name="password" placeholder="Password" />
        <FormInput
          type="password"
          name="password"
          placeholder="Confirmation New Password"
        />
        <AuthForgotPassword />
      </FormGroup>
      <Button primary className="btn-wrapper" onClick={onClick}>
        Submit
      </Button>
      <AuthFooter login session="customer" />
    </>
  );
};

export default VerifiedPassword;
