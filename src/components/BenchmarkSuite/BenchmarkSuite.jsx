import React, {
  memo, useRef, useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Highlight from 'src/components/Highlight';
import BenchmarkSuiteResults from 'src/components/BenchmarkSuite/BenchmarkSuiteResults';

const BenchmarkSuite = memo(({
  id: suiteId,
  name,
  benchmarks,
}) => {
  // const [isRunning, setIsRunning] = useState(false);

  const defaultResults = Object.keys(benchmarks).reduce((acc, benchmarkId) => {
    acc[benchmarkId] = [];
    return acc;
  }, {});
  const [results, setResults] = useState(defaultResults);

  const resultsRef = useRef(results);
  const suiteRef = useRef(null);

  const updateResults = useCallback((data) => {
    resultsRef.current = data;
    setResults(resultsRef.current);
  }, []);

  useEffect(() => {
    const suite = new Benchmark.Suite({ name: suiteId });

    Object.entries(benchmarks).forEach(
      ([benchmarkId, { maxTime, fn }]) => suite.add({ name: benchmarkId, maxTime, fn }),
    );

    suite.on('cycle', ({ target: benchmark }) => {
      const value = Math.round(benchmark.hz);

      resultsRef.current[benchmark.name].push(value);
      updateResults({ ...resultsRef.current });
    });

    suite.on('complete', () => {
      // setIsRunning(false);
    });

    suiteRef.current = suite;
  }, [benchmarks, suiteId, updateResults]);

  const handleRunClick = useCallback(() => {
    // setIsRunning(true);
    suiteRef.current.run({ async: true });
  }, []);

  return (
    <div>
      <div>{name}</div>
      <ul>
        {Object.entries(benchmarks).map(([benchmarkId, { name: benchmarkName, fn }]) => (
          <li key={benchmarkId}>
            <div>{benchmarkName}</div>
            <Highlight>{fn.toString()}</Highlight>
          </li>
        ))}
      </ul>
      <div>
        <BenchmarkSuiteResults
          benchmarks={benchmarks}
          results={results}
        />
      </div>
      <button type="button" onClick={handleRunClick}>Run</button>
    </div>
  );
});

BenchmarkSuite.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  benchmarks: PropTypes.object.isRequired,
};

export default BenchmarkSuite;
