import {
  FETCH_CATEGORIES,
  SET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES_ERROR,
  CREATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_ERROR,
  DELETE_CATEGORY_ERROR,
} from "../actions/categories/categories.types";
import { setCategories } from "../actions/categories/categories.actions";
import categoriesService from "../services/categories.service";
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

function* fetchCategories(): Generator<any, void, any> {
  try {
    const categories: any = yield call(categoriesService.get);
    yield put(setCategories(categories));
  } catch (error:any) {
    yield put({ type: FETCH_CATEGORIES_ERROR, payload: error.message });
  }
}

// function* createCategory({ payload }: any): Generator<any, void, any> {
//   try {
//  
//   } catch (error) {
// 
//   }
// }

export function* categoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}
