import { typeRedux } from '../../utils';
import { showLoading } from './loadingAction';
import { Axios } from '../../config';
import { Toast } from '../../components/atoms';

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

export const getItemProduct = (id, token) => (dispatch) => {
  dispatch(showLoading(true));
  const token = localStorage.getItem('token');

  Axios.get(`/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      const dataItem = res.data.data[0];
      dispatch(showLoading(false));
      const sendData = { exist: true, data: dataItem };
      dispatch({ type: typeRedux.setProductItem, value: sendData });
      return dataItem;
    })
    .catch((err) => {
      console.log(err);
    });
};
