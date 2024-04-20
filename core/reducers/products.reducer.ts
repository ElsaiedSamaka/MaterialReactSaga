import * as types from '../actions/products/products.types';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
    case types.CREATE_PRODUCT:
    case types.UPDATE_PRODUCT:
    case types.DELETE_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.productId
            ? { ...product, ...action.payload.updatedData }
            : product,
        ),
        loading: false,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload),
        loading: false,
      };
    case types.FETCH_PRODUCTS_ERROR:
    case types.CREATE_PRODUCT_ERROR:
    case types.UPDATE_PRODUCT_ERROR:
    case types.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
