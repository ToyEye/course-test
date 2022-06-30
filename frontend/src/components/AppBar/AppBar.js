import React from 'react';
import { NavLinkStyled, Container } from './AppBar.styled';

const AppBar = () => {
  return (
    <Container>
      <NavLinkStyled to="/">Shops</NavLinkStyled>
      <NavLinkStyled to="/shoppingCard">Shopping Card</NavLinkStyled>
    </Container>
  );
};

export default AppBar;
