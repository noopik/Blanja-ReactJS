import { combineReducers } from 'redux';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';

const reducer = combineReducers({
  cartReducer,
  productReducer,
  userReducer,
  searchReducer,
  navReducer,
  loadingReducer,
});

export default reducer;
