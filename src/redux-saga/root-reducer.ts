import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cryptoNames } from './cryptoNames-reducer';
import { SagaMiddleware, rootSaga } from './root-saga';

const store = createStore(combineReducers({
  actualCoin: cryptoNames,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export { store };
