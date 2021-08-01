import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';

const reducer = combineReducers({
  userReducer,
  registerReducer,
  searchReducer,
  navReducer,
  loadingReducer,
});

export default reducer;
