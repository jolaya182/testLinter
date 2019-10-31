/**
 * title: App.js
 *
 * Date: / /2019
 *
 * author: javier olaya
 *
 * description: this component handles the basic routing for the webpage
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm.jsx';

// eslint-disable-next-line no-unused-vars
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import pages from '../css/index.scss';

const App = () => (
  <div>
    {' '}
    cool story bro
    <LoginForm></LoginForm>
  </div>
);

App.PropType = {
  myComponent: PropTypes.elementType
};

export default App;
