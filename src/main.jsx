import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'vendor/benchmark';
import 'src/scss/main.scss';
import App from 'src/components/App/App';
import { Footer } from '@ant478/web-components';

customElements.define('ant478-footer', Footer);

ReactDOM.render(
  (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  ),
  document.getElementById('root'),
);
