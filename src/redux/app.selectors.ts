import { RootState } from "./store";

export const selectUsers = (state: RootState) => state.app.users;
export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectSearchName = (state: RootState) => state.app.searchName;
export const selectSearchUsername = (state: RootState) =>
  state.app.searchUsername;
export const selectSearchEmail = (state: RootState) => state.app.searchEmail;
export const selectSearchPhone = (state: RootState) => state.app.searchPhone;
