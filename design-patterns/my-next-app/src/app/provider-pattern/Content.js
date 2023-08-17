'use client'
// Content.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <div className={`content ${theme}`}>
      <p>This example uses the provider design pattern to demonstrate theme switching.</p>
      <br/>
      <p>Provider pattern is a design approach used to manage and pass data down the component tree without the need to explicitly pass props through every intermediate component. </p>
      <br/>
      <p>With the Provider Pattern, we can make data available to multiple components. Rather than passing that data down each layer through props, we can wrap all components in a Provider. A Provider is a higher order component provided to us by the Context object. </p>
      <br/>
      <p>Use the Provider pattern when you have data or a state that multiple components need to access and share without passing it through each component as props.</p>
      <br/>
      <p>Other examples where a provider pattern will be useful are:</p>
      <ul>
        <li>User Authentication</li>
        <li>Language preferences</li>
        <li>Notifications</li>
      </ul>
    </div>
  );
};

export default Content;
