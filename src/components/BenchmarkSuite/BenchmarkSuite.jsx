import React, {
  memo, useRef, useState, useEffect, useCallback,
} from 'react';
import Highlight from 'src/components/Highlight';
import BenchmarkSuiteResults from 'src/components/BenchmarkSuite/BenchmarkSuiteResults';
import cx from 'classnames';

const BenchmarkSuite = memo(({
  id,
  title,
  benchmarks,
}) => {
  const [isRunning, setIsRunning] = useState(false);

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

    suite.on('cycle', ({ target: { name, hz } }) => {
      updateResults({
        ...resultsRef.current,
        [name]: [...resultsRef.current[name], hz],
      });
    });

    suite.on('complete', () => {
      setIsRunning(false);
    });

    suiteRef.current = suite;

    return () => suiteRef.current.abort();
  }, [benchmarks, id, updateResults]);

  const handleRunClick = () => {
    if (isRunning) {
      return;
    }

    setIsRunning(true);
    suiteRef.current.run({ async: true });
  };

  const handleClearClick = () => {
    if (isRunning) {
      return;
    }

    updateResults(defaultResults);
  };

  const classes = cx('benchmark-suite', {
    'benchmark-suite__running': isRunning,
  });

  return (
    <article className={classes}>
      <h3 className="benchmark-suite_title">{title}</h3>
      <ul className="benchmark-suite_list">
        {benchmarks.map(({ id: benchmarkId, title: benchmarkTitle, fn }) => (
          <li
            key={benchmarkId}
            className="benchmark-suite_item"
          >
            <Highlight
              title={benchmarkTitle}
            >
              {fn.toString()}
            </Highlight>
          </li>
        ))}
      </ul>
      <div className="benchmark-suite_controls">
        <button
          className="benchmark-suite_button benchmark-suite_button__run"
          type="button"
          onClick={handleRunClick}
        >
          Run
        </button>
        <button
          className="benchmark-suite_button benchmark-suite_button__clear"
          type="button"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <BenchmarkSuiteResults
        benchmarks={benchmarks}
        results={results}
      />
    </article>
  );
});

export default BenchmarkSuite;
