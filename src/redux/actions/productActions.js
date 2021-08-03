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
