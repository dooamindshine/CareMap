import { createSlice } from '@reduxjs/toolkit';
import { USER } from '../constants';
import { initialState } from './state';

export const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    getUserData: (state, action) => {
      console.log("Here")
      //state.user = action.payload.user;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    }, 
    createUserData: (state, action) => {
      state.user = action.payload;
    }, 
  },
});

export const { getUserData , setUserData, createUserData } = userSlice.actions;

export default userSlice.reducer;
