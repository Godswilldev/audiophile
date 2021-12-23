interface ActionTypes {
  type: string;
}

interface cartType {
  cart: {}[];
}

const initialState: cartType = {
  cart: [],
};
const cartReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "ACTION_TYPE_1":
      return { ...state };
    case "ACTION_TYPE_2":
      return state;
    default:
      return state;
  }
};
export default cartReducer;
