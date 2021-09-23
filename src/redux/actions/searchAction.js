import { Axios } from '../../config';
import { typeRedux } from '../../utils';
import { showLoading } from './loadingAction';

export const searchAction = (keyword, page) => (dispatch) => {
  // console.log(12, keyword);
  dispatch(showLoading(true));
  Axios.get(`/products?src=${keyword}&limit=10&page=${page ? page : 1}`)
    .then((res) => {
      dispatch(showLoading(false));
      if (res.data.statusCode === 200) {
        const sendState = {
          exist: true,
          keyword,
          result: {
            data: res.data.data,
            meta: res.data.meta,
          },
        };
        dispatch({ type: typeRedux.setSearching, value: sendState });
      }
    })
    .catch((err) => {
      dispatch(showLoading(false));
      if (err.response.data.statusCode === 404) {
        // const sendState = {
        //   exist: false,
        //   keyword,
        //   message: err.response.data.error,
        // };
        // dispatch({ type: typeRedux.setSearching, value: sendState });
      }
    });
};
