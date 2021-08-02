import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { Axios } from '..';
import { Toast } from '../../components/atoms';
import { typeRedux } from '../../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: false, passed: false });
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`/users/verify-token`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((result) => {
        const dataResult = result.data.data;
        setIsLogin({ check: true, passed: true });
        dispatch({ type: typeRedux.setUserLogin, value: dataResult });
      })
      .catch((err) => {
        console.log(err);
        setIsLogin({ check: true, passed: false });
        return Toast(
          `Uppss, you don't have access! Please login before`,
          'error'
        );
      });
  }, []);

  console.log(isLogin);
  return (
    <>
      {isLogin.check && (
        <Route
          {...rest}
          render={(props) => {
            return isLogin.passed ? (
              <Component {...props} />
            ) : (
              <Redirect to="/customer-login" />
            );
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
