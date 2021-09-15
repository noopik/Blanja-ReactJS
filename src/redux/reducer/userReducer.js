import { typeRedux } from '../../utils';

const initialUser = {
  born: '',
  email: '',
  gender: '',
  idUser: '',
  image: null,
  name: '',
  phoneNumber: 0,
  role: '',
  verified: 0,
  refresh: '',
  token: '',
  storeName: '',
  address: '',
};

// REDUCER FOR REGISTER FLOW
export const userReducer = (state = { initialUser }, action) => {
  switch (action.type) {
    case typeRedux.setUserLogin:
      return {
        ...state,
        born: action.value.born,
        email: action.value.email,
        gender: action.value.gender,
        idUser: action.value.idUser,
        image: action.value.image,
        password: action.value.password,
        name: action.value.name,
        phoneNumber: action.value.phoneNumber,
        role: action.value.role,
        verified: action.value.verified,
        refresh: action.value.refresh,
        token: action.value.token,
        storeName: action.value.storeName,
      };
    case typeRedux.setUserLogout:
      return {
        initialUser,
      };
    case typeRedux.setUserAvatar:
      return {
        ...state,
        image: action.value,
      };
    case typeRedux.setUserName:
      return {
        ...state,
        name: action.value,
      };
    case typeRedux.setUserAddress:
      return {
        ...state,
        address: action.value,
      };
    default:
      return state;
  }
};
