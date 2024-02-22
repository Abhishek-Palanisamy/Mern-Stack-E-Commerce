// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem('username') || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('username', action.payload);
    },
    logout: (state) => {
      state.username = null;
      localStorage.removeItem('username');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
