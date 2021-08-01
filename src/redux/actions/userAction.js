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

      // console.log(dataUserResponse);
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
        // console.log(pathByRole[role]);
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
