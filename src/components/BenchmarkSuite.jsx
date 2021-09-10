import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import Highlight from 'src/components/Highlight';

const BenchmarkSuite = memo(({
  name,
  benchmarks,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState({});
  const resultsRef = useRef(results);
  const suiteRef = useRef(null);

  const updateResults = useCallback((data) => {
    resultsRef.current = data;
    setResults(resultsRef.current);
  }, []);

  useEffect(() => {
    const suite = new Benchmark.Suite({ name });

    benchmarks.forEach((options) => suite.add(options));

    suite.on('cycle', ({ target: benchmark }) => {
      const value = Math.round(benchmark.hz);

      if (resultsRef.current[benchmark.name]) {
        resultsRef.current[benchmark.name].push(value);
      } else {
        resultsRef.current[benchmark.name] = [value];
      }

      updateResults({ ...resultsRef.current });
    });

    suite.on('complete', () => {
      setIsRunning(false);
    });

    suiteRef.current = suite;
  }, []);

  const handleRunClick = useCallback(() => {
    setIsRunning(true);
    suiteRef.current.run({ async: true });
  }, []);

  return (
    <div>
      <div>{name}</div>
      <ul>
        {benchmarks.map(({ name: benchmarkName, fn }) => (
          <li key={benchmarkName}>
            <div>{benchmarkName}</div>
            <Highlight>{fn.toString()}</Highlight>
          </li>
        ))}
      </ul>
      <div>{JSON.stringify(results, null, 2)}</div>
      <button type="button" onClick={handleRunClick}>Run</button>
    </div>
  );
});

export default BenchmarkSuite;
