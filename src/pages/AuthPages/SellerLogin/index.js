import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  BrandLogo,
  Button,
  ButtonTogller,
  FormInput,
  ToggleItem,
} from '../../../components/atoms';
import { Heading } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';
import {
  AuthFooter,
  AuthForgotPassword,
  FormGroup,
} from '../../../components/molecules';
import { userLogin } from '../../../redux/actions';

const SellerLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const role = 'seller';

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    document.title = 'Login | Seller';
  });
  const actionLogin = () => {
    dispatch(userLogin(form, history, role));
  };
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={50}>
        Please login with your account
      </Heading>
      <ButtonTogller active="customer">
        <ToggleItem className="left" to="/customer-login">
          Customer
        </ToggleItem>
        <ToggleItem className="right" primary to="/seller-login">
          Seller
        </ToggleItem>
      </ButtonTogller>
      <FormGroup mt={40}>
        <FormInput
          type="text"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={(e) => handleForm(e)}
        />
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={(e) => handleForm(e)}
        />
        <AuthForgotPassword />
      </FormGroup>
      <Button primary className="btn-wrapper" onClick={actionLogin}>
        LOGIN
      </Button>
      <AuthFooter login session="seller" />
    </AuthContainer>
  );
};

export default SellerLogin;
