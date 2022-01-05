export enum ActionTypes {
  // GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  // GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
}

// interface GetProducts {
//   type: ActionTypes.GET_PRODUCTS;
// }
interface GetProductsSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS;
  payload: {
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
// interface GetProductsError {
//   type: ActionTypes.GET_PRODUCTS_ERROR;
//   payload: string;
// }

export type Actions = GetProductsSuccess;
