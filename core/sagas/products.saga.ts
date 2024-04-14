import { put, call, takeLatest } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/products/products.types";
import { setProducts } from "../actions/products/products.actions";
import productsServices from "../services/products.service";

function* fetchProducts(): Generator<any, void, any> {
  try {
    // Fetch products from API
    const products: any = yield call(productsServices.get);
    yield put(setProducts(products));
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
}

function* createProduct({ payload }: any): Generator<any, void, any> {
  try {
    // call API endpoint to create a product
    const response = yield call(
      productsServices.postMultiPartFormData,
      payload,
    );
    let newProduct = response;
    // Dispatch an action to update state with the new product
    yield put(setProducts([...products, newProduct]));
  } catch (error) {
    // Handle error
  }
}

// function* updateProduct({ payload }): Generator<any, void, any> {
//   try {
//     const { productId, updatedData } = payload;
//     // Send API request to update product with productId and updatedData
//     // const response = yield call(api.updateProduct, productId, updatedData);
//     // Handle response accordingly
//   } catch (error) {
//     // Handle error
//   }
// }

function* deleteProduct({ payload }): Generator<any, void, any> {
  try {
    // Send API request to delete product with payload as productId
    const response = yield call(productsServices.remove, payload);
    // Handle response accordingly
  } catch (error) {
    // Handle error
  }
}

export function* productsSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
  yield takeLatest(CREATE_PRODUCT, createProduct);
  // yield takeLatest(UPDATE_PRODUCT, updateProduct);
  yield takeLatest(DELETE_PRODUCT, deleteProduct);
}
