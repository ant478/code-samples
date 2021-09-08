import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndexPage from '../pages/IndexPage';
import DemoPage from '../pages/DemoPage';

const RedirectToIndex = () => <Redirect to="/" />

const App = () => (
  <div className="app">
    <div className="app_header">
      <Header />
    </div>
    <main className="app_main">
      <div className="app_main-inner">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/demo" component={DemoPage} />
            <Route component={RedirectToIndex} />
          </Switch>
        </HashRouter>
      </div>
    </main>
    <div className="app_header">
      <Footer />
    </div>
  </div>
);

export default App;
