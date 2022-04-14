import setPerformanceTestBenchmarkSuites from '../benchmark-suites/set-performance-test';
import mapPerformanceTestBenchmarkSuites from '../benchmark-suites/map-performance-test';

export const EXAMPLES_IDS = {
  setPerformanceTest: 'set-performance-test',
  mapPerformanceTest: 'map-performance-test',
};

export const EXAMPLES_CONFIG = {
  [EXAMPLES_IDS.setPerformanceTest]: {
    title: 'Set performance test',
    benchmarkSuites: setPerformanceTestBenchmarkSuites,
  },
  [EXAMPLES_IDS.mapPerformanceTest]: {
    title: 'Map performance test',
    benchmarkSuites: mapPerformanceTestBenchmarkSuites,
  },
};
