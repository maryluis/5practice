import { Card, List } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ICrypto } from '../interfaces';
import { actionChangeCrypto } from '../redux-saga/actionCreators';

export function CryptoCard({
  icon, toUSD, toUAH, toEUR, name = '',
}:ICrypto) {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => dispatch(actionChangeCrypto(name)), []);
  return (
    <Card onClick={clickHandler} className="flex-row">
      <div className="cripto-card-logo-inner">
        <img src={icon} alt="criptoLogo" />
        <div>{name}</div>
      </div>
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
