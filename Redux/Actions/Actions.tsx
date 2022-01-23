import { ActionTypes } from "./ActionTypes";
import { AppDispatch } from "../store/store";
import data from "../../Utils/data";
import { ProductsProps } from "../../interfaces/interfaces";

const getProducts = () => ({
  type: ActionTypes.GET_PRODUCTS,
});

const getProductsSuccess = (products: ProductsProps) => ({
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

const getCategorySuccess = (products: ProductsProps) => ({
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

// cart

const addToCart = () => ({
  type: ActionTypes.ADD_TO_CART,
});

const addToCartSuccess = (cartProduct: cartProps) => ({
  type: ActionTypes.ADD_TO_CART_SUCCESS,
  payload: cartProduct,
});

const addToCartError = (error: any) => ({
  type: ActionTypes.ADD_TO_CART_ERROR,
  payload: error,
});

// const incrementQuantity = (cartProduct: CartProductType) => ({
//   type: ActionTypes.INCREMENT_QUANTITY,
//   payload: cartProduct,
// });

// const decrementQuantity = (cartProduct: CartProductType) => ({
//   type: ActionTypes.DECREMENT_QUANTITY,
//   payload: cartProduct,
// });

type cartProps = {
  productSlug: string;
};

export const handleAddToCart =
  ({ productSlug }: cartProps) =>
  async (dispatch: AppDispatch) => {
    dispatch(addToCart());
    try {
      dispatch(
        addToCartSuccess({
          productSlug,
        })
      );
    } catch (error) {
      dispatch(addToCartError(error));
    }
  };
