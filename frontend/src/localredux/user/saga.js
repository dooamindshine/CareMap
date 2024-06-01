import { call, delay, put } from "redux-saga/effects";
import { apis } from "network/apis";
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { setUserData } from "./index";

export function* getUserData(action) {
  const { email, token, showError, userid, setCookie } =
    action.payload;
  const result = yield call(apis.getUserProfile, email, userid, token);
  console.log(result);
  if (result.status == 200) {
    yield put(setUserData(result.data.user));
  } else {
    showError(result.data.message);
  }
}

export function* createUser(action) {
  const { user, setCookie, navigation, showError } = action.payload;
  const result = yield call(apis.createUserRequest, user);
  if (result.status == 201) {
    yield setCookie(TOKEN, result.data.token);
    yield setCookie(USERID, result.data.userid);
    yield setCookie(EMAIL, result.data.email);
    yield navigation("/profile");
  } else {
    showError(result.data.message);
  }
}

export function* signInUser(action) {
  const { user, setCookie, navigation, showError } = action.payload;
  const result = yield call(apis.signInUserRequest, user);
  if (result.status == 200) {
    yield setCookie(TOKEN, result.data.token);
    yield setCookie(TOKEN, result.data.user.id);
    yield setCookie(TOKEN, result.data.user.email);
    yield navigation("/profile");
  } else {
    showError(result.data.message);
  }
}
