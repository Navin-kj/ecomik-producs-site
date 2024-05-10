import { combineReducers } from "redux";
import loadingReducer, { LoadingState } from "./reducers";

export interface RootState {
  loading: LoadingState;
  // ... other slices of state
}
const rootReducer = combineReducers({
  loading: loadingReducer,
});

export default rootReducer;
