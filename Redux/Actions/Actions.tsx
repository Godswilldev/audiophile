import { ActionTypes } from "./ActionTypes";
import { AppDispatch } from "../store/store";
import data from "../../Utils/data";

const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
});

const getProductsSuccess = (products: {}[]) => ({
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

// category
const getCategory = () => ({
  type: ActionTypes.GET_CATEGORY,
});

const getCategorySuccess = (products: {}[]) => ({
  type: ActionTypes.GET_CATEGORY_SUCCESS,
  payload: products,
});

const getCategoryError = (error: any) => ({
  type: ActionTypes.GET_CATEGORY_ERROR,
  payload: error,
});

interface routeProps {
  category: string | undefined | string[];
}

export const handleGetCategory =
  ({ category }: routeProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(getCategory());
    try {
      const res = data.filter((d) => d.category === category);
      dispatch(getCategorySuccess(res));
    } catch (error) {
      dispatch(getCategoryError(error));
    }
  };
