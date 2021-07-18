import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';

const reducer = combineReducers({ registerReducer });

export default reducer;
