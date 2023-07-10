import { combineReducers } from "redux";
import authSlice from "./reducers/authSlice";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({authentication: authSlice});

export default rootReducer;
export const useAppDispatch: () => any = useDispatch; // Export a hook that can be reused to resolve types

