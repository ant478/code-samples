import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import IndexPage from 'src/pages/IndexPage';
import LinksPage from 'src/pages/LinksPage';
import ProjectsPage from 'src/pages/ProjectsPage';
import { CATEGORY_IDS } from 'src/consts/categories';
import { ExamplesRoutes } from 'src/pages/examples';

const DefaultRedirect = () => <Redirect to="/" />;

const AppSwitch = memo(() => (
  <Switch>
    <Route exact path="/" render={IndexPage} />
    <Route exact path={`/${CATEGORY_IDS.links}`} render={LinksPage} />
    <Route exact path={`/${CATEGORY_IDS.projects}`} render={ProjectsPage} />
    {ExamplesRoutes}
    <Route render={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
