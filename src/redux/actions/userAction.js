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
        history.replace(`${pathByRole[role]}`);
      }
    })
    .catch((err) => {
      dispatch(showLoading(false));
      // const statusCode = err.response.data.statusCode;
      const errorMessage = err.response.data.error;

      return Toast(errorMessage, 'error');
    });
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  dispatch({ type: typeRedux.setUserLogout });
  return { type: typeRedux.setUserLogout, value: {} };
};

export const userSessionActive = (data) => {
  return { type: typeRedux.setUserLogin, value: data };
};

export const userUpdateProfile = (data, token) => (dispatch, getState) => {
  // dispatch(showLoading(true));
  const userState = getState().userReducer;
  const formData = new FormData();
  formData.append('email', userState.email);
  formData.append('password', userState.password);
  formData.append('name', data.name);
  formData.append('role', userState.role);
  formData.append('description', data.description);
  formData.append('verified', userState.verified);
  formData.append('phoneNumber', data.phone);
  formData.append('storeName', userState.storeName);
  formData.append('image', data.image ? data.image : userState.image);
  Axios.post(`/users/${userState.idUser}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch(showLoading(false));
      dispatch({ type: typeRedux.setUserLogin, value: res.data.data });
      return Toast('Success Update Profile', 'success');
    })
    .catch((err) => {
      dispatch(showLoading(false));
      return Toast('Failed updated profile', 'error');
    });
};

export const userResetPassword =
  (data, userState, userData, history) => (dispatch) => {
    dispatch(showLoading(true));
    const userUpdate = {
      ...userState,
      ...data,
    };

    const pathPost = `/users/${userData.decode.id}`;
    Axios.post(pathPost, userUpdate, {
      headers: { Authorization: `Bearer ${userData.token}` },
    })
      .then((res) => {
        dispatch(showLoading(false));
        history.replace('/customer-login');
        return Toast('Password Successfully Update. Please login', 'success');
      })
      .catch((err) => {
        dispatch(showLoading(false));
      });
  };

export const userAddressAction =
  (values, token, closeModal) => (dispatch, getState) => {
    const userState = getState().userReducer;
    const sendData = {
      id_user: userState.idUser,
      name_address: values.saveAddress,
      name_recipient: values.name,
      phone_recipient: values.phone,
      address: values.address,
      postal_code: values.postalCode,
      city: values.city,
      primary_address: values.primary,
    };
    // console.log('sendData', sendData);
    Axios.post(`/address`, sendData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        Toast('Success Address Added', 'success');
        console.log(res);
        const resData = res.data.data;
        const addressUser = `${resData.name_address},  ${resData.phone_recipient} | ${resData.address}, ${resData.city}, ${resData.postal_code}.`;
        // console.log('addressUser', addressUser);
        dispatch({ type: typeRedux.setUserAddress, value: addressUser });
        closeModal(false);
      })
      .catch((err) => {
        console.log(err.response);
        return Toast('Error', 'error');
      });
  };
