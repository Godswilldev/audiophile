import { ProductsState } from "interfaces/interfaces";
import { Actions } from "../Actions/ActionTypes";
import data from "../../utils/data";

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: data,
};

const productsReducer = (
  state: ProductsState = initialState,
  action: Actions
): ProductsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
