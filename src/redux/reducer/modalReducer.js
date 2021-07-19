const isShow = false;

export const modalReducer = (state = { isShow }, action) => {
  if (action.type === 'SET_MODAL') {
    return {
      ...state,
      isShow: action.value,
    };
  }

  return state;
};
