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
import { AuthFooter, FormGroup } from '../../../components/molecules';
import { userRegister } from '../../../redux/actions';
import { regexEmailVadidationType } from '../../../utils';

const CustomerRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const role = 'customer';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataSend = {
      ...data,
      role,
    };
    dispatch(userRegister(dataSend, history, role));
  };

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
      <FormGroup mt={40} onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          {...register('name', { required: true })}
        />
        {errors.name && <Alert severity="warning">Name Required!</Alert>}
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
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && (
          <Alert severity="warning">
            Password Required and minimal 6 character
          </Alert>
        )}
        <Button primary className="btn-wrapper">
          <input type="submit" value="SIGN UP" />
        </Button>
      </FormGroup>

      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default CustomerRegister;
