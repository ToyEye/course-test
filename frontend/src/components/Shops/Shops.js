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
          <LinkStyled to="wildfowl">Chicken shop</LinkStyled>
        </li>
        <li className="item">
          <LinkStyled to="steak">Steak shop</LinkStyled>
        </li>
      </ul>
    </ContainerStyled>
  );
};

export default Shops;
