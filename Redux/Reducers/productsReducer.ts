interface ProductsState {
  loading: boolean;
  error: string | null;
  products: {}[];
}

const initialState = {
  loading: true,
  error: null,
  products: [],
};
export enum ActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
}

export type Actions = GetProducts | GetProductsSuccess | GetProductsError;

interface GetProducts {
  type: ActionTypes.GET_PRODUCTS;
}
interface GetProductsSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: {}[];
}
interface GetProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR;
  payload: string;
}

const productsReducer = (
  state: ProductsState = initialState,
  action: Actions
): ProductsState => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, loading: true };

    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case ActionTypes.GET_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
