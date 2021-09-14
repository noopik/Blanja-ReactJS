import { typeRedux } from '../../utils';

// ====== FOR GET ALL  PRODUCT
const initialProductReducer = {
  exist: false,
  data: [],
  meta: {},
};

export const productReducer = (state = { initialProductReducer }, action) => {
  switch (action.type) {
    case typeRedux.setAllProduct:
      return {
        ...state,
        exist: action.value.exist,
        data: action.value.data,
        meta: action.value.meta,
      };

    default:
      return state;
  }
};
