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
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';
import { regexEmailVadidationType } from '../../../utils';

const SellerRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const role = 'seller';

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
    console.log(dataSend);

    dispatch(userRegister(dataSend, history, role));
  };

  // const [form, setForm] = useState({
  //   name:
  // email:
  //   password:
  //   role,
  //   phoneNumber: '',
  //   storeName: '',
  //   gender: null,
  //   born: null,
  // });

  useEffect(() => {
    document.title = 'Register | Seller';
  });

  // const handleForm = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const actionRegister = () => {
  //   console.log(form);
  //   dispatch(userRegister(form, history, role));
  // };

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
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          {...register('phoneNumber', { required: true, minLength: 11 })}
        />
        {errors.phoneNumber && (
          <Alert severity="warning">
            Phone Number Required and minimal 11 character
          </Alert>
        )}
        <FormInput
          type="text"
          placeholder="Store Name"
          name="storeName"
          {...register('storeName', { required: true })}
        />
        {errors.storeName && (
          <Alert severity="warning">Store Name Required</Alert>
        )}
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

export default SellerRegister;
