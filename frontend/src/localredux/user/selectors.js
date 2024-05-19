import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const SelectUserData = (state) => state.user.user;
