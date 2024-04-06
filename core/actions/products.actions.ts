import {FETCH_PRODUCTS,SET_PRODUCTS,CREATE_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT} from './products.types'

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const setProducts = (products:any) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const createProduct = (productData:any) => ({
  type: CREATE_PRODUCT,
  payload: productData,
});

export const updateProduct = (productId: string, updatedData:any) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, updatedData },
});

export const deleteProduct = (productId:any) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});