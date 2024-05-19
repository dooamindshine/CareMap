import { call, delay, put } from "redux-saga/effects";
import { apis } from "network/apis";

export function* getUserData(action) {
  console.log("saga")
  console.log(action)
  //const { data } = yield call(apis.getUserRequest);
  //yield put(setUserData(data[0]?.session_v3));
  yield delay(3000);
  yield action.payload.navigation("/signup");
}

export function* createUser(type, payload) {
  console.log(type);
  const { data } = yield call(apis.createUserRequest);
  //yield put(setUserData(data[0]?.session_v3));
  yield delay(3000);
  yield payload.navigation("/signup");
}
