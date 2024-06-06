import { call, delay, put } from "redux-saga/effects";
import { apis } from "network/apis";
import { EMAIL, TOKEN, USERID } from "utils/constants";
import { setUserData } from "./index";

export function* getUserData(action) {
  const { email, token, showError, userid } = action.payload;
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

export function* updateUserData(action) {
  const { user, showError, showSuccess, email, userid, token, oldUserData } =
    action.payload;
  const newData = { ...oldUserData };
  if (user.hasOwnProperty("first_name")) {
    newData.first_name = user.first_name;
  }
  if (user.hasOwnProperty("last_name")) {
    newData.last_name = user.last_name;
  }
  if (user.hasOwnProperty("marital_status")) {
    newData.marital_status = user.marital_status;
  }

  if (user.hasOwnProperty("zipcode")) {
    newData.zipcode = user.zipcode;
  }

  if (user.hasOwnProperty("gender")) {
    newData.gender = user.gender;
  }

  if (user.hasOwnProperty("children")) {
    newData.children = user.children;
  }

  if (user.hasOwnProperty("birthdate")) {
    newData.birthdate = user.birthdate;
  }
  if (user.hasOwnProperty("age")) {
    newData.age = user.age;
  }
  const result = yield call(
    apis.updateUserProfile,
    email,
    userid,
    token,
    newData
  );
  if (result.status == 200) {
    showSuccess();
  } else {
    showError(result.data.message);
  }
}

export function* deleteUserData(action) {
  const { showErrorDelete, showSuccessDelete, email, userid, token } =
    action.payload;
  const result = yield call(apis.deleteUserProfile, email, userid, token);
  if (result.status == 200) {
    showSuccessDelete();
  } else {
    showErrorDelete(result.data.message);
  }
}

export function* addAddress(action) {
  const { showErrorAdd, showSuccessAdd, email, userid, token, address } =
    action.payload;
  const result = yield call(apis.addUserAddress, email, userid, token, address);
  if (result.status == 200) {
    showSuccessAdd();
  } else {
    showErrorAdd(result.data.message);
  }
}

export function* deleteAddress(action) {
  const { showErrorDelete, showSuccessDelete, email, userid, token, uuid } =
    action.payload;
  console.log("email:"+email)  
  const result = yield call(apis.deleteUserAddress, email, userid, token, uuid);
  if (result.status == 204) {
    showSuccessDelete();
  } else {
    showErrorDelete(result.data.message);
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
