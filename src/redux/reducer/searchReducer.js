import { typeRedux } from '../../utils';

const initialSearch = {
  exist: false,
  message: '',
  keyword: '',
  result: {},
};

// REDUCER FOR REGISTER FLOW
export const searchReducer = (state = { initialSearch }, action) => {
  if (action.type === typeRedux.setSearching) {
    return {
      ...state,
      keyword: action.value.keyword,
      exist: action.value.exist,
      message: action.value.message,
      result: action.value.result,
    };
  }

  return state;
};
