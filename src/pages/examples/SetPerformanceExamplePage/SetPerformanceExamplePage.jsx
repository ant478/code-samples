import React from 'react';
import SimplePage from 'src/components/SimplePage';
import BenchmarkSuite from 'src/components/BenchmarkSuite';
import benchmarkSuites from './consts/benchmark-suites';

const SetPerformanceExamplePage = () => (
  <SimplePage
    title="Set performance test"
  >
    {benchmarkSuites.map((suite) => <BenchmarkSuite key={suite.name} {...suite} />)}
  </SimplePage>
);

export default SetPerformanceExamplePage;
