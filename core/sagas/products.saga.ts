import { put, call, select, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/products/products.types';
import * as actions from '../actions/products/products.actions';
import productsServices from '../services/products.service';

function* fetchProductsSaga(): Generator<any, void, any> {
  try {
    const products = yield call(productsServices.get);
    yield put(actions.fetchProductsSuccess(products));
  } catch (error) {
    yield put({ type: types.FETCH_PRODUCTS_ERROR, payload: error.message });
  }
}

function* createProductSaga(action:any): Generator<any, void, any> {
  try {
    const response = yield call(productsServices.postMultiPartFormData, action.payload);
    yield put(actions.createProductSuccess(response));
  } catch (error) {
    yield put({ type: types.CREATE_PRODUCT_ERROR, payload: error.message });
  }
}

function* updateProductSaga(action:any): Generator<any, void, any>  {
  try {
    const { productId, updatedData } = action.payload;
    yield call(productsServices.put, productId, updatedData);
    yield put(actions.updateProductSuccess(action.payload));
  } catch (error) {
    yield put({ type: types.UPDATE_PRODUCT_ERROR, payload: error.message });
  }
}

function* deleteProductSaga(action:any): Generator<any, void, any> {
  try {
    yield call(productsServices.remove, action.payload);
    yield put(actions.deleteProductSuccess(action.payload));
  } catch (error) {
    yield put({ type: types.DELETE_PRODUCT_ERROR, payload: error.message });
  }
}

export function* productsSaga() {
  yield takeLatest(types.FETCH_PRODUCTS, fetchProductsSaga);
  yield takeLatest(types.CREATE_PRODUCT, createProductSaga);
  yield takeLatest(types.UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(types.DELETE_PRODUCT, deleteProductSaga);
}
