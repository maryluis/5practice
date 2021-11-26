import {
  useCallback, useMemo, useState,
} from 'react';
import {
  FormGroup, Label, Col, Input, Button,
} from 'reactstrap';
import { RootStateOrAny, useSelector } from 'react-redux';

export function InputWrapper() {
  const cryptoType:string = useSelector((state: RootStateOrAny) => {
    return state.actualCoin.actualCryptoName;
  });
  const to:string = 'UAH';
  const checked:boolean = false;
  const count:number = 7.0231;
  const [inputValue, changeValue] = useState(0);
  const handlerInput = useCallback((e) => {
    changeValue(e.target.value);
  }, []);
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
      <span className="button-form">
        <Button
          color="success"
          outline={checked}
        >
          UAH
        </Button>
      </span>
      <span className="button-form">
        <Button
          color="success"
          outline
        >
          USD
        </Button>
      </span>
      <span className="button-form">
        <Button
          color="success"
          outline
        >
          EUR
        </Button>
      </span>
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
        {to}
      </h3>
    </div>
  );
}
