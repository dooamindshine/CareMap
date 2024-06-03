import { createSlice } from "@reduxjs/toolkit";
import { USER } from "../constants";
import { initialState } from "./state";

export const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.user = action.payload;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    createUserData: (state, action) => {
      state.user = action.payload;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
    },
    deleteUserData: (state, action) => {
      //state.user = null;
    },
    signInUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  getUserData,
  setUserData,
  createUserData,
  signInUser,
  updateUserData,
  deleteUserData,
} = userSlice.actions;

export default userSlice.reducer;
