import React from 'react';
import PageWithSidebar from 'src/components/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
import { Redirect } from 'react-router-dom';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES } from './consts/examples';
import PerformanceSidebar from './components/PerformanceSidebar';

const PerformancePage = ({
  match: {
    params: {
      exampleId,
    },
  },
}) => {
  const exampleConfig = EXAMPLES.find(({ id }) => id === exampleId);

  if (!exampleConfig) {
    return (
      <Redirect to={`/${CATEGORY_IDS.performance}/${EXAMPLES[0].id}`} />
    );
  }

  const { title: exampleTitle, description, benchmarkSuites } = exampleConfig;

  return (
    <PageWithSidebar
      title={exampleTitle}
      description={description}
      sidebar={<PerformanceSidebar />}
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

export default PerformancePage;
