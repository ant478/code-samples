import React, { memo } from 'react';
import NavigationSidebar from 'src/components/NavigationSidebar';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES } from '../consts/examples';

const LINKS = EXAMPLES.map(({ id: exampleId, title, benchmarkSuites }) => ({
  to: `/${CATEGORY_IDS.performance}/${exampleId}`,
  title,
  hashLinks: benchmarkSuites.map(({ id: benchmarkSuiteId, title: benchmarkTitle }) => ({
    exact: true,
    to: `/${CATEGORY_IDS.performance}/${exampleId}#${benchmarkSuiteId}`,
    title: benchmarkTitle,
  })),
}));

const PerformanceSidebar = memo(() => (
  <NavigationSidebar
    links={LINKS}
  />
));

export default PerformanceSidebar;
