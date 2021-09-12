import React from 'react';
import PageWithSidebar from 'src/components/Page/PageWithSidebar';
import BenchmarkSuite from 'src/components/BenchmarkSuite';
import benchmarkSuites from './consts/benchmark-suites';

const SetPerformanceExamplePage = () => (
  <PageWithSidebar
    sidebar={<div style={{ 'backgroundColor': 'blue', height: '50%' }}/>}
    title="Set performance test"
  >
    {benchmarkSuites.map((suite) => <BenchmarkSuite key={suite.name} {...suite} />)}
  </PageWithSidebar>
);

export default SetPerformanceExamplePage;
