import { ProductsProps } from "../../interfaces/interfaces";

export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
  GET_CATEGORY = "GET_CATEGORY",
  GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR",
  ADD_TO_CART = "ADD_TO_CART",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_ERROR = "ADD_TO_CART_ERROR",
  INCREMENT_QUANTITY = "INCREMENT_QUANTITY",
  DECREMENT_QUANTITY = "DECREMENT_QUANTITY",
}

// Products
type GetProducts = {
  type: ActionTypes.GET_PRODUCTS;
};
type GetProductsSuccess = {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: ProductsProps;
};
type GetProductsError = {
  type: ActionTypes.GET_PRODUCTS_ERROR;
  payload: string;
};

// Category
type GetCategory = {
  type: ActionTypes.GET_CATEGORY;
};
type GetCategorySuccess = {
  type: ActionTypes.GET_CATEGORY_SUCCESS;
  payload: ProductsProps;
};
type GetCategoryError = {
  type: ActionTypes.GET_CATEGORY_ERROR;
  payload: string;
};

// cart
type AddToCart = {
  type: ActionTypes.ADD_TO_CART;
};

type AddToCartSuccess = {
  type: ActionTypes.ADD_TO_CART_SUCCESS;
  payload: ProductsProps;
};

type AddToCartError = {
  type: ActionTypes.ADD_TO_CART_ERROR;
  payload: string;
};

// interface IncrementQuantity {
//   type: ActionTypes.INCREMENT_QUANTITY;
//   payload: CartProductType;
// }

// interface DecrementQuantity {
//   type: ActionTypes.DECREMENT_QUANTITY;
//   payload: CartProductType;
// }

export type Actions =
  | GetProducts
  | GetProductsSuccess
  | GetProductsError
  | GetCategory
  | GetCategorySuccess
  | GetCategoryError
  | AddToCart
  | AddToCartSuccess
  | AddToCartError;
