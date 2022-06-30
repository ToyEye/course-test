import React from 'react';
import { FoodContainerStyled } from './Foord.styles';
import burger from 'assets/img/card.jpg';

const Food = () => {
  return (
    <FoodContainerStyled>
      <ul>
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>{' '}
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>{' '}
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>{' '}
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>{' '}
        <li>
          <article>
            <img src={burger} alt="img" width="320px" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </li>
      </ul>
    </FoodContainerStyled>
  );
};

export default Food;
