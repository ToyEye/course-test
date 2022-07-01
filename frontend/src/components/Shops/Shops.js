import React from 'react';
import { ContainerStyled, TitleStyled, LinkStyled } from './Shops.styled';

const Shops = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Shops:</TitleStyled>

      <ul className="shopsContainer">
        <li className="item">
          <LinkStyled to="burger">Burger Shop</LinkStyled>
        </li>
        <li className="item">
          <LinkStyled to="chicken">Chicken shop</LinkStyled>
        </li>
        <li className="item">
          <LinkStyled to="fish">Fish shop</LinkStyled>
        </li>
      </ul>
    </ContainerStyled>
  );
};

export default Shops;
