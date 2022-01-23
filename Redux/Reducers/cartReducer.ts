import { Actions, ActionTypes } from "../Actions/ActionTypes";
import { CartProps } from "../../interfaces/interfaces";

type CartState = {
  loading: boolean;
  error: null | string;
  cartProducts: CartProps[];
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
};

const initialState: CartState = {
  loading: false,
  error: null,
  cartProducts: [],
  total: 0,
  shipping: 0,
  vat: 0,
  grandTotal: 0,
};

const cartReducer = (
  state: CartState = initialState,
  action: Actions
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, loading: true };

    case ActionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cartProducts: state.cartProducts.concat(action.payload),
      };

    case ActionTypes.ADD_TO_CART_ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default cartReducer;
