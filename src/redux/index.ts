import { combineReducers } from "redux";
import authSlice from "./reducers/authSlice";

const rootReducer = combineReducers({authentication: authSlice});

export default rootReducer;
