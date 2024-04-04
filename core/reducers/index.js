import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  // Add other reducers here if needed
});

export default rootReducer;
