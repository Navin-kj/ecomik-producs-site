import { RootState } from "./rootReducer";

export const selectLoadingState = (state: RootState) => state.loading;
export const selectIsLoading = (state: RootState) =>
  selectLoadingState(state).isLoading;
