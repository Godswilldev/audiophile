import { ActionTypes } from "./ActionTypes";
import { AppDispatch } from "../store/store";
import { ProductsProps } from "../../interfaces/interfaces";

// cart
export const handleAddToCart =
  (product: ProductsProps) => async (dispatch: AppDispatch) => {
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

// export const updateQuantity =
//   (product: updateQtyProps) => async (dispatch: AppDispatch) =>
//     dispatch({
//       type: ActionTypes.UPDATE_QUANTITY,
//       payload: product,
//     });
