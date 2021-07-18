import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { searchReducer } from './searchReducer';
import { navReducer } from './navReducer';

const reducer = combineReducers({ registerReducer, searchReducer, navReducer });

export default reducer;
