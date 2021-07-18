const isShow = false;

export const navReducer = (state = { isShow }, action) => {
  if (action.type === 'SET_NAVCOLLAPSE') {
    return {
      ...state,
      isShow: action.value,
    };
  }

  return state;
};
