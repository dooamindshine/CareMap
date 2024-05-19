import { all, takeLatest } from 'redux-saga/effects';
import { getSession } from './session/saga';
import { GET_SESSION_ACTION } from './constants';

const rootSaga = function* () {
  yield all([takeLatest(GET_SESSION_ACTION, getSession)]);
};

export default rootSaga;
