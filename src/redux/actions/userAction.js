import { Toast } from '../../components/atoms';
import { Axios } from '../../config';
import { typeRedux } from '../../utils';
import { showLoading } from './loadingAction';

export const userLogin = (formUser, history, role) => (dispatch) => {
  dispatch(showLoading(true));
  Axios.post('/users/login', formUser)
    .then((res) => {
      dispatch(showLoading(false));
      const dataUserResponse = res.data.data;

      console.log(dataUserResponse);
      dispatch({ type: typeRedux.setUserLogin, value: dataUserResponse });
      if (dataUserResponse.role !== role) {
        switch (role) {
          case 'customer':
            return Toast('You are not customer. Login as a Seller', 'error');
          case 'seller':
            return Toast('You are not seller. Login as a customer', 'error');
          default:
            break;
        }
      }

      if (dataUserResponse.role === role) {
        const pathByRole = { seller: '/admin/seller', customer: '/' };
        localStorage.setItem('token', dataUserResponse.token);
        localStorage.setItem('refreshToken', dataUserResponse.refresh);
        history.push(`${pathByRole[role]}`);
      }
    })
    .catch((err) => {
      dispatch(showLoading(false));
      // const statusCode = err.response.data.statusCode;
      const errorMessage = err.response.data.error;

      return Toast(errorMessage, 'error');
    });
};

export const userLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  return { type: typeRedux.setUserLogout, value: {} };
};
