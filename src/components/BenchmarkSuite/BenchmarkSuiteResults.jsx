import React from 'react';
import PropTypes from 'prop-types';
import mean from 'lodash/mean';

const BenchmarkSuiteResults = ({
  benchmarks,
  results,
}) => {
  const averageById = Object.entries(results).reduce((acc, [id, values]) => {
    acc[id] = (mean(values) || 0);
    return acc;
  }, {});

  return (
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
          {Object.entries(benchmarks).map(([id, { name }]) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                {results[id].map((value, index) => (
                  <span key={index}>{value}</span>
                ))}
              </td>
              <td>{averageById[id]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

BenchmarkSuiteResults.propTypes = {
  benchmarks: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
};

export default BenchmarkSuiteResults;
