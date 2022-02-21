import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import type { RootState } from "../Redux/store/store";
import { ActionCreators } from "../Redux/Actions";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () =>
  bindActionCreators(ActionCreators, useDispatch());
