import React from 'react';
import ReactDom from 'react-dom';

// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

ReactDom.render(
  React.createElement(App, null, ''),
  document.getElementById('app')
);
