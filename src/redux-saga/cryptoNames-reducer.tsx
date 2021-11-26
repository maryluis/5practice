import { CHANGE_CRYPTO_NAME } from './actions';
import { IAction } from '../interfaces';

export function cryptoNames(state:object, action:IAction) {
  if (state === undefined) {
    return { actualCryptoName: 'BTH' };
  }
  switch (action.type) {
    case CHANGE_CRYPTO_NAME: return {
      actualCryptoName: action.payload,
    };
    default: return state;
  }
}
