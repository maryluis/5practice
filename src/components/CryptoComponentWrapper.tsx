import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { Spinner } from 'reactstrap';
import { ICrypto } from '../interfaces';
import { actionGetData } from '../redux-saga/actionCreators';
import { CryptoCard } from './CryptoCard';

export function CryptoWrapper() {
  const data:Array<ICrypto | any> = useSelector((state: RootStateOrAny) => {
    return state.actualData.dataInterface;
  });
  const dispatch = useDispatch();
  useEffect(():any => dispatch(actionGetData()), []);
  const { loading, error } = useSelector((state: RootStateOrAny) => {
    return state.actualData;
  });
  return (
    <div className="flex-row card-inner">
      {!loading && !error && data.map(({
        name, USD, EUR, UAH, icon,
      }) => (
        <CryptoCard
          key={name}
          USD={USD}
          EUR={EUR}
          UAH={UAH}
          icon={icon}
          name={name}
        />
      ))}
      {loading && <Spinner className="loader" type="grow" />}
      {!loading && error && <h3 className="result">{error}</h3>}
    </div>
  );
}
