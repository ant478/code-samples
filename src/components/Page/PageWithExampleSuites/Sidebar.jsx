import React, { memo, useMemo } from 'react';
import NavigationSidebar from 'src/components/NavigationSidebar';
import { CATEGORIES } from 'src/consts/categories';

const Sidebar = memo(({
  categoryId,
}) => {
  const category = CATEGORIES.find(({ id }) => id === categoryId);

  const links = useMemo(() => category.examples.map(({ id: exampleId, title, suites }) => ({
    to: `/${categoryId}/${exampleId}`,
    title,
    hashLinks: suites && suites.map(({ id: suiteId, title: suiteTitle }) => ({
      exact: true,
      title: suiteTitle,
      hash: `#${suiteId}`,
    })),
  })), [category.examples, categoryId]);

  return (
    <NavigationSidebar links={links} />
  );
});

export default Sidebar;
