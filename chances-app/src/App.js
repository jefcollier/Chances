import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import DiceCalculatorPage from './components/DiceCalculatorPage';
import CardCalculatorPage from './components/CardCalculatorPage';
import BirthdayParadoxPage from './components/BirthdayParadoxPage';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className="container mt-3">
        <div className="d-flex justify-content-end mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="themeSwitch"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label className="form-check-label" htmlFor="themeSwitch">
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dice" element={<DiceCalculatorPage theme={theme} />} />
          <Route path="/card" element={<CardCalculatorPage />} />
          <Route path="/birthday" element={<BirthdayParadoxPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
