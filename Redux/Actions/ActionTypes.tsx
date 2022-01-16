import { ProductsProps } from "../../interfaces/interfaces";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
  GET_CATEGORY = "GET_CATEGORY",
  GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR",
}

// Products
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

// Category
interface GetCategory {
  type: ActionTypes.GET_CATEGORY;
}
interface GetCategorySuccess {
  type: ActionTypes.GET_CATEGORY_SUCCESS;
  payload: ProductsProps;
}
interface GetCategoryError {
  type: ActionTypes.GET_CATEGORY_ERROR;
  payload: string;
}

export type Actions =
  // products
  | GetProducts
  | GetProductsSuccess
  | GetProductsError
  // category
  | GetCategory
  | GetCategorySuccess
  | GetCategoryError;
