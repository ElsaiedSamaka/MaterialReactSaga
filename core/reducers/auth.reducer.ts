import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_OUT_ERROR,
} from "../actions/auth/auth.types";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        loading: true,
        error: null,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
        loading: true,
        error: null,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        loading: true,
        error: null,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
