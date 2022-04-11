import { combineReducers } from "redux";
import cartReducer from "redux/Reducers/cartReducer";
import productsReducer from "redux/Reducers/productsReducer";

const rootReducers = combineReducers({
  cartReducer,
  productsReducer,
});

export default rootReducers;
