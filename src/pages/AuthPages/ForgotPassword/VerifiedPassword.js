/* eslint-disable react-hooks/exhaustive-deps */
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {
  AlertValidationForm,
  Button,
  FormInput,
} from '../../../components/atoms';
import { Text } from '../../../components/atoms/Typography';
import { FormGroup } from '../../../components/molecules';
import { Axios } from '../../../config';
import { userResetPassword } from '../../../redux/actions';
import { typeRedux } from '../../../utils';
const VerifiedPassword = ({ onClick, data: userData }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.data);
  const history = useHistory();

  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .max(255, 'Password must be at least 255 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  useEffect(() => {
    Axios.get(`users/${userData.decode.id}`, {
      headers: { Authorization: `Bearer ${userData.token}` },
    })
      .then((res) => {
        const dataRes = res.data.data[0];
        dispatch({ type: typeRedux.setUserLogin, value: dataRes });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Text color="primary" className="text-warning-custom">
        You need to change your password to activate your account
      </Text>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          dispatch(userResetPassword(values, userState, userData, history));
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
          <FormGroup onSubmit={handleSubmit}>
            <div>
              <FormInput
                type="password"
                name="password"
                placeholder="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                // {...register('password', { required: true, minLength: 6 })}
              />
              {errors.password && touched.password && errors.password && (
                <AlertValidationForm message={errors.password} />
              )}
            </div>
            <div>
              <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Confirmation New Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
              />
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword && (
                  <AlertValidationForm message={errors.confirmPassword} />
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
              <input type="submit" value="Submit" />
            </Button>
          </FormGroup>
        )}
      </Formik>
    </>
  );
};

export default VerifiedPassword;
