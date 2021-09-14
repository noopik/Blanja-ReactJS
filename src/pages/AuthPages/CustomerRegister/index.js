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
import { AuthFooter, FormGroup } from '../../../components/molecules';
import { userRegister } from '../../../redux/actions';
const CustomerRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const role = 'customer';

  const validationForm = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  });

  const actionSubmitForm = (data) => {
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
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={validationForm}
        onSubmit={(values) => {
          actionSubmitForm(values);
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
                placeholder="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.name && touched.name && errors.name && (
                <AlertValidationForm message={errors.name} />
              )}
            </div>
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
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password && (
                <AlertValidationForm message={errors.password} />
              )}
            </div>
            <Button
              primary
              className="btn-wrapper"
              disabled={
                !isValid ||
                (Object.keys(touched).length === 0 &&
                  touched.constructor === Object)
              }
            >
              SIGN UP
            </Button>
          </FormGroup>
        )}
      </Formik>
      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default CustomerRegister;
