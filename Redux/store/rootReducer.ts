import { combineReducers } from "redux";
import cartReducer from "./../Reducers/cartReducer";

const rootReducers = combineReducers({
  cartReducer,
});

export default rootReducers;
