import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrandLogo, Button, FormInput, Toast } from '../../../components/atoms';
import { Heading } from '../../../components/atoms/Typography';
import { AuthContainer } from '../../../components/Layouts';
import { AuthFooter, FormGroup } from '../../../components/molecules';
import { Axios } from '../../../config';
import { showLoading } from '../../../redux/actions';
import { useRouteMatch } from 'react-router-dom';
import VerifiedPassword from './VerifiedPassword';
import { decodeJwtToken } from '../../../utils';

const ForgotPassword = () => {
  const slugJwtToken = useRouteMatch('/forgot-password/:token');

  const [dataRequestPassword, setDataRequestPassword] = useState({
    isExists: false,
    data: {},
    token: '',
  });

  const jwtToken = slugJwtToken?.params.token;

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
  });

  useEffect(() => {
    document.title = 'Reset Password';

    decodeJwtToken(jwtToken).then((res) => {
      const resDecode = { ...res, token: jwtToken };
      setDataRequestPassword(resDecode);
    });
  }, []);

  // console.log(dataRequestPassword);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const actionButton = () => {
    dispatch(showLoading(true));
    Axios.post(`/users/change-password/${form.email}`)
      .then((res) => {
        dispatch(showLoading(false));
        if (res.status === 200) {
          const message = 'Check your email to verification request';
          return Toast(message, 'success');
        }
      })
      .catch((err) => {
        dispatch(showLoading(false));
        if (err.message) {
          return Toast(err.message, 'error');
        }
        if (err.response) {
          const errorMessage = err.response.data.error;
          return Toast(errorMessage, 'error');
        }
      });
    setForm({
      email: '',
    });
  };

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
        <>
          <FormGroup mt={0}>
            <FormInput
              type="text"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={(e) => handleForm(e)}
            />
          </FormGroup>
          <Button primary className="btn-wrapper" onClick={actionButton}>
            REQUEST NOW
          </Button>
        </>
      )}

      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default ForgotPassword;
