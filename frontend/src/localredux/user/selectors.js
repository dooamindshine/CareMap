import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const SelectUserData = (state) => state.user.user;
export const SelectUserAddresses = (state) => state.user.addresses;
