/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import * as yup from 'yup';
import {
  AlertValidationForm,
  BrandLogo,
  Button,
  FormInput,
  Toast,
} from '../../../components/atoms';
import { Heading } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';
import { AuthFooter, FormGroup } from '../../../components/molecules';
import { Axios } from '../../../config';
import { showLoading } from '../../../redux/actions';
import { decodeJwtToken } from '../../../utils';
import VerifiedPassword from './VerifiedPassword';

const ForgotPassword = () => {
  const slugJwtToken = useRouteMatch('/forgot-password/:token');
  const [dataRequestPassword, setDataRequestPassword] = useState({
    isExists: false,
    data: {},
    token: '',
  });
  const jwtToken = slugJwtToken?.params.token;
  const dispatch = useDispatch();
  const validationForm = yup.object({
    email: yup.string().email('Email is invalid').required('Email is required'),
  });

  const actionSubmitForm = (data) => {
    dispatch(showLoading(true));
    Axios.post(`/users/change-password/${data.email}`)
      .then((res) => {
        dispatch(showLoading(false));
        if (res.status === 200) {
          const message = 'Check your email to verification request';
          return Toast(message, 'success');
        }
      })
      .catch((err) => {
        dispatch(showLoading(false));
        console.log(err.response);

        if (err.response.status === 404) {
          const errorMessage = 'Email user not found';
          return Toast(errorMessage, 'error');
        }
        if (err.response) {
          const errorMessage = err.response.data.error;
          return Toast(errorMessage, 'error');
        }
      });
  };

  useEffect(() => {
    document.title = 'Reset Password';

    decodeJwtToken(jwtToken).then((res) => {
      const resDecode = { ...res, token: jwtToken };
      setDataRequestPassword(resDecode);
    });
  }, []);
  return (
    <AuthContainer>
      <BrandLogo />
      <Heading as={3} mt={40} mb={20}>
        Reset Password
      </Heading>
      {dataRequestPassword.isExists && (
        <VerifiedPassword data={dataRequestPassword} />
      )}
      {!dataRequestPassword.isExists && (
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={validationForm}
          onSubmit={(values) => {
            console.log(values);
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
            <FormGroup mt={0} onSubmit={handleSubmit}>
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
              <Button
                primary
                className="btn-wrapper"
                disabled={
                  !isValid ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
              >
                REQUEST NOW
              </Button>
            </FormGroup>
          )}
        </Formik>
      )}

      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default ForgotPassword;
