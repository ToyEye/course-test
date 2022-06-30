import React from 'react';
import { ContainerStyled, TitleStyled, LinkStyled } from './Shops.styled';

const Shops = () => {
  return (
    <ContainerStyled>
      <TitleStyled>Shops:</TitleStyled>

      <ul className="shopsContainer">
        <li className="item">
          <LinkStyled to="mac"> Mac Donny</LinkStyled>
        </li>
        <li className="item">
          <LinkStyled to="/">CFK</LinkStyled>
        </li>
        <li className="item">
          <LinkStyled to="/"> Chuck</LinkStyled>
        </li>
      </ul>
    </ContainerStyled>
  );
};

export default Shops;
