import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const SelectUserData = (state: RootState) => state.user.user;
