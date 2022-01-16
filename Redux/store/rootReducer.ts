import { combineReducers } from "redux";
import cartReducer from "./../Reducers/cartReducer";
import productsReducer from "./../Reducers/productsReducer";
import categoryReducer from "./../Reducers/categoryReducer";

const rootReducers = combineReducers({
  cartReducer,
  productsReducer,
  categoryReducer,
});

export default rootReducers;
