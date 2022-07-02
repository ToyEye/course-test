import React, { useEffect } from 'react';
import { ItemStyled } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/card/actions';
import selectors from 'redux/card/selectors';

const Card = ({ id, name, img, price }) => {
  const dispatch = useDispatch();

  const cards = useSelector(selectors.getCards);
  const currentCard = cards.find(item => item.id === id);

  useEffect(() => {
    if (currentCard) return;
    dispatch(actions.add({ id, price, count: 1 }));
  }, [currentCard, dispatch, id, price]);

  const onHandleChange = evt => {
    const { value } = evt.target;
    dispatch(actions.add({ id, price, count: value }));
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
            value={currentCard?.count || 1}
            onChange={onHandleChange}
          />
          <p>Total: {currentCard ? currentCard.count * price : price}</p>
        </div>
      </div>
    </ItemStyled>
  );
};

export default Card;
