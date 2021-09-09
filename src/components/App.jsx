import React from 'react';
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import IndexPage from '@/pages/IndexPage';
import ExamplesPage from '@/pages/ExamplesPage';
import LinksPage from '@/pages/LinksPage';
import ProjectsPage from '@/pages/ProjectsPage';
import SetPerformanceExamplePage from '@/pages/examples/SetPerformanceExamplePage';

const RedirectToIndex = () => <Redirect to="/" />;

const App = () => (
  <div className="app">
    <HashRouter>
      <div className="app_header">
        <Header />
      </div>
      <main className="app_main">
        <div className="app_main-inner">
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/examples" component={ExamplesPage} />
            <Route exact path="/examples/set-performance-testing" component={SetPerformanceExamplePage} />
            <Route exact path="/links" component={LinksPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route component={RedirectToIndex} />
          </Switch>
        </div>
      </main>
      <div className="app_footer">
        <Footer />
      </div>
    </HashRouter>
  </div>
);

export default App;
