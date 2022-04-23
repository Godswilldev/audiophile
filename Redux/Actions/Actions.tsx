import { ActionTypes, Actions } from "redux/actions/actionTypes";
import { updateQtyProps, cartProductType } from "interfaces/interfaces";
import { Dispatch } from "redux";

const addToCart = () => ({
  type: ActionTypes.ADD_TO_CART,
});

const addToCartSuccess = (product: cartProductType) => ({
  type: ActionTypes.ADD_TO_CART_SUCCESS,
  payload: product,
});

const addToCartError = (error: any) => ({
  type: ActionTypes.ADD_TO_CART_ERROR,
  payload: error,
});

// cart
export const handleAddToCart =
  (product: cartProductType) => async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
    });
    try {
      dispatch({
        type: ActionTypes.ADD_TO_CART_SUCCESS,
        payload: product,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ADD_TO_CART_ERROR,
        payload: error,
      });
    }
  };

const quantityUpdate = (product: updateQtyProps) => ({
  type: ActionTypes.UPDATE_QUANTITY,
  payload: product,
});
export const updateQuantity =
  (product: updateQtyProps) => async (dispatch: Dispatch) =>
    dispatch(quantityUpdate(product));

export const toggleCartOpening = (payload: boolean) => ({
  type: ActionTypes.TOGGLE_CART_STATE,
  payload,
});
