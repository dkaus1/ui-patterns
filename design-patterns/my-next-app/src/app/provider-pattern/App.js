'use client'

// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';
import './App.css'; // Make sure you have this CSS file

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
