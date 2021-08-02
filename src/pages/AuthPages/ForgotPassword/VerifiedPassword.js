import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormInput, Toast } from '../../../components/atoms';
import { Text } from '../../../components/atoms/Typography';
import { FormGroup } from '../../../components/molecules';
import { Axios } from '../../../config';
import { showLoading } from '../../../redux/actions';
import { typeRedux } from '../../../utils';

const VerifiedPassword = ({ onClick, data }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [form, setForm] = useState({
    password: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    Axios.get(`users/${data.decode.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
      .then((res) => {
        const dataRes = res.data.data[0];
        dispatch({ type: typeRedux.setUserLogin, value: dataRes });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const actionButton = () => {
    // Matching password
    if (!form.password && !form.confirmNewPassword) {
      return null;
    }
    const password = form.password;
    const isMatch = password.localeCompare(form.confirmNewPassword); // return 0 for match - Include Case Sensitive

    if (isMatch !== 0) {
      return Toast(`New password must be match. Try again`, 'error');
    }

    dispatch(showLoading(true));
    const userUpdate = {
      ...userState,
      ...form,
    };
    Axios.post(`/users/${data.decode.id}`, userUpdate, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
      .then((res) => {
        dispatch(showLoading(false));
        history.push('/customer-login');
        return Toast('Password Successfully Update. Please login', 'success');

        // console.log(1, res);
      })
      .catch((err) => {
        dispatch(showLoading(false));
        // console.log(2, err);
        // const errorMessage = err.response.data.error;
        // return Toast(errorMessage, 'error');
      });
  };

  return (
    <>
      <Text color="primary" className="text-warning-custom">
        You need to change your password to activate your account
      </Text>
      <FormGroup>
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => handleForm(e)}
        />
        <FormInput
          type="password"
          name="confirmNewPassword"
          placeholder="Confirmation New Password"
          value={form.confirmNewPassword}
          onChange={(e) => handleForm(e)}
        />
      </FormGroup>
      <Button primary className="btn-wrapper" onClick={actionButton}>
        Submit
      </Button>
    </>
  );
};

export default VerifiedPassword;
