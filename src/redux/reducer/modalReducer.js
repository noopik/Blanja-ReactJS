const isShow = false;
// const initialModal = {
//   modalFilter: false,
//   modalValidationEdit: false,
//   modalValidationDelete: false,
//   modalAddAddress: false,
//   modalAddNewAddress: false,
//   modalUploadPhoto: false,
// };

export const modalReducer = (state = { isShow }, action) => {
  if (action.type === 'SET_MODAL') {
    return {
      ...state,
      isShow: action.value,
    };
  }

  return state;
};

// modalFilter: action.value.modalFilter,
// modalValidationEdit: action.value.modalValidationEdit,
// modalValidationDelete: action.value.modalValidationDelete,
// modalAddAddress: action.value.modalAddAddress,
// modalAddNewAddress: action.value.modalAddNewAddress,
// modalUploadPhoto: action.value.modalUploadPhoto,
