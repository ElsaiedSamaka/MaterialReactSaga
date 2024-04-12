import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
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
import authServices from "../services/auth.service";

function* signin(action: any): Generator<any, void, any> {
  try {
    const payload = action.payload;
    const response = yield call(authServices.signin, payload);
    yield put({ type: SIGN_IN_SUCCESS, payload: {user: response.user,tokens:response.tokens} });
  } catch (error: any) {
    // Handle error
    const errorMssg = error.response.data.message;
    yield put({ type: SIGN_IN_ERROR, payload: errorMssg });
  }
}

function* signup(action: any): Generator<any, void, any> {
  try {
    const payload = action.payload;
    const response = yield call(authServices.signup, payload);
    yield put({
      type: SIGN_UP_SUCCESS,
      payload: { user: response.user, tokens: response.tokens },
    });
  } catch (error: any) {
    // Handle error
    const errorMssg = error.response.data.error.message;
    yield put({ type: SIGN_UP_ERROR, payload: errorMssg });
  }
}

function* logout(action: any): Generator<any, void, any> {
  try {
        const payload = action.payload;

    const response = yield call(authServices.signout, { refreshToken: payload });
    yield put({ type: SIGN_OUT_SUCCESS });
  } catch (error: any) {
    // Handle error
    const errorMssg = error.response.data.error.message;
    yield put({ type: SIGN_OUT_ERROR, payload: errorMssg });
  }
}

export function* authSaga() {
  yield takeEvery(SIGN_IN, signin);
  yield takeEvery(SIGN_UP, signup);
  yield takeEvery(SIGN_OUT, logout);
}

// function* resetPassword() {
//   try {
// 
//   } catch (error) {
// 
//   }
// }

// function* verifyEmail() {
//   try {
// 
//   } catch (error) {
// 
//   }
// }

// function* sendVerificationEmail() {
//   try {
// 
//   } catch (error) {
// 
//   }
// }

// function* changePassword() {
//   try {
//
//   } catch (error) {
// 
//   }
// }
