const initialLoading = {
  isShow: false,
};

export const loadingReducer = (state = { initialLoading }, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      isShow: action.value,
    };
  }

  return state;
};
