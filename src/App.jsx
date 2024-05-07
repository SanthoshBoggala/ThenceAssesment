import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import HomePage from './HomePage/HomePage';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
