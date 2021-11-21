import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'vendor/benchmark';
import 'src/scss/main.scss';
import App from 'src/components/App/App';

ReactDOM.render(
  React.createElement(Router, {}, React.createElement(App)),
  document.getElementById('root'),
);
