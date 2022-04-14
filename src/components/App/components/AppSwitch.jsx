import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ExamplesPage from 'src/pages/ExamplesPage/';
import { CATEGORY_IDS } from 'src/consts/categories';

const DefaultRedirect = () => <Redirect to={`/${CATEGORY_IDS.performance}/`} />;

const AppSwitch = memo(() => (
  <Switch>
    <Route exact path={`/${CATEGORY_IDS.performance}/:exampleId?`} component={ExamplesPage} />
    <Route component={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
