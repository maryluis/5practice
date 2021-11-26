import {
  CHANGE_CRYPTO_NAME, CHANGE_CURRENCY_NAME, GET_DATA, GOT_ERROR, PUT_DATA,
} from './actions';

export const actionChangeCrypto = (payload:string) => ({
  type: CHANGE_CRYPTO_NAME,
  payload,
});

export const actionChangeCurrency = (payload:string) => ({
  type: CHANGE_CURRENCY_NAME,
  payload,
});

export const actionGetData = () => ({
  type: GET_DATA,
});

export const actionPutData = (payload:object) => ({
  type: PUT_DATA,
  payload,
});

export const actionGotError = (payload:string) => ({
  type: GOT_ERROR,
  payload,
});
