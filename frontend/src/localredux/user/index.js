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
    addAddress: (state, action) => {
      //const newAddress = [...state.addresses, action.payload.address];
      //const newAddress = [...state.addresses, action.payload.address];
      // state.addresses = [];
    },
    deleteAddress: (state, action) => {
      const addressUUid = action.payload.id;
      const filteredData = state.addresses.filter(
        (item) => item.id !== addressUUid
      );
      //state.addresses = filteredData;
    },
    setFavAddress: (state, action) => {
      const addressUUid = action.payload.clicked.id;
      const isFav = action.payload.clicked.isFav;
      //state.addresses = [action.payload.clicked];
    },
    getUserAddresses: (state, action) => {},
    setUserAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    getLocations: (state, action) => {},
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    getFacilities: (state, action) => {},
    setFacilities: (state, action) => {
      state.facilities = action.payload;
    },
    addFacilities: (state, action) => {},
    deleteFacilities: (state, action) => {
      const facis = state.facilities;
      const id = action.payload.id;
      const removedData = facis.filter((item) => item.idfacilities != id);
      state.facilities = removedData;
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
  addAddress,
  deleteAddress,
  setFavAddress,
  getUserAddresses,
  setUserAddresses,
  getLocations,
  setLocations,
  getFacilities,
  setFacilities,
  addFacilities,
  deleteFacilities,
} = userSlice.actions;

export default userSlice.reducer;
