import { Actions, ActionTypes } from "../Actions/ActionTypes";
import { CartState } from "../../interfaces/interfaces";
import store from "../store/store";

const initialState: CartState = {
  loading: false,
  error: null,
  cartProducts: [],
  isCartOpen: false,
  total: 0,
  shipping: 0,
  vat: 0,
  grandTotal: 0,
};
const greg = [1, 2, 3, 4];

// const tot = store
//   .getState()
//   .cartReducer.cartProducts
//   .map((p) => p.product.price)
//   .reduce((accumulator, currentValue) => {
//     accumulator + currentValue;
//   });
// const total = initialState.cartProducts.map((p) => p.product.price);

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

    case ActionTypes.TOGGLE_CART_STATE:
      return { ...state, isCartOpen: action.payload };

    case ActionTypes.UPDATE_QUANTITY:
      const productId = action.payload.id;

      const updateType = action.payload.type;

      let currentProduct = state.cartProducts.find(
        (product) => product.id === productId
      );

      switch (currentProduct) {
        case undefined:
          return state;

        default:
          switch (updateType) {
            case "INCREMENT":
              const updatedCart1 = state.cartProducts.filter(
                (p) => p.id !== productId
              );
              currentProduct.quantity = currentProduct?.quantity + 1;
              return {
                ...state,
                cartProducts: [...updatedCart1, currentProduct],
              };

            case "DECREMENT":
              const updatedCart2 = state.cartProducts.filter(
                (p) => p.id !== productId
              );
              currentProduct.quantity = currentProduct?.quantity - 1;
              return {
                ...state,
                cartProducts: [...updatedCart2, currentProduct],
              };
            default:
              break;
          }
      }

    default:
      return state;
  }
};
export default cartReducer;
