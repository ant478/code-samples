import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_IDS } from '../consts/examples-ids';
import SetPerformanceExamplePage from './SetPerformanceExamplePage';

const ExamplesRedirect = () => <Redirect to={`/${CATEGORY_IDS.examples}/${EXAMPLES_IDS.setPerformanceTesting}`} />;
const EXAMPLE_ID_TO_COMPONENT_MAPPING = {
  [EXAMPLES_IDS.setPerformanceTesting]: SetPerformanceExamplePage,
};

const ExamplesRoutes = [
  <Route
    exact
    path={`/${CATEGORY_IDS.examples}`}
    render={ExamplesRedirect}
  />,
  Object.entries(EXAMPLE_ID_TO_COMPONENT_MAPPING).map(([exampleId, Component]) => (
    <Route
      key={exampleId}
      exact
      path={`/${CATEGORY_IDS.examples}/${exampleId}`}
      render={Component}
    />
  )),
];

export default ExamplesRoutes;
