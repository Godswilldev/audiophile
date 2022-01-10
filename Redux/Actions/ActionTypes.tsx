import { ProductsProps } from "../../interfaces/interfaces";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
}

interface GetProducts {
  type: ActionTypes.GET_PRODUCTS;
}
interface GetProductsSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: ProductsProps;
}
interface GetProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR;
  payload: string;
}

export type Actions = GetProductsError | GetProducts | GetProductsSuccess;
