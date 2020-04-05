import { put, takeEvery, all, call } from 'redux-saga/effects';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
