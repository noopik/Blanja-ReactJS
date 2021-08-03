import { typeRedux } from '../../utils';

// ====== FOR GET ALL  PRODUCT
const initialAllProductReducer = {
  data: [],
  meta: {},
};

export const allProductReducer = (
  state = { initialAllProductReducer },
  action
) => {
  switch (action.type) {
    case typeRedux.setAllProduct:
      return {
        ...state,
        data: action.value.data,
        meta: action.value.meta,
      };

    default:
      return state;
  }
};

// ======= FOR CART COLLECTION
const initialCartReducer = {
  author: {},
  productChoose: [],
  metaData: {},
};

export const cartProductReducer = (state = { initialCartReducer }, action) => {
  switch (action.type) {
    case typeRedux.setCartProducts:
      return {
        ...state,
        author: action.value.author,
        productChoose: action.value.productChoose,
        metaData: {
          totalProducts: initialCartReducer.productChoose.length,
        },
      };
    default:
      return state;
  }
};
