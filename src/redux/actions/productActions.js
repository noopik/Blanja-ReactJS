import { Toast } from '../../components/atoms';
import { Axios } from '../../config';
import { typeRedux } from '../../utils';
import { showLoading } from './loadingAction';
const token = localStorage.getItem('token');

export const getAllProducts = (limit) => (dispatch) => {
  dispatch(showLoading(true));
  const queryRequest = limit ? `/products?limit=${limit}` : '/products';

  Axios.get(queryRequest)
    .then((res) => {
      const resData = res.data.data;
      const resMeta = res.data.meta;
      const saveData = {
        exist: true,
        data: resData,
        meta: resMeta,
      };
      dispatch({ type: typeRedux.setAllProduct, value: saveData });
      dispatch(showLoading(false));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getItemProduct = (id, token, data) => {
  Axios.get(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      const dataItem = res.data.data;
      // console.log('dataItem', dataItem);
      // dispatch(showLoading(false));
      // const sendData = { exist: true, data: dataItem };
      // dispatch({ type: typeRedux.setProductItem, value: sendData });
      data(dataItem);
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const searchProduct = (keyword) => (dispatch) => {
  Axios.get(`/products`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addProduct = (data, token, history) => (dispatch, getState) => {
  const userState = getState().userReducer;
  const formData = new FormData();
  formData.append('owner', userState.idUser);
  formData.append('description', data.description);
  formData.append('color', data.color);
  // formData.append('image', data.image);
  formData.append('id_category', data.category);
  formData.append('nameProduct', data.name);
  formData.append('stock', data.stock);
  data.image.forEach((image) => {
    formData.append('image', image);
  });
  formData.append('price', data.price);
  dispatch(showLoading(true));
  Axios.post(`/products`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      Toast('Success products Added', 'success');
      console.log(res);
      dispatch(showLoading(false));
      history.replace('/admin/seller/products');
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(showLoading(false));
      return Toast('Error', 'error');
    });
};

export const updateProduct =
  (data, token, history, idProduct) => (dispatch, getState) => {
    const userState = getState().userReducer;
    const formData = new FormData();
    formData.append('owner', userState.idUser);
    formData.append('description', data.description);
    formData.append('color', data.color);
    formData.append('id_category', data.category);
    formData.append('nameProduct', data.name);
    formData.append('stock', data.stock);
    data.image.forEach((image) => {
      formData.append('image', image);
    });
    formData.append('price', data.price);
    dispatch(showLoading(true));

    Axios.post(`/products/${idProduct}`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        Toast('Success products updated', 'success');
        dispatch(showLoading(false));
        history.replace('/admin/seller/products');
        return;
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(showLoading(false));
        return Toast('Error', 'error');
      });
  };
