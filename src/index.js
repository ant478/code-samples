import React from 'react';
import ReactDOM from 'react-dom';
import 'vendor/benchmark';
import 'src/scss/main.scss';
import App from 'src/components/App';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
