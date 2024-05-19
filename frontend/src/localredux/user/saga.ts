import { call, delay, put } from 'redux-saga/effects';
import { apis } from 'network/apis';
import { setUserData } from '.';
import { CREATE_USER_ACTION, GET_USER_ACTION } from 'localredux/constants';
import { CreateUser, GetUser } from 'models/user_type';

export function* getUser({
  type,
  payload,
}: {
  type: typeof GET_USER_ACTION;
  payload: GetUser;
}) {
  console.log(type)
  //const { data } = yield call(apis.getUserRequest);
  //yield put(setUserData(data[0]?.session_v3));
  yield delay(3000)
  yield payload.navigation('/signup');
}


export function* createUser({
  type,
  payload,
}: {
  type: typeof CREATE_USER_ACTION;
  payload: CreateUser;
}) {
  console.log(type)
  const { data } = yield call(apis.createUserRequest);
  //yield put(setUserData(data[0]?.session_v3));
  yield delay(3000)
  yield payload.navigation('/signup');
}
