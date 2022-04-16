import React, { memo } from 'react';
import NavigationSidebar from 'src/components/NavigationSidebar';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES_CONFIG } from '../consts/examples';

const LINKS = Object.entries(EXAMPLES_CONFIG).map(([exampleId, { title }]) => ({
  exact: true,
  to: `/${CATEGORY_IDS.performance}/${exampleId}`,
  title,
}));

const PerformanceSidebar = memo(() => (
  <NavigationSidebar
    links={LINKS}
  />
));

export default PerformanceSidebar;
