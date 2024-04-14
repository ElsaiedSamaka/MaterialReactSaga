import {
  FETCH_CATEGORIES,
  SET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
} from "./categories.types";

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const setCategories = (categories: any) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const createCategory = (categoryData: any) => ({
  type: CREATE_CATEGORY,
  payload: categoryData,
});

export const updateCategory = (categoryId: string, updatedData: any) => ({
  type: UPDATE_CATEGORY,
  payload: { categoryId, updatedData },
});

export const deleteCategory = (categoryId: any) => ({
  type: DELETE_CATEGORY,
  payload: categoryId,
});
