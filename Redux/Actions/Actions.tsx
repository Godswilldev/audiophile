import { ActionTypes } from "./ActionTypes";
import { AppDispatch, RootState } from "../store/store";
import data from "../../Utils/data";
import { CartProps, ProductsProps } from "../../interfaces/interfaces";

export const handleGetProducts = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: ActionTypes.GET_PRODUCTS,
  });
  try {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_ERROR,
      payload: error,
    });
  }
};

// category

interface routeProps {
  category: string | undefined | string[];
}

export const handleGetCategory =
  ({ category }: routeProps) =>
  async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.GET_CATEGORY,
    });
    try {
      const res = data.filter((d) => d.category === category);
      dispatch({
        type: ActionTypes.GET_CATEGORY_SUCCESS,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.GET_CATEGORY_ERROR,
        payload: error,
      });
    }
  };

// cart
export const handleAddToCart =
  ({ productSlug, productName, price, quantity, image }: CartProps) =>
  async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
    });

    try {
      dispatch({
        type: ActionTypes.ADD_TO_CART_SUCCESS,
        payload: { productSlug, productName, price, quantity, image },
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.ADD_TO_CART_ERROR,
        payload: error,
      });
    }
  };
