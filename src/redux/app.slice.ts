import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./app.actions";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface AppState {
  users: Users[];
  isLoading: boolean;
  searchName: string;
  searchUsername: string;
  searchEmail: string;
  searchPhone: string;
}

const initialState: AppState = {
  users: [],
  isLoading: false,
  searchName: '',
  searchUsername: '',
  searchEmail: '',
  searchPhone: '',
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchName: (state, action: PayloadAction<string>) => {
      state.searchName = action.payload;
    },
    setSearchUsername: (state, action: PayloadAction<string>) => {
      state.searchUsername = action.payload;
    },
    setSearchEmail: (state, action: PayloadAction<string>) => {
      state.searchEmail = action.payload;
    },
    setSearchPhone: (state, action: PayloadAction<string>) => {
      state.searchPhone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Users[]>) => {
        const users = action.payload.map(({ id, name, username, email, phone }) => ({
          id,
          name,
          username,
          email,
          phone,
        }));
        state.users = users;
        state.isLoading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  setSearchName,
  setSearchUsername,
  setSearchEmail,
  setSearchPhone,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
