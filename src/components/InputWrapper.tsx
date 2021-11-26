import {
  useCallback, useMemo, useState,
} from 'react';
import {
  FormGroup, Label, Col, Input, Button,
} from 'reactstrap';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { actionChangeCurrency } from '../redux-saga/actionCreators';

export function InputWrapper() {
  const buttonsName = ['UAH', 'USD', 'EUR'];
  const [inputValue, changeValue] = useState(0);
  const cryptoType:string = useSelector((state: RootStateOrAny) => {
    return state.actualCoin.actualCryptoName;
  });
  const dispatch = useDispatch();
  const handleClick = useCallback((e) => {
    dispatch(actionChangeCurrency(e.target.name));
  }, []);
  const handlerInput = useCallback((e) => {
    changeValue(e.target.value);
  }, []);
  const currencyType:string = useSelector((state: RootStateOrAny) => {
    return state.actualCurrency.actualCurrencyName;
  });
  const count:number = 7.0231;
  const exchanged = useMemo(() => {
    const result = Math.round(((inputValue * count) + Number.EPSILON) * 100) / 100;
    return result;
  }, [inputValue, count]);
  return (
    <div className="input-wrapper">
      <h3>
        Selected coin:
        {' '}
        {cryptoType}
      </h3>
      <FormGroup className="input-inner" row>
        <Label
          for="type"
          sm={3}
        >
          Volume
        </Label>
        <Col sm={7}>
          <Input
            id="type"
            name="type"
            onChange={handlerInput}
            placeholder="only number"
            type="number"
          />
        </Col>
      </FormGroup>
      {buttonsName.map((el) => (
        <span key={el} className="button-form">
          <Button
            color="success"
            onClick={handleClick}
            outline={currencyType !== el}
            name={el}
          >
            {el}
          </Button>
        </span>
      ))}
      <h3 className="result">
        {inputValue || '0'}
        {' '}
        {cryptoType}
        {' '}
        {' '}
        will be a
        {' '}
        {exchanged}
        {' '}
        in
        {' '}
        {currencyType}
      </h3>
    </div>
  );
}
