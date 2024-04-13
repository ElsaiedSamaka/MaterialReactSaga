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
} from "../actions/categories/categories.types.ts";
import { setCategory } from "../actions/categories/categories.actions";
import categoriesService from "../services/categories.service";

function* fetchCategories(): Generator<any, void, any> {
  try {
    const categories: any = yield call(categoriesService.get);
    yield put(setCategory(categories));
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_ERROR, payload: error.message });
  }
}

function* createCategory({ payload }: any): Generator<any, void, any> {
  try {
    const response = yield call(
      categoriesService.postMultiPartFormData,
      payload,
    );
    let newProduct = response;

    yield put(setCategory([...products, newProduct]));
  } catch (error) {
    // Handle error
  }
}

export function* categoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(CREATE_CATEGORY, createCategory);
}
