import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import {
  AlertValidationForm,
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

const CustomerLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const role = 'customer';
  const validationForm = yup.object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  });

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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationForm}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(userLogin(values, history, role));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => (
          <FormGroup mt={40} onSubmit={handleSubmit}>
            <div>
              <FormInput
                type="text"
                placeholder="Email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && errors.email && (
                <AlertValidationForm message={errors.email} />
              )}
            </div>
            <div>
              <FormInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password && (
                <AlertValidationForm message={errors.password} />
              )}
            </div>
            <AuthForgotPassword />
            <Button
              primary
              className="btn-wrapper"
              disabled={
                !isValid ||
                (Object.keys(touched).length === 0 &&
                  touched.constructor === Object)
              }
            >
              LOGIN
            </Button>
          </FormGroup>
        )}
      </Formik>
      <AuthFooter login session="customer" />
    </AuthContainer>
  );
};

export default CustomerLogin;
