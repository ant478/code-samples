import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import IndexPage from 'src/pages/IndexPage';
import LinksPage from 'src/pages/LinksPage';
import ProjectsPage from 'src/pages/ProjectsPage';
import SetPerformanceExamplePage from 'src/pages/examples/SetPerformanceExamplePage';

const DefaultRedirect = () => <Redirect to="/" />
const ExamplesRedirect = () => <Redirect to="/examples/set-performance-testing" />

const AppSwitch = memo(() => (
  <Switch>
    <Route exact path="/" render={IndexPage} />
    <Route exact path="/examples" render={ExamplesRedirect} />
    <Route exact path="/examples/set-performance-testing" render={SetPerformanceExamplePage} />
    <Route exact path="/links" render={LinksPage} />
    <Route exact path="/projects" render={ProjectsPage} />
    <Route render={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
