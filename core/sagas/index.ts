import { all } from "redux-saga/effects";
import { productsSaga } from "./products.saga";
import { authSaga } from "./auth.saga";
import { categoriesSaga } from "./categories.saga";

export default function* rootSaga() {
  yield all([authSaga(), productsSaga(), categoriesSaga()]);
}
