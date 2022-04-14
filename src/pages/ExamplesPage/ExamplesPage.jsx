import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import PageWithSidebar from 'src/components/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
import { Redirect } from 'react-router-dom';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_CONFIG } from './consts/examples';
import ExamplesSidebar from './components/ExamplesSidebar';

const ExamplesPage = ({
  match: {
    params: {
      exampleId,
    },
  },
}) => {
  if (!EXAMPLES_CONFIG[exampleId]) {
    return (
      <Redirect to={`/${CATEGORY_IDS.performance}/${Object.keys(EXAMPLES_CONFIG)[0]}`} />
    );
  }

  const { title: exampleTitle, benchmarkSuites } = EXAMPLES_CONFIG[exampleId];

  return (
    <PageWithSidebar
      title={exampleTitle}
      sidebar={<ExamplesSidebar />}
    >
      {benchmarkSuites.map(({ id, title, benchmarks }) => (
        <BenchmarkSuite
          key={`${exampleId}${id}`}
          id={id}
          title={title}
          benchmarks={benchmarks}
        />
      ))}
    </PageWithSidebar>
  );
};

ExamplesPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default ExamplesPage;
