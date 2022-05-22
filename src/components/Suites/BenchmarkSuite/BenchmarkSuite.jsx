import React, {
  memo,
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import Highlight from 'src/components/Highlight';
import SimpleLoader from 'src/components/SimpleLoader';
import ControlButton from 'src/components/ControlButton';
import BenchmarkSuiteResults from 'src/components/Suites/BenchmarkSuite/BenchmarkSuiteResults';

const BenchmarkSuite = memo(({
  id,
  title,
  benchmarks,
}) => {
  const defaultResults = useMemo(
    () => benchmarks.reduce((acc, { id: benchmarkId }) => ({ ...acc, [benchmarkId]: [] }), {}),
    [benchmarks],
  );

  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState(defaultResults);
  const resultsRef = useRef(results);
  const suiteRef = useRef(null);

  const updateResults = useCallback((data) => {
    resultsRef.current = data;
    setResults(resultsRef.current);
  }, []);

  const handleRunClick = useCallback(() => {
    if (isRunning) {
      return;
    }

    setIsRunning(true);
    suiteRef.current.run({ async: true });
  }, [isRunning]);

  const handleClearClick = useCallback(() => {
    if (isRunning) {
      return;
    }

    updateResults(defaultResults);
  }, [defaultResults, isRunning, updateResults]);

  useEffect(() => {
    const suite = new Benchmark.Suite({ name: id });

    benchmarks.forEach(
      ({ id: benchmarkId, maxTime, fn }) => suite.add({ name: benchmarkId, maxTime, fn }),
    );

    suite.on('cycle', ({ target: { name, hz } }) => {
      updateResults({
        ...resultsRef.current,
        [name]: [...resultsRef.current[name], 1e9 / hz],
      });
    });

    suite.on('complete', () => {
      setIsRunning(false);
    });

    suiteRef.current = suite;

    return () => suiteRef.current.abort();
  }, [benchmarks, id, updateResults]);

  return (
    <article className="benchmark-suite">
      <h3
        id={id}
        className="benchmark-suite_title"
      >
        {title}
      </h3>
      <ul className="benchmark-suite_list">
        {benchmarks.map(({ id: benchmarkId, title: benchmarkTitle, listing }) => (
          <li
            key={benchmarkId}
            className="benchmark-suite_item"
          >
            <Highlight title={benchmarkTitle}>
              {listing}
            </Highlight>
          </li>
        ))}
      </ul>
      <div className="benchmark-suite_controls">
        <ControlButton
          isDisabled={isRunning}
          className="benchmark-suite_button-mix"
          onClick={handleRunClick}
          icon={isRunning ? <SimpleLoader /> : '▶'}
        >
          Run
        </ControlButton>
        <ControlButton
          isDisabled={isRunning}
          className="benchmark-suite_button-mix"
          onClick={handleClearClick}
          icon="&#128473;"
        >
          Clear
        </ControlButton>
      </div>
      <BenchmarkSuiteResults
        benchmarks={benchmarks}
        results={results}
      />
    </article>
  );
});

export default BenchmarkSuite;
