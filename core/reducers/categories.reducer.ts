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

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        items: action.payload,
        loading: true,
        error: null,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        items: state.items.map((product) =>
          product.id === action.payload.productId
            ? { ...product, ...action.payload.updatedData }
            : product,
        ),
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        items: state.items.filter((product) => product.id !== action.payload),
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case UPDATE_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case DELETE_CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
