import { createAsyncThunk } from "@reduxjs/toolkit";

interface UserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export const fetchUsers = createAsyncThunk<UserResponse[], void>(
  "USERS_GET",
  async (_, thunkAPI) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      const data: UserResponse[] = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);
