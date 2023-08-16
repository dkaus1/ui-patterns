'use client'
// Header.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>Theme Switcher</h1>
      <label className="switch">
      <input type="checkbox" onClick={toggleTheme} />
      <span className="slider round" />
    </label>
    </header>
  );
};

export default Header;
