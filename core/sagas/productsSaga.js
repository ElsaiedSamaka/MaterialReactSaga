import { put, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCTS, setProducts } from "../actions";

function* fetchProducts() {
  try {
    // Fetch products from API or any other data source
    const products = yield fetch("https://api.example.com/products")
    yield put(setProducts(products));
  } catch (error) {
    // Handle error
  }
}

export function* productsSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
