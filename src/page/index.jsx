/* eslint-disable react/prop-types */
/**
 * title: index.jsx
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles all the pages to render on the webpage
 */
// main page component create the 404 page and the all other
// pages as exported components
import React from 'react';
import MainMenu from './MainMenu';
// bring what ever component to render

export const Whoops404 = () => (
  <div className="">
    <h1>
      resources not found at
      {location.pathname}
    </h1>
  </div>
);

export const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

export const myComponent = () => <PageTemplate />;
