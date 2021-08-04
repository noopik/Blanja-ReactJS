import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import {
  allProductReducer,
  cartProductReducer,
  productItemReducer,
  chooseProductReducer,
} from './productReducer';

const reducer = combineReducers({
  chooseProductReducer,
  productItemReducer,
  cartProductReducer,
  allProductReducer,
  userReducer,
  registerReducer,
  searchReducer,
  navReducer,
  loadingReducer,
});

export default reducer;
