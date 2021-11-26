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
  const isLoading = useSelector((state: RootStateOrAny) => {
    return state.actualData.loading;
  });
  return (
    <div className="flex-row card-inner">
      {!isLoading ? data.map(({
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
      )) : <Spinner className="loader" type="grow" />}
    </div>
  );
}
