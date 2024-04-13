import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import authReducer from "./auth.reducer";
import categoriesReducer from "./categories.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  auth: authReducer,
  categories: categoriesReducer,
});

export default rootReducer;
