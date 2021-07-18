import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { searchReducer } from './searchReducer';

const reducer = combineReducers({ registerReducer, searchReducer });

export default reducer;
