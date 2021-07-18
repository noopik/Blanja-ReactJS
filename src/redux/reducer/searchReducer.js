const initialSearch = {
  isLoading: false,
  keyword: '',
};

// REDUCER FOR REGISTER FLOW
export const searchReducer = (state = { initialSearch }, action) => {
  if (action.type === 'SET_SEARCHING') {
    return {
      ...state,
      keyword: action.value.keyword,
    };
  }

  return state;
};
