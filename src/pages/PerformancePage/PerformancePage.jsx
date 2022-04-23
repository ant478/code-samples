import React from 'react';
import { useHistory } from 'react-router-dom';
import PageWithSidebar from 'src/components/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
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
  const history = useHistory();
  let exampleConfig = EXAMPLES.find(({ id }) => id === exampleId);

  if (!exampleConfig) {
    exampleConfig = EXAMPLES[0];
    history.replace(`/${CATEGORY_IDS.performance}/${exampleConfig.id}`);
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
          key={`${exampleConfig.id}${id}`}
          id={id}
          title={title}
          benchmarks={benchmarks}
        />
      ))}
    </PageWithSidebar>
  );
};

export default PerformancePage;
