import { showLoading } from '.';
import { Toast } from '../../components/atoms';
import { Axios } from '../../config';
import { typeRedux } from '../../utils';

export const addToSingleCart = (data, history) => (dispatch) => {
  // console.log('data single', data);
  // Insert product to single cart
  const { totalPrice } = data;

  dispatch({ type: typeRedux.setAddToCartProducts, value: data });
  const pricing = {
    totalPrice,
    deliveryPrice: (totalPrice * 10) / 100,
  };
  // console.log('pricing', pricing);
  dispatch({ type: typeRedux.setPricingCart, value: pricing });
  history.push('/checkout');
};

export const addProductToCarts = (data) => (dispatch, getState) => {
  const cartsState = getState().cartReducer;
  console.log('addProductToCarts', data);
  console.log('cartsState', cartsState);
  dispatch({ type: typeRedux.setAddToCartProducts, value: data });
  // pricing
  let totalPrice = 0;
  cartsState.data.forEach((product) => {
    totalPrice += product.totalPrice;
  });
  totalPrice += data.totalPrice;
  console.log('totalPrice', totalPrice);
};

export const actionCheckoutCart =
  (data, token, router) => (dispatch, getState) => {
    dispatch(showLoading(true));
    Axios.post(`/transactions`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        dispatch(showLoading(false));
        router.replace('/user/orders');
        dispatch({ type: typeRedux.setResetCart });
        Toast(`Success checkout`, 'success');
      })
      .catch((err) => {
        dispatch(showLoading(false));
      });
  };
