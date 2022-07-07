import React, { useEffect, useState } from 'react';
import { ItemStyled } from './Form.styled';
import { useDispatch } from 'react-redux';
import actions from 'redux/card/actions';

import { TiDeleteOutline } from 'react-icons/ti';

const Card = ({ id, name, img, price }) => {
  const [valueInput, setValue] = useState(1);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(valueInput * price);
  }, [price, valueInput]);

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
            value={valueInput}
            onChange={onHandleChange}
          />
          <p>Total: {total}</p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(actions.remove(id))}
          className="deleteButton"
        >
          <TiDeleteOutline size={25} />
        </button>
      </div>
    </ItemStyled>
  );
};

export default Card;
