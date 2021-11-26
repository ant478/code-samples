import React, { memo } from 'react';
import PropTypes from 'prop-types';
import BenchmarkSuite from 'src/components/BenchmarkSuite/BenchmarkSuite';
import {
  EXAMPLES_CONFIG,
  EXAMPLES_TYPES,
} from '../consts/examples';

const ExamplesPageContentResolver = memo(({
  exampleId,
}) => {
  const config = EXAMPLES_CONFIG[exampleId];

  if (config.type === EXAMPLES_TYPES.codeSamplesPerformanceTest) {
    return config.benchmarkSuites.map(({ id, title, benchmarks }) => (
      <BenchmarkSuite
        key={`${exampleId}}${id}`}
        id={id}
        title={title}
        benchmarks={benchmarks}
      />
    ));
  }

  return null;
});

export default ExamplesPageContentResolver;

ExamplesPageContentResolver.propTypes = {
  exampleId: PropTypes.string.isRequired,
};
