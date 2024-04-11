import { all } from "redux-saga/effects";
import { productsSaga } from "./products.saga";
import { authSaga } from "./auth.saga";

export default function* rootSaga() {
  yield all([authSaga(), productsSaga()]);
}
