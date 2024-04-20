import * as types from './products.types';

export const fetchProducts = () => ({
  type: types.FETCH_PRODUCTS,
});

export const createProduct = (productData:any) => ({
  type: types.CREATE_PRODUCT,
  payload: productData,
});

export const updateProduct = (productId:string, updatedData:any) => ({
  type: types.UPDATE_PRODUCT,
  payload: { productId, updatedData },
});

export const deleteProduct = (productId:string) => ({
  type: types.DELETE_PRODUCT,
  payload: productId,
});

export const fetchProductsSuccess = (products: any[]) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const createProductSuccess = (product: any) => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductSuccess = (product: any) => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const deleteProductSuccess = (productId: string) => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  payload: productId,
});

export const fetchProductsError = (error: string) => ({
  type: types.FETCH_PRODUCTS_ERROR,
  payload: error,
});

export const createProductError = (error: string) => ({
  type: types.CREATE_PRODUCT_ERROR,
  payload: error,
});

export const updateProductError = (error: string) => ({
  type: types.UPDATE_PRODUCT_ERROR,
  payload: error,
});

export const deleteProductError = (error: string) => ({
  type: types.DELETE_PRODUCT_ERROR,
  payload: error,
});

