import { SET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../actions/products.types";

const initialState = {
  items: [],
  loading: false,
  error: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map(product =>
          product.id === action.payload.productId ? { ...product, ...action.payload.updatedData } : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};

export default productsReducer;
