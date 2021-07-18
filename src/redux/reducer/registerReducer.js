const initialRegister = {
  email: '',
  password: '',
  name: '',
  phoneNumber: '',
  gender: '',
  born: '',
  imageProfile: '',
};

// REDUCER FOR REGISTER FLOW
export const registerReducer = (state = { initialRegister }, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      email: action.value.email,
      password: action.value.password,
      name: action.value.name,
      phoneNumber: action.value.phoneNumber,
      gender: action.value.gender,
      born: action.value.born,
      imageProfile: action.value.imageProfile,
    };
  }

  return state;
};
