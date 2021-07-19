import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';
import { modalReducer } from './modalReducer';

const reducer = combineReducers({
  registerReducer,
  searchReducer,
  navReducer,
  modalReducer,
});

export default reducer;
