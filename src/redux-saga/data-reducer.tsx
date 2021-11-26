import { GET_DATA, GOT_ERROR, PUT_DATA } from './actions';
import { IActionObj } from '../interfaces';
import { DEFAULT_DATA, DEFAULT_INTERFACE_DATA } from '../tools';

export function dataReducer(state:object, action:IActionObj) {
  if (state === undefined) {
    return {
      dataInterface: DEFAULT_INTERFACE_DATA, data: DEFAULT_DATA, loading: false, error: null,
    };
  }
  switch (action.type) {
    case PUT_DATA: return { ...action.payload, loading: false };
    case GET_DATA: return { ...state, loading: true };
    case GOT_ERROR: return { ...state, loading: false, error: action.payload };
    default: return state;
  }
}
