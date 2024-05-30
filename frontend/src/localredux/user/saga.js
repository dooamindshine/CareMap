import { call, delay, put } from "redux-saga/effects";
import { apis } from "network/apis";
import { TOKEN } from "utils/constants";
import { setUserData } from "./index";

export function* getUserData(action) {
  const { email, token, showError, showSuccess } = action.payload;
  const result = yield call(apis.getUserProfile, email, token);
  if (result.status == 200) {
    yield put(setUserData(result.response.data.user));
    showSuccess()
  } else {
    showError(result.data.message);
  }
}

export function* createUser(action) {
  const { user, setCookie, navigation, showError } = action.payload;
  const result = yield call(apis.createUserRequest, user);
  if (result.status == 201) {
    yield setCookie(TOKEN, result.data.token);
    yield navigation("/maphome");
  } else {
    showError(result.data.message);
  }
}

export function* signInUser(action) {
  const { user, setCookie, navigation, showError } = action.payload;
  const result = yield call(apis.signInUserRequest, user);
  if (result.status == 200) {
    yield setCookie(TOKEN, result.data.token);
    yield navigation("/maphome");
  } else {
    showError(result.data.message);
  }
}
