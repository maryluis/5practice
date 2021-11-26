import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

function* rootSaga() {
  yield all([
  ]);
}

const SagaMiddleware = createSagaMiddleware();

export { SagaMiddleware, rootSaga };
