import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PageWithSidebar from 'src/components/PageWithSidebar';
import { Redirect } from 'react-router-dom';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_CONFIG } from './consts/examples';
import ExamplesSidebar from './components/ExamplesSidebar';
import ExamplesPageContentResolver from './components/ExamplesPageContentResolver';

const ExamplesPage = ({
  match: {
    params: {
      exampleId,
    },
  },
}) => {
  if (!exampleId) {
    return (
      <Redirect to={`/${CATEGORY_IDS.examples}/${Object.keys(EXAMPLES_CONFIG)[0]}`} />
    );
  }

  const { title } = EXAMPLES_CONFIG[exampleId];

  return (
    <PageWithSidebar
      title={title}
      sidebar={<ExamplesSidebar />}
    >
      <ExamplesPageContentResolver
        exampleId={exampleId}
      />
    </PageWithSidebar>
  );
};

ExamplesPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default ExamplesPage;
