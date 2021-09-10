import React from 'react';
import { Link } from 'react-router-dom';
import SimplePage from 'src/components/SimplePage';

const ITEMS = [
  {
    to: '/examples/set-performance-testing',
    title: 'Set Performance Testing',
  },
];

const ExamplesPage = () => (
  <SimplePage title="Examples:">
    <ul>
      {ITEMS.map(({ to, title }) => (
        <li key={to}>
          <Link to={to}>{title}</Link>
        </li>
      ))}
    </ul>
  </SimplePage>
);

export default ExamplesPage;
