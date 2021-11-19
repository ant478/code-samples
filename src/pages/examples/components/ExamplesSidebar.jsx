import React, { memo } from 'react';
import NavigationSidebar from 'src/components/NavigationSidebar';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_IDS } from '../consts/examples-ids';

const LINKS = [
  {
    exact: true,
    to: `/${CATEGORY_IDS.examples}/${EXAMPLES_IDS.setPerformanceTesting}`,
    title: 'Set performance test',
  },
];

const ExamplesSidebar = memo(() => (
  <NavigationSidebar
    links={LINKS}
  />
));

export default ExamplesSidebar;
