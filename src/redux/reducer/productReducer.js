import { typeRedux } from '../../utils';

// ====== FOR GET ALL  PRODUCT
const initialAllProductReducer = {
  exist: false,
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
        exist: action.value.exist,
        data: action.value.data,
        meta: action.value.meta,
      };

    default:
      return state;
  }
};

// ======= FOR CART COLLECTION
const initialCartReducer = {
  user: {},
  productChoose: [],
};

export const cartProductReducer = (state = { initialCartReducer }, action) => {
  switch (action.type) {
    case typeRedux.setCartProducts:
      return {
        ...state,
        user: action.value.user,
        productChoose: action.value.productChoose,
      };
    // case typeRedux.removeProductToCart:
    //   return {
    //     ...state,
    //     productChoose: state.productChoose.push(action.value.productChoose),
    //   };
    case typeRedux.setProductToCart:
      return {
        ...state,
        productChoose: action.value.productChoose,
      };
    default:
      return state;
  }
};

// ========= Product Detail
const initialProductItem = {
  exist: false,
  data: {},
};

export const productItemReducer = (state = initialProductItem, action) => {
  if (action.type === typeRedux.setProductItem) {
    return {
      ...state,
      exist: action.value.exist,
      data: action.value.data,
    };
  }

  return state;
};

// ========= Choose Product
const initialChooseProduct = {
  idProduct: '',
  price: '',
  color: '',
  size: '',
  total: '',
  image: '',
  nameProduct: '',
  store: '',
};

export const chooseProductReducer = (state = initialChooseProduct, action) => {
  switch (action.type) {
    case typeRedux.setChooseProductId:
      return {
        ...state,
        idProduct: action.value.idProduct,
        image: action.value.image,
        nameProduct: action.value.nameProduct,
        store: action.value.store,
      };
    case typeRedux.setChooseProductColor:
      return {
        ...state,
        color: action.value,
      };
    case typeRedux.setChooseProductSize:
      return {
        ...state,
        size: action.value,
      };
    // case typeRedux.setChooseProductTotal:
    //   return {
    //     ...state,
    //     total: action.value,
    //   };
    case typeRedux.setChooseProductCount:
      return {
        ...state,
        price: action.value.price * action.value.total,
        total: action.value.total,
      };
    default:
      break;
  }

  return state;
};
