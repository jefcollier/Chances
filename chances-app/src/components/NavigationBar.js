import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Chances App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dice">Dice Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/card">Card Calculator</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/birthday">Birthday Paradox</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
