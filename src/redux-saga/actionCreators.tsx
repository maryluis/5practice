import { CHANGE_CRYPTO_NAME } from './actions';

export const actionChangeCrypto = (payload:string) => ({
  type: CHANGE_CRYPTO_NAME,
  payload,
});
