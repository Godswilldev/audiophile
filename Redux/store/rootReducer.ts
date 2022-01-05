import { combineReducers } from "redux";
import cartReducer from "./../Reducers/cartReducer";
import productsReducer from "./../Reducers/productsReducer";

const rootReducers = combineReducers({
  cartReducer,
  productsReducer,
});

export default rootReducers;
