import { ActionTypes } from "./ActionTypes";
import { AppDispatch } from "../store/store";
import data from "../../Utils/data";

const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
});

export const getProductsSuccess = (products: {}[]) => ({
  type: ActionTypes.GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = (error: any) => ({
  type: ActionTypes.GET_PRODUCTS_ERROR,
  payload: error,
});

export const handleGetProducts = () => async (dispatch: AppDispatch) => {
  dispatch(getProducts());
  try {
    dispatch(getProductsSuccess(data));
  } catch (error) {
    dispatch(getProductsError(error));
  }
};
