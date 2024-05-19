import { call, delay, put } from 'redux-saga/effects';
import { apis } from 'network/apis';
import { setSessionData } from '.';
import { GET_SESSION_ACTION } from 'localredux/constants';
import { GetSession } from 'models/session_type';

export function* getSession({
  type,
  payload,
}: {
  type: typeof GET_SESSION_ACTION;
  payload: GetSession;
}) {
  console.log(type)
  const { data } = yield call(apis.getSessionRequest, payload.sessionId);
  yield put(setSessionData(data[0]?.session_v3));
  yield delay(3000)
  yield payload.navigation('/session');
}
