import { Actions, ActionTypes } from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  error: null,
  cart: [],
};
const cartReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state };
    case ActionTypes.ADD_TO_CART_SUCCESS:
      return state;
    default:
      return state;
  }
};
export default cartReducer;
