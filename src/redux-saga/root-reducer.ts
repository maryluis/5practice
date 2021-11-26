import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cryptoNames } from './cryptoNames-reducer';
import { SagaMiddleware, rootSaga } from './root-saga';
import { currencyNames } from './currencyNames-reducer';
import { dataReducer } from './data-reducer';

const store = createStore(combineReducers({
  actualCoin: cryptoNames,
  actualCurrency: currencyNames,
  actualData: dataReducer,
}), applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

export { store };
