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
import { AuthFooter, FormGroup } from '../../../components/molecules';
import { userRegister } from '../../../redux/actions';

const CustomerRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const role = 'customer';

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role,
    phoneNumber: 0,
    gender: null,
    born: null,
  });

  useEffect(() => {
    document.title = 'Register | Customer';
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const actionRegister = () => {
    console.log(form);
    dispatch(userRegister(form, history, role));
  };

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
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={(e) => handleForm(e)}
        />
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
      </FormGroup>
      <Button primary className="btn-wrapper" onClick={actionRegister}>
        SIGN UP
      </Button>
      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default CustomerRegister;
