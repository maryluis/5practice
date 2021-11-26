import { Card, List } from 'reactstrap';
import { Crypto } from '../interfaces';

export function CryptoCard({
  icon, toUSD, toUAH, toEUR,
}:Crypto) {
  return (
    <Card className="flex-row">
      <div><img src={icon} alt="criptoLogo" /></div>
      <List type="unstyled" className="list-inner">
        <li className="list-item">
          <span>USD:</span>
          <span className="text-start">{toUSD}</span>
        </li>
        <li>
          <span>UAH:</span>
          <span className="text-start">{toUAH}</span>
        </li>
        <li>
          <span>EUR:</span>
          <span className="text-start">{toEUR}</span>
        </li>
      </List>
    </Card>
  );
}
