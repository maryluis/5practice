import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_DATA } from './actions';
import { getExchangeData } from '../tools';
import { actionGotError, actionPutData } from './actionCreators';

function* getDataWorker():Generator {
  try {
    const data:any = yield call(() => getExchangeData());
    yield put(actionPutData(data));
  } catch (e:any) {
    yield put(actionGotError(e.message));
  }
}
function* getDataWatcher() {
  yield takeEvery(GET_DATA, getDataWorker);
}
export default getDataWatcher;
