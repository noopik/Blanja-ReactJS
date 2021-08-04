import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormInput, Toast } from '../../../components/atoms';
import { Text } from '../../../components/atoms/Typography';
import { FormGroup } from '../../../components/molecules';
import { Axios } from '../../../config';
import { showLoading } from '../../../redux/actions';
import { typeRedux } from '../../../utils';
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';

const VerifiedPassword = ({ onClick, data: userData }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [form, setForm] = useState({
    password: '',
    confirmNewPassword: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    // Matching password
    if (!data.password && !data.confirmationPassword) {
      return null;
    }
    const password = data.password;
    const isMatch = password.localeCompare(data.confirmationPassword); // return 0 for match - Include Case Sensitive

    if (isMatch !== 0) {
      return Toast(`New password must be match. Try again`, 'error');
    }

    dispatch(showLoading(true));
    const userUpdate = {
      ...userState,
      ...data,
    };
    // console.log(userUpdate);

    const pathPost = `/users/${userData.decode.id}`;
    Axios.post(pathPost, userUpdate, {
      headers: { Authorization: `Bearer ${userData.token}` },
    })
      .then((res) => {
        dispatch(showLoading(false));
        history.push('/customer-login');
        return Toast('Password Successfully Update. Please login', 'success');
      })
      .catch((err) => {
        dispatch(showLoading(false));
      });
  };

  return (
    <>
      <Text color="primary" className="text-warning-custom">
        You need to change your password to activate your account
      </Text>
      <FormGroup onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && (
          <Alert severity="warning">
            Password Required and minimal 6 character
          </Alert>
        )}
        <FormInput
          type="password"
          name="confirmationPassword"
          placeholder="Confirmation New Password"
          {...register('confirmationPassword', {
            required: true,
            minLength: 6,
          })}
        />
        {errors.confirmationPassword && (
          <Alert severity="warning">Password Required and Match</Alert>
        )}
        <Button primary className="btn-wrapper">
          <input type="submit" value="Submit" />
        </Button>
      </FormGroup>
    </>
  );
};

export default VerifiedPassword;
