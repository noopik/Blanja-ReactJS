import { typeRedux } from '../../utils';

const initialUser = {
  data: [],
  pricing: {
    totalPrice: null,
    deliveryPrice: null,
  },
};

export const cartReducer = (state = { initialUser }, action) => {
  switch (action.type) {
    case typeRedux.setAddToCartProducts:
      return {
        ...state,
        data: [action.value],
      };
    case typeRedux.setPricingCart:
      return {
        ...state,
        pricing: action.value,
      };
    // case typeRedux.setSingleCart:
    //   return {
    //     ...state,
    //     single: action.value,
    //   };
    default:
      return state;
  }
};
