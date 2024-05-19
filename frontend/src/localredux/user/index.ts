import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER } from '../constants';
import { initialState } from './state';
import { GetUser, UserSeverObjectPostRequest} from 'models/user_type';

export const sessionSlice = createSlice({
  name: USER,
  initialState,
  reducers: {
    getUserData: (state, action: PayloadAction<GetUser>) => {
      state.user = action.payload.user;
    },
    setUserData: (state, action: PayloadAction<UserSeverObjectPostRequest>) => {
      state.session = action.payload;
    }, 
    createUserData: (state, action: PayloadAction<UserSeverObjectPostRequest>) => {
      state.session = action.payload;
    }, 
  },
});

export const { getUserData , setUserData, createUserData } = sessionSlice.actions;

export default sessionSlice.reducer;
