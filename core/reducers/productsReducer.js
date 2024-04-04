import { SET_PRODUCTS } from "../actions";

const initialState = {
  list: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
