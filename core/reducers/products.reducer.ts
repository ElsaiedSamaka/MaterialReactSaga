import {
  SET_PRODUCTS,
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_ERROR,
} from "../actions/products.types";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loading: true,
        error: null,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.productId
            ? { ...product, ...action.payload.updatedData }
            : product,
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload),
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
