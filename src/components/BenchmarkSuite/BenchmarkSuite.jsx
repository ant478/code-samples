import React, {
  memo, useRef, useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import Highlight from 'src/components/Highlight';
import BenchmarkSuiteResults from 'src/components/BenchmarkSuite/BenchmarkSuiteResults';

const BenchmarkSuite = memo(({
  id,
  title,
  benchmarks,
}) => {
  // const [isRunning, setIsRunning] = useState(false);

  const defaultResults = benchmarks.reduce((acc, { id: benchmarkId }) => {
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
    const suite = new Benchmark.Suite({ name: id });

    benchmarks.forEach(
      ({ id: benchmarkId, maxTime, fn }) => suite.add({ name: benchmarkId, maxTime, fn }),
    );

    suite.on('cycle', ({ target: benchmarkObject }) => {
      const value = Math.round(benchmarkObject.hz);

      resultsRef.current[benchmarkObject.name].push(value);
      updateResults({ ...resultsRef.current });
    });

    suite.on('complete', () => {
      // setIsRunning(false);
    });

    suiteRef.current = suite;

    return () => suiteRef.current.abort();
  }, [benchmarks, id, updateResults]);

  const handleRunClick = useCallback(() => {
    // setIsRunning(true);
    suiteRef.current.run({ async: true });
  }, []);

  return (
    <div>
      <div>{title}</div>
      <ul>
        {benchmarks.map(({ id: benchmarkId, title: benchmarkTitle, fn }) => (
          <li key={benchmarkId}>
            <div>{benchmarkTitle}</div>
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
  title: PropTypes.string.isRequired,
  benchmarks: PropTypes.array.isRequired,
};

export default BenchmarkSuite;
