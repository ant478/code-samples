import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import IndexPage from 'src/pages/IndexPage';
import LinksPage from 'src/pages/LinksPage';
import ProjectsPage from 'src/pages/ProjectsPage';
import ExamplesPage from 'src/pages/ExamplesPage/';
import { CATEGORY_IDS } from 'src/consts/categories';

const DefaultRedirect = () => <Redirect to="/" />;

const AppSwitch = memo(() => (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path={`/${CATEGORY_IDS.links}`} component={LinksPage} />
    <Route exact path={`/${CATEGORY_IDS.projects}`} component={ProjectsPage} />
    <Route exact path={`/${CATEGORY_IDS.examples}/:exampleId?`} component={ExamplesPage} />
    <Route component={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
