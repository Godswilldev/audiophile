import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../Redux/Actions";
import type { RootState } from "../Redux/store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
