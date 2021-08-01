const initialUser = {
  born: '',
  email: '',
  gender: '',
  idUser: '',
  imageProfile: null,
  name: '',
  phoneNumber: 0,
  role: '',
  verified: 0,
  refresh: '',
  token: '',
  storeName: '',
};

// REDUCER FOR REGISTER FLOW
export const userReducer = (state = { initialUser }, action) => {
  if (action.type === 'SET_USER_LOGIN') {
    return {
      ...state,
      born: action.value.born,
      email: action.value.email,
      gender: action.value.gender,
      idUser: action.value.idUser,
      imageProfile: action.value.imageProfile,
      name: action.value.name,
      phoneNumber: action.value.phoneNumber,
      role: action.value.role,
      verified: action.value.verified,
      refresh: action.value.refresh,
      token: action.value.token,
      storeName: action.value.storeName,
    };
  }

  return state;
};
