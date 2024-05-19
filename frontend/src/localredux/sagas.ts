import { all, takeLatest } from 'redux-saga/effects';
import { getUser } from './user/saga';
import { GET_USER_ACTION } from './constants';

const rootSaga = function* () {
  yield all([takeLatest(GET_USER_ACTION, getUser)]);
};

export default rootSaga;
