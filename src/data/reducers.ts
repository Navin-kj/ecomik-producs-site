import { LoadingAction } from "./actions";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingReducer = (
  state = initialState,
  action: LoadingAction
): LoadingState => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "STOP_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;
