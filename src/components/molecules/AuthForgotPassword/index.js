import React from 'react';
import { Text } from '../../atoms/Typography';

const AuthForgotPassword = () => {
  return (
    <Text
      to="/forgot-password"
      as="sm"
      display="flex"
      justifyContent="flex-end"
      color="primary"
    >
      Forgot password?
    </Text>
  );
};

export default AuthForgotPassword;
