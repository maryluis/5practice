import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_DATA } from './actions';
import { getExchangeData } from '../tools';
import { actionPutData } from './actionCreators';

function* getDataWorker():Generator {
  const data:any = yield call(() => getExchangeData());
  yield put(actionPutData(data));
}
function* getDataWatcher() {
  yield takeEvery(GET_DATA, getDataWorker);
}
export default getDataWatcher;
