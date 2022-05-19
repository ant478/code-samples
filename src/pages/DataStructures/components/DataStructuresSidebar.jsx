import React, { memo } from 'react';
import NavigationSidebar from 'src/components/NavigationSidebar';
import { CATEGORY_IDS } from 'src/consts/categories';
import { EXAMPLES } from '../consts/examples';

const LINKS = EXAMPLES.map(({ id: exampleId, title }) => ({
  to: `/${CATEGORY_IDS.dataStructures}/${exampleId}`,
  title,
}));

const DataStructuresSidebar = memo(() => <NavigationSidebar links={LINKS} />);

export default DataStructuresSidebar;
