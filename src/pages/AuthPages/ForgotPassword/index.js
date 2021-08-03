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
import { decodeJwtToken, regexEmailVadidationType } from '../../../utils';
import Alert from '@material-ui/lab/Alert';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
  const slugJwtToken = useRouteMatch('/forgot-password/:token');

  const [dataRequestPassword, setDataRequestPassword] = useState({
    isExists: false,
    data: {},
    token: '',
  });

  const jwtToken = slugJwtToken?.params.token;

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
        if (err.message) {
          return Toast(err.message, 'error');
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
        <>
          <FormGroup mt={0} onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              type="text"
              placeholder="Email"
              name="email"
              {...register('email', { pattern: regexEmailVadidationType })}
            />
            {errors.email && <Alert severity="warning">Email invalid!</Alert>}
            <Button primary className="btn-wrapper">
              <input type="submit" value="REQUEST NOW" />
            </Button>
          </FormGroup>
        </>
      )}

      <AuthFooter register session="customer" />
    </AuthContainer>
  );
};

export default ForgotPassword;
