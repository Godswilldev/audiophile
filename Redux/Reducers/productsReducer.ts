import { Actions, ActionTypes } from "../Actions/ActionTypes";

interface ProductsState {
  // loading: boolean;
  // error: string | null;
  products: {
    id: number;
    slug: string;
    name: string;
    image: object;
    category: string;
    categoryImage: object;
    new: true;
    price: number;
    description: string;
    features: string;
    includes: {}[];
    gallery: object;
    others: {}[];
  }[];
}

const initialState = {
  // loading: true,
  // error: null,
  products: [],
};

const productsReducer = (
  state: ProductsState = initialState,
  action: Actions
): ProductsState => {
  switch (action.type) {
    // case ActionTypes.GET_PRODUCTS:
    //   return { ...state, loading: true };

    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    // case ActionTypes.GET_PRODUCTS_ERROR:
    //   return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
