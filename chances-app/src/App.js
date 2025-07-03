import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import DiceCalculatorPage from './components/DiceCalculatorPage';
import CardCalculatorPage from './components/CardCalculatorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dice" element={<DiceCalculatorPage />} />
          <Route path="/card" element={<CardCalculatorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
