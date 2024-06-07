import { all, takeLatest } from "redux-saga/effects";
import {
  getUserData,
  createUser,
  signInUser,
  updateUserData,
  deleteUserData,
  addAddress,
  deleteAddress,
  setFavAddress,
  getUserAddresses
} from "./user/saga";
import {
  GET_USER_ACTION,
  CREATE_USER_ACTION,
  SIGNIN_USER_ACTION,
  UPDATE_USER_ACTION,
  DELETE_USER_ACTION,
  ADD_ADDRESS_USER_ACTION,
  DELETE_ADDRESS_USER_ACTION,
  FAV_ADDRESS_USER_ACTION,
  GET_ADDRESS_USER_ACTION
} from "./constants";

const rootSaga = function* () {
  yield all([
    takeLatest(GET_USER_ACTION, getUserData),
    takeLatest(CREATE_USER_ACTION, createUser),
    takeLatest(SIGNIN_USER_ACTION, signInUser),
    takeLatest(UPDATE_USER_ACTION, updateUserData),
    takeLatest(DELETE_USER_ACTION, deleteUserData),
    takeLatest(ADD_ADDRESS_USER_ACTION, addAddress),
    takeLatest(DELETE_ADDRESS_USER_ACTION, deleteAddress),
    takeLatest(FAV_ADDRESS_USER_ACTION, setFavAddress),
    takeLatest(GET_ADDRESS_USER_ACTION, getUserAddresses),
  ]);
};

export default rootSaga;
