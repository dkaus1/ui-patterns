'use client'
// Content.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
      <p>This is the content area.</p>
    </div>
  );
};

export default Content;
