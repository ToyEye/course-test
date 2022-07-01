import React from 'react';
import AppBar from 'components/AppBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'views/HomePage';
import CartPage from 'views/CartPage';
import Food from 'components/Food';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="mac" element={<Food />} />
        </Route>
        <Route path="/card" element={<CartPage />} />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
}

export default App;
