import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Axios } from '..';
import { typeRedux } from '../../utils';

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get(`/users/verify-token`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((result) => {
      const dataResult = result.data.data;
      dispatch({ type: typeRedux.setUserLogin, value: dataResult });
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
