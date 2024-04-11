import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
  SIGN_OUT_ERROR,
} from "../actions/auth/auth.types";
import authServices from "../services/auth.service";

function* signin(action: any): Generator<any, void, any> {
  try {
    const payload = action.payload;
    const response = yield call(authServices.signin, payload);
  } catch (error:any) {
    // Handle error
    const errorMssg = error.response.data.error.message;
    yield put({ type: SIGN_IN_ERROR, payload: errorMssg });
  }
}

function* signup(action: any): Generator<any, void, any> {
  try {
    const payload = action.payload;
    const response = yield call(authServices.signup, payload);
  } catch (error: any) {
    // Handle error
    const errorMssg = error.response.data.error.message;
    yield put({ type: SIGN_UP_ERROR, payload: errorMssg });
  }
}

function* logout(payload: any): Generator<any, void, any> {
  try {
    const response = yield call(authServices.signout, payload);
  } catch (error:any) {
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
//     const products: any = yield call(productsServices.get);
//     yield put(setProducts(products));
//   } catch (error) {
//     yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
//   }
// }

// function* verifyEmail() {
//   try {
//     const products: any = yield call(productsServices.get);
//     yield put(setProducts(products));
//   } catch (error) {
//     yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
//   }
// }

// function* sendVerificationEmail() {
//   try {
//     const products: any = yield call(productsServices.get);
//     yield put(setProducts(products));
//   } catch (error) {
//     yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
//   }
// }

// function* changePassword() {
//   try {
//     const products: any = yield call(productsServices.get);
//     yield put(setProducts(products));
//   } catch (error) {
//     yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
//   }
// }
