'use client'
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a new context
const ThemeContext = createContext();

// Create a custom hook to use the context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
