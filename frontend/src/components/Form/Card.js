import React, { useEffect } from 'react';
import { ItemStyled } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'redux/card/actions';
import selectors from 'redux/card/selectors';
import { TiDeleteOutline } from 'react-icons/ti';

const Card = ({ id, name, img, price }) => {
  const dispatch = useDispatch();

  const cards = useSelector(selectors.getCards);
  const currentCard = cards.find(item => item.id === id);

  useEffect(() => {
    if (currentCard) return;
    dispatch(actions.add({ id, name, price, count: 1 }));
  }, [currentCard, dispatch, id, name, price]);

  const onHandleChange = evt => {
    const { value } = evt.target;
    dispatch(actions.add({ id, price, name, count: value }));
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
