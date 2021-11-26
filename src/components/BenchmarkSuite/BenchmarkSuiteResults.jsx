import React, { memo } from 'react';
import PropTypes from 'prop-types';
import mean from 'lodash/mean';

const BenchmarkSuiteResults = memo(({
  benchmarks,
  results,
}) => (
  <div className="benchmark-suite-results">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Results</th>
          <th>Average</th>
        </tr>
      </thead>
      <tbody>
        {benchmarks.map(({ id, title }) => (
          <tr key={id}>
            <td>{title}</td>
            <td>
              {results[id].map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </td>
            <td>{mean(results[id]) || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

BenchmarkSuiteResults.propTypes = {
  benchmarks: PropTypes.array.isRequired,
  results: PropTypes.object.isRequired,
};

export default BenchmarkSuiteResults;
