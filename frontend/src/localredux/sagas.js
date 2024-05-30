import { all, takeLatest } from "redux-saga/effects";
import { getUserData, createUser, signInUser } from "./user/saga";
import {
  GET_USER_ACTION,
  CREATE_USER_ACTION,
  SIGNIN_USER_ACTION,
} from "./constants";

const rootSaga = function* () {
  yield all([
    takeLatest(GET_USER_ACTION, getUserData),
    takeLatest(CREATE_USER_ACTION, createUser),
    takeLatest(SIGNIN_USER_ACTION, signInUser),
  ]);
};

export default rootSaga;
