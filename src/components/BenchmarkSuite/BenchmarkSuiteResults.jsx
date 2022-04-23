import React, { memo, useEffect } from 'react';
import mean from 'lodash/mean';
import LargeNumberFormal from 'src/components/LargeNumberFormal';

const BenchmarkSuiteResults = memo(({
  benchmarks,
  results,
}) => {
  useEffect(() => {
    window.dispatchEvent(new Event('scroll-height-change-custom'));
  }, [results]);

  return (
    <div className="benchmark-suite-results">
      <table>
        <thead>
          <tr>
            <th>Test Name</th>
            <th>Times per second</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {benchmarks.map(({ id, title }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>
                {results[id].map((value, index) => (
                  <LargeNumberFormal
                    key={index}
                    value={Math.round(value)}
                  />
                ))}
              </td>
              <td>
                {results[id].length > 0 && (
                  <LargeNumberFormal
                    value={Math.round(mean(results[id]))}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default BenchmarkSuiteResults;
