import React from 'react';
import { FoodContainerStyled, ItemStyled } from './Food.styles';
import burger from 'assets/img/card.jpg';

const Food = () => {
  return (
    <FoodContainerStyled>
      <ul className="list">
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
        <ItemStyled>
          <article>
            <img src={burger} alt="img" />
            <p>Name</p>
            <button type="button">add to Cart</button>
          </article>
        </ItemStyled>
      </ul>
    </FoodContainerStyled>
  );
};

export default Food;
