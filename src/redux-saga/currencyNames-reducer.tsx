import { CHANGE_CURRENCY_NAME } from './actions';
import { IAction } from '../interfaces';

export function currencyNames(state:object, action:IAction) {
  if (state === undefined) {
    return { actualCurrencyName: 'UAH' };
  }
  switch (action.type) {
    case CHANGE_CURRENCY_NAME: return {
      actualCurrencyName: action.payload,
    };
    default: return state;
  }
}
