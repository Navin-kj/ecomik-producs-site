export const startLoading = () => ({ type: "START_LOADING" } as const);
export const stopLoading = () => ({ type: "STOP_LOADING" } as const);

export type LoadingAction = ReturnType<
  typeof startLoading | typeof stopLoading
>;
