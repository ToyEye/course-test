import React from 'react';
import { Outlet } from 'react-router-dom';
import Shops from 'components/Shops';
import { Container } from 'components/reusableComponents';

const HomePage = () => {
  return (
    <Container>
      <Shops />
      <Outlet />
    </Container>
  );
};

export default HomePage;
