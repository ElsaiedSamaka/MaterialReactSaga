import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_OUT_ERROR,
} from "./auth.types";

export const signin = (payload: any) => ({
  type: SIGN_IN,
  payload: payload,
});

export const signup = (payload: any) => ({
  type: SIGN_UP,
  payload: payload,
});
