import React, { memo } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { CATEGORIES } from 'src/consts/categories';
import PageWithExampleSuites from 'src/components/Page/PageWithExampleSuites';

const EXAMPLE_SUITES_RENDER_FUNCTION_BY_CATEGORY_ID = CATEGORIES.reduce((acc, { id: categoryId }) => ({
  ...acc,
  [categoryId]: ({
    match: {
      params: {
        exampleId,
      },
    },
  }) => (
    <PageWithExampleSuites
      categoryId={categoryId}
      exampleId={exampleId}
    />
  ),
}), {});

const DefaultRedirect = () => <Redirect to={`/${CATEGORIES[0].id}/`} />;

const AppSwitch = memo(() => (
  <Switch>
    {CATEGORIES.map(({ id }) => (
      <Route
        exact
        key={id}
        path={`/${id}/:exampleId?`}
        render={EXAMPLE_SUITES_RENDER_FUNCTION_BY_CATEGORY_ID[id]}
      />
    ))}
    <Route component={DefaultRedirect} />
  </Switch>
));

export default AppSwitch;
