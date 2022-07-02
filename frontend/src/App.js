import React, { lazy } from 'react';
import AppBar from 'components/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';

const HomePage = lazy(() => import('./views/HomePage'));
const CartPage = lazy(() => import('./views/CartPage'));
const Food = lazy(() => import('components/Food'));

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="burger" element={<Food shop="Burger" />} />
          <Route path="wildfowl" element={<Food shop="Wildfowl" />} />
          <Route path="steak" element={<Food shop="Steak" />} />
        </Route>
        <Route path="/card" element={<CartPage />} />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
