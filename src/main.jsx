import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'vendor/benchmark';
import 'src/scss/main.scss';
import App from 'src/components/App/App';
import {
  registerPushNotificationsServiceWorker,
} from 'src/service-workers';

registerPushNotificationsServiceWorker();

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
