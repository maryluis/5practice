import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import getDataWatcher from './getData-saga';

function* rootSaga() {
  yield all([
    getDataWatcher(),
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
