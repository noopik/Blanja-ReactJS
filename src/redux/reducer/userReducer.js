import { typeRedux } from '../../utils';

const initialUser = {
  data: {},
};

// REDUCER FOR REGISTER FLOW
export const userReducer = (state = { initialUser }, action) => {
  switch (action.type) {
    case typeRedux.setUserLogin:
      return {
        ...state,
        data: action.value,
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
