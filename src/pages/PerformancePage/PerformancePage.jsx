import React from 'react';
import PageWithSidebar from 'src/components/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
import { Redirect } from 'react-router-dom';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_CONFIG } from './consts/examples';
import PerformanceSidebar from './components/PerformanceSidebar';

const PerformancePage = ({
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

  const { title: exampleTitle, description, benchmarkSuites } = EXAMPLES_CONFIG[exampleId];

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
