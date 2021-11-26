import { Card, List } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ICrypto } from '../interfaces';
import { actionChangeCrypto } from '../redux-saga/actionCreators';

export function CryptoCard({
  icon, USD, UAH, EUR, name = '',
}:ICrypto) {
  const dispatch = useDispatch();
  const clickHandler = useCallback(() => dispatch(actionChangeCrypto(name)), []);
  return (
    <Card onClick={clickHandler} className="flex-row">
      {name !== 'undefined'
        ? (
          <>
            <div className="cripto-card-logo-inner">
              <img src={icon} alt="criptoLogo" />
              <div>{name}</div>
            </div>
            <List type="unstyled" className="list-inner">
              <li className="list-item">
                <span>USD:</span>
                <span className="text-start">{USD}</span>
              </li>
              <li>
                <span>UAH:</span>
                <span className="text-start">{UAH}</span>
              </li>
              <li>
                <span>EUR:</span>
                <span className="text-start">{EUR}</span>
              </li>
            </List>
          </>
        )
        : <h3>Ops. something is wrong</h3>}
    </Card>
  );
}
