import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  store.subscribe(() => {
    window.localStorage.state = JSON.stringify(store.getState());
  });

  return store;
};

const state = configureStore().getState;
const dispatch = configureStore().dispatch;

export type RootState = ReturnType<typeof state>;

export type AppDispatch = typeof dispatch;

export default configureStore();
