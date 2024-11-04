// src/store/index.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: localStorage.getItem("userId") || null,
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
      localStorage.setItem("userId", action.payload); // localStorage 업데이트
    },
    clearUserId: (state) => {
      state.userId = null;
      localStorage.removeItem("userId"); // localStorage에서 삭제
    },
  },
});

export const { setUserId, clearUserId } = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
