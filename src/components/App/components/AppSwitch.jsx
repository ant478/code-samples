import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PerformancePage from 'src/pages/PerformancePage';
import DataStructuresPage from 'src/pages/DataStructures';
import { CATEGORY_IDS } from 'src/consts/categories';

const DefaultRedirect = () => <Redirect to={`/${CATEGORY_IDS.performance}/`} />;

const AppSwitch = memo(() => (
  <Switch>
    <Route exact path={`/${CATEGORY_IDS.performance}/:exampleId?`} component={PerformancePage} />
    <Route exact path={`/${CATEGORY_IDS.dataStructures}/:exampleId?`} component={DataStructuresPage} />
    <Route component={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
