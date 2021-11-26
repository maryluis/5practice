import { Crypto } from '../interfaces';
import { CryptoCard } from './CryptoCard';

export function CryptoWrapper() {
  const data:Array<Crypto> = [
    {
      name: 'BTC',
      toUAH: 150000,
      toEUR: 5000,
      toUSD: 6800,
      icon: 'https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/BTC.png',
    },
    {
      name: 'ETH',
      toUAH: 7400,
      toEUR: 180,
      toUSD: 250,
      icon: 'https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/ETH.png',
    },
    {
      name: 'XPR',
      toUAH: 7.0231,
      toEUR: 0.1550,
      toUSD: 0.2500,
      icon: 'https://gitlab.com/copeus/learning/-/raw/master/tasks/react/assets/task2/icons/XRP.png',
    }];
  return (
    <div className="flex-row card-inner">
      {data.map(({
        name, toUSD, toEUR, toUAH, icon,
      }) => <CryptoCard key={name} toUSD={toUSD} toEUR={toEUR} toUAH={toUAH} icon={icon} />)}
    </div>
  );
}
