const isShow = false;
const initialModal = {
  modalFilter: false,
  modalValidationEdit: false,
  modalValidationDelete: false,
  modalAddAddress: false,
  modalAddNewAddress: false,
};

export const modalReducer = (state = { isShow }, action) => {
  if (action.type === 'SET_MODAL') {
    return {
      ...state,
      isShow: action.value,
    };
  }

  return state;
};
