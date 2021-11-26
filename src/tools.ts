import { map, values, keys } from 'lodash';
import { ICrypto } from './interfaces';

export const URL_DATA:string = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR,UAH';

const icons:Array<string> = ['https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/BTC.png',
  'https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/ETH.png',
  'https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/XRP.png',
];

export async function getExchangeData() {
  let data = await fetch(URL_DATA);
  data = await data.json();
  const dataValues:Array<object | any> = values(data);
  const dataKeys:Array<string> = keys(data);
  const dataInterface:Array<object | any> = map(dataValues, (item:object, i:number) => {
    return { ...item, name: dataKeys[i], icon: icons[i] };
  });
  return { dataInterface, data };
}

export const DEFAULT_INTERFACE_DATA:Array<ICrypto> = [{
  name: 'undefined', UAH: '0', icon: '', USD: '0', EUR: '0',
}];
export const DEFAULT_DATA:object = {
  BTC: {
    UAH: 0,
    EUR: 0,
    USD: 0,
  },
};
