import { ProductsProps } from "../../interfaces/interfaces";
import { Actions } from "../Actions/ActionTypes";
import data from "../../Utils/data";

interface ProductsState {
  loading: boolean;
  error: string | null;
  products: ProductsProps[];
}

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
