import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '../../atoms/Typography';

const LoginSession = ({ session }) => {
  return (
    <Text as="md" display="flex" justifyContent="center" gap={4}>
      Don't have a Blanja account?
      <Link className="anchor" to={`/${session}-register`}>
        <Text color="primary">Register</Text>
      </Link>
    </Text>
  );
};
const RegisterSession = ({ session }) => {
  return (
    <Text as="md" display="flex" justifyContent="center" gap={4}>
      Already have a Tokopedia account?
      <Link className="anchor" to={`/${session}-login`}>
        <Text color="primary">Login</Text>
      </Link>
    </Text>
  );
};

const AuthFooter = ({ login, register, session }) => {
  return (
    <>
      {login && <LoginSession session={session} />}
      {register && <RegisterSession session={session} />}
    </>
  );
};

export default AuthFooter;
