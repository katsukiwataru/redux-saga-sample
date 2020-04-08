import { put, takeEvery, all, call, delay } from 'redux-saga/effects';

const delayFn = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield call(delayFn, 1000);
  yield put({ type: 'INCREMENT' });
}

export function* errorInPutSaga() {
  yield delay(100);
  yield put({ type: 'ACTION_ERROR_IN_PUT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* watchErrorInPutSaga() {
  yield takeEvery('ACTION_ERROR_IN_PUT', errorInPutSaga);
}

export function* rootSaga() {
  yield all([watchIncrementAsync(), watchErrorInPutSaga()]);
}
