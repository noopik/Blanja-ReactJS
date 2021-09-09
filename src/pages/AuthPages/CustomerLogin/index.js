import Alert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
import { regexEmailVadidationType } from '../../../utils';

const CustomerLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const role = 'customer';

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  // console.log('watch', watch('email'));
  // console.log('watch', watch('password'));

  const onSubmit = (data) => {
    dispatch(userLogin(data, history, role));
  };

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
      <FormGroup mt={40} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          placeholder="Email"
          name="email"
          {...register('email', { pattern: regexEmailVadidationType })}
        />
        {errors.email && <Alert severity="warning">Email invalid!</Alert>}
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <Alert severity="warning">Password Required!</Alert>
        )}
        <AuthForgotPassword />
        <Button primary className="btn-wrapper">
          <input type="submit" value="LOGIN" />
        </Button>
      </FormGroup>
      <AuthFooter login session="customer" />
    </AuthContainer>
  );
};

export default CustomerLogin;
