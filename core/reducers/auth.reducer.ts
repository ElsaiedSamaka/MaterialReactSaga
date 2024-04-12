import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_OUT_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_SUCCESS,
} from "../actions/auth/auth.types";

const initialState = {
  user: null,
  loading: false,
  error: null,
  tokens: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SIGN_UP:
      return {
        ...state,
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
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
        tokens: action.payload.tokens
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
        tokens: action.payload.tokens,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: null,
        tokens:null
      };
    default:
      return state;
  }
};

export default authReducer;
