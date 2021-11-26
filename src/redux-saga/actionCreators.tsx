import { CHANGE_CRYPTO_NAME, CHANGE_CURRENCY_NAME } from './actions';

export const actionChangeCrypto = (payload:string) => ({
  type: CHANGE_CRYPTO_NAME,
  payload,
});

export const actionChangeCurrency = (payload:string) => ({
  type: CHANGE_CURRENCY_NAME,
  payload,
});
