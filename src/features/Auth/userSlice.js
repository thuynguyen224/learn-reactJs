import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const register = createAsyncThunk("user/register", async (payload) => {
  const userId = await userApi.add(payload);
  const data = await userApi.get(userId.id);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      });
  },
});

const { reducer } = userSlice;
export default reducer;
