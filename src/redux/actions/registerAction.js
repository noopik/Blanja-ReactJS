import { Toast } from '../../components/atoms';
import { Axios } from '../../config';
import { showLoading } from './loadingAction';
export const userRegister = (formUser, history, role) => (dispatch) => {
  dispatch(showLoading(true));

  Axios.post('/users/register', formUser)
    .then((res) => {
      const dataUserRegister = formUser;
      Toast('Register Successfully. Please login with your account', 'success');
      switch (dataUserRegister.role) {
        case 'customer':
          history.push('/customer-login');
          break;
        case 'seller':
          history.push('/seller-login');
          break;
        default:
          break;
      }
      dispatch(showLoading(false));
    })
    .catch((err) => {
      dispatch(showLoading(false));
      // const statusCode = err.response.data.statusCode;
      const errMessageResponse = err.response.data.message;
      const handleMessage = errMessageResponse.split(' ').shift();

      if (handleMessage === 'Duplicate') {
        return Toast('Email alredy exists!', 'error');
      }
    });
};
