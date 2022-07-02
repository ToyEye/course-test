import React, { useEffect, useState, useMemo } from 'react';
import { ItemStyled } from './Form.styled';
import { useDispatch } from 'react-redux';
import actions from 'redux/card/actions';
// import selector from 'redux/card/selectors';

const Card = ({ id, name, img, price }) => {
  const [value, setValue] = useState(1);
  const [cardSum, setCardSum] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setCardSum(value * Number(price));
  }, [price, value]);

  const result = useMemo(
    () => dispatch(actions.sum(Number(price), value)),
    [dispatch, price, value]
  );
  // dispatch(actions.sum(price, value));

  const onHandleChange = evt => {
    const { value } = evt.target;
    setValue(value);
  };

  return (
    <ItemStyled key={id}>
      <div className="cartContainer">
        <img src={img} alt="img" />
        <div className="infoContainer">
          <p>{name}</p>
          <p>Price: {price} UAH</p>
          <input
            type="number"
            inputMode="number"
            min="1"
            value={value}
            onChange={onHandleChange}
          />
          <p>Total: {cardSum}</p>
        </div>
      </div>
    </ItemStyled>
  );
};

export default Card;
