/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
// import { Axios } from '..';
// import { Toast } from '../../components/atoms';
// import { showLoading } from '../../redux/actions';
// import { typeRedux } from '../../utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const [isLogin, setIsLogin] = useState({ check: false, passed: false });
  const token = localStorage.getItem('token');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(showLoading(true));
  //     Axios.get(`/users/verify-token`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //       .then((result) => {
  //         const dataResult = result.data.data;
  //         setIsLogin({ check: true, passed: true });
  //         dispatch(showLoading(false));
  //         dispatch({ type: typeRedux.setUserLogin, value: dataResult });
  //       })
  //       .catch((err) => {
  //         console.log(err.response);

  //         setIsLogin({ check: true, passed: false });
  //         dispatch(showLoading(false));
  //         return Toast(
  //           `Uppss, you don't have access! Please login before`,
  //           'error'
  //         );
  //       });
  //   }
  // }, [token]);

  // console.log('token', token);
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/customer-login" />
        );
      }}
    />
  );
};

export default PrivateRoute;
