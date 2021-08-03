const isShow = true;

export const loadingReducer = (state = { isShow }, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      isShow: action.value,
    };
  }

  return state;
};
