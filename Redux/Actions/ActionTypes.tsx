import { cartProductType, updateQtyProps } from "../../interfaces/interfaces";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_ERROR = "ADD_TO_CART_ERROR",
  UPDATE_QUANTITY = "UPDATE_QUANTITY",
}

// cart
interface AddToCart {
  type: ActionTypes.ADD_TO_CART;
}

interface AddToCartSuccess {
  type: ActionTypes.ADD_TO_CART_SUCCESS;
  payload: cartProductType;
}

interface AddToCartError {
  type: ActionTypes.ADD_TO_CART_ERROR;
  payload: any;
}

interface UpdateQuantity {
  type: ActionTypes.UPDATE_QUANTITY;
  payload: updateQtyProps;
}

export type Actions =
  | AddToCart
  | AddToCartSuccess
  | AddToCartError
  | UpdateQuantity;
