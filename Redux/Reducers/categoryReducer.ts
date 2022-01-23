import { ProductsProps } from "../../interfaces/interfaces";
import { ActionTypes, Actions } from "../Actions/ActionTypes";

type CategoryState = {
  loading: boolean;
  error: null | string;
  category: ProductsProps;
};

const initialState: CategoryState = {
  loading: true,
  category: [],
  error: null,
};

const categoryReducer = (
  state: CategoryState = initialState,
  action: Actions
): CategoryState => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY:
      return { ...state };

    case ActionTypes.GET_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };

    case ActionTypes.GET_CATEGORY_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default categoryReducer;
