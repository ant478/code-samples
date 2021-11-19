import React from 'react';
import PageWithSidebar from 'src/components/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
import benchmarkSuites from './consts/benchmark-suites';
import ExamplesSidebar from '../ExamplesSidebar';

const SetPerformanceExamplePage = () => (
  <PageWithSidebar
    title="Set performance test"
    sidebar={<ExamplesSidebar />}
  >
    {Object.entries(benchmarkSuites).map(([id, { name, benchmarks }]) => (
      <BenchmarkSuite
        key={id}
        id={id}
        name={name}
        benchmarks={benchmarks}
      />
    ))}
  </PageWithSidebar>
);

export default SetPerformanceExamplePage;
